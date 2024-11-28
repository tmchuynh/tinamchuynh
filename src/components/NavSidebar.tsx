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
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { data } from "@/data/data";

export function NavSidebar( { ...props }: React.ComponentProps<typeof Sidebar> ) {
  const [openItemKey, setOpenItemKey] = React.useState<string | null>( null );

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="grid flex-1 text-left text-sm leading-tight p-3">
              <span className="truncate font-semibold">Tina Huynh</span>
              <span className="truncate text-xs">Full Stack Web Developer</span>
            </div>
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
