"use client";

import * as React from "react";

import { NavFooter } from "@/components/ui/NavFooter";
import { NavMain } from "@/components/ui/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { data } from "@/data/data";

export function NavSidebar( { ...props }: React.ComponentProps<typeof Sidebar> ) {
  // State to keep track of the currently open menu item's key across all NavMain components
  const [openItemKey, setOpenItemKey] = React.useState<string | null>( null );

  return (
    <Sidebar variant="inset" {...props} className="rounded-e-3xl shadow-md border hover:shadow-md">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Tina Huynh</span>
                <span className="truncate text-xs">Full Stack Web Developer</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          title="General"
          items={data.navMain}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
        <NavMain
          title="Past & Future Work"
          items={data.information}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
