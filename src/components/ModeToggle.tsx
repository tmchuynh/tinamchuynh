"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  // Ensure the theme is accessed after the component is mounted
  useEffect( () => {
    setMounted( true );
  }, [] );

  useEffect( () => {
    const handleKeydown = ( e: KeyboardEvent ) => {
      console.log( e.key );
      if ( e.ctrlKey && e.metaKey && e.key === "d" ) {
        setTheme( theme === "dark" ? "light" : "dark" );
      }
    };

    window.addEventListener( "keydown", handleKeydown );

    return () => {
      window.removeEventListener( "keydown", handleKeydown );
    };
  } );

  if ( !mounted ) {
    return null; // Render nothing until the component is mounted
  }

  const handleThemeToggle = () => {
    // Toggle between light and dark themes
    setTheme( theme === "dark" ? "light" : "dark" );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon" aria-label="Toggle Dark Mode" className="min-h-12 min-w-12 hover:bg-secondary">
          {theme === "dark" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all rotate-12 scale-100" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => { setTheme( "light" ); handleThemeToggle(); console.log( theme ); }}>
          Light
          {theme === "light" && (
            <span className="ml-2 text-sm text-popover-foreground">(active)</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { setTheme( "dark" ); handleThemeToggle(); }}>
          Dark
          {theme === "dark" && (
            <span className="ml-2 text-sm text-muted-foreground">(active)</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
