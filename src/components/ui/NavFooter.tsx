"use client";

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import React, { } from "react";
import { ModeToggle } from "../ModeToggle";

export function NavFooter() {

    return (
        <SidebarMenu >
            <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                    <div className="flex justify-end">
                        <ModeToggle />
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
