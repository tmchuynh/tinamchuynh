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
import { navItem, navSubItem } from "@/data/types";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export function NavMenuItem( {
  item,
  itemKey,
  isOpen,
  onOpenChange,
}: {
  item: navItem;
  itemKey: string;
  isOpen: boolean;
  onOpenChange: ( open: boolean ) => void;
} ) {
  const router = useRouter();

  const handleClick = ( url: string ) => {
    onOpenChange( false );

    if ( url ) {
      router.push( url );
    }
  };

  return (
    <SidebarMenuItem>
      <Collapsible open={isOpen} onOpenChange={onOpenChange}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            onClick={() => handleClick( item.url ? item.url : '' )}
            className="flex w-full items-center gap-2 p-2"
            aria-controls="..."
            aria-label={item.title}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span>
                  <item.icon
                    aria-hidden="true"
                    aria-label={String( item.icon )}
                  />
                </span>
                <span>{item.title}</span>
              </div>
              {item.items?.length ? (
                <ChevronRight
                  aria-hidden="true"
                  aria-label="expand menu"
                  className={`transition-transform duration-200 ease-in-out transform ${ isOpen ? "rotate-90" : "" }`}
                />
              ) : null}
            </div>
          </SidebarMenuButton>
        </CollapsibleTrigger>

        {item.items?.length ? (
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items.map( ( subItem: navSubItem, subIndex: number ) => (
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
      </Collapsible>
    </SidebarMenuItem>
  );
}

export function NavMain( {
  items,
  title,
  openItemKey,
  setOpenItemKey,
}: {
  title: string;
  items: navItem[];
  openItemKey: string | null;
  setOpenItemKey: React.Dispatch<React.SetStateAction<string | null>>;
} ) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map( ( item, index ) => {
          const itemKey = `${ title }_${ item.title }__${ index }`;
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
