"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export function NavMenuItem( {
  item,
  itemKey,
  isOpen,
  onOpenChange,
}: {
  item: any;
  itemKey: string;
  isOpen: boolean;
  onOpenChange: ( open: boolean ) => void;
} ) {
  const router = useRouter(); // Initialize the useRouter hook

  const handleClick = ( url: string ) => {
    // Close the collapsible menu when clicked
    onOpenChange( false );

    // If the item has a URL, navigate to it using useRouter
    if ( url ) {
      router.push( url ); // Use router.push to navigate to the URL within the app
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            onClick={() => handleClick( item.url )} // Call handleClick with the URL
            className="flex w-full items-center gap-2 p-2"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <item.icon />
                <span>{item.title}</span>
              </div>
              {item.items?.length ? (
                <ChevronRight
                  className={`transition-transform duration-200 ease-in-out transform ${ isOpen ? "rotate-90" : ""
                    }`}
                />
              ) : null}
            </div>
          </SidebarMenuButton>
        </CollapsibleTrigger>

        {item.items?.length ? (
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items.map( ( subItem: any, subIndex: number ) => (
                <SidebarMenuSubItem key={`${ itemKey }_sub_${ subIndex }`}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span>{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ) )}
            </SidebarMenuSub>
          </CollapsibleContent>
        ) : null}
      </SidebarMenuItem>
    </Collapsible>
  );
}


export function NavMain( {
  items,
  title,
  openItemKey,
  setOpenItemKey,
}: {
  title: string;
  items: {
    title: string;
    url?: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  openItemKey: string | null;
  setOpenItemKey: React.Dispatch<React.SetStateAction<string | null>>;
} ) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map( ( item, index ) => {
          const itemKey = `${ title }_${ item.title }__${ index }`; // Including `title` to ensure uniqueness across NavMain components
          const isOpen = openItemKey === itemKey;

          return (
            <NavMenuItem
              key={itemKey}
              item={item}
              itemKey={itemKey}
              isOpen={isOpen}
              onOpenChange={( open: boolean ) => {
                setOpenItemKey( open ? itemKey : null );
              }}
            />
          );
        } )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
