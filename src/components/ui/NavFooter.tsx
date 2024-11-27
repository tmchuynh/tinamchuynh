"use client";

import {
    Command,
} from "lucide-react";
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
                    <div>
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <Command className="size-4" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <ModeToggle />
                        </div>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
