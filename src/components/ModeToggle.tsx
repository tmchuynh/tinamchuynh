"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  useEffect( () => {
    const handleKeydown = ( e: KeyboardEvent ) => {
      if ( e.ctrlKey && e.altKey && e.key === "l" ) {
        setTheme( theme === "dark" ? "light" : "dark" );
      }
    };

    window.addEventListener( "keydown", handleKeydown );

    return () => {
      window.removeEventListener( "keydown", handleKeydown );
    };
  } );

  if ( !mounted ) {
    return null;
  }
  const handleThemeToggle = () => {

    setTheme( theme === "dark" ? "light" : "dark" );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={theme === "dark" ? "secondary" : "default"}
          size="icon"
          aria-label="Toggle Dark Mode"
          className="min-h-12 min-w-12"
        >
          {theme === "dark" ? (
            <Sun className="transition-all rotate-0 scale-100" />
          ) : (
            <Moon className="transition-all rotate-12 scale-100" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme( "light" );
            handleThemeToggle();
          }}
        >
          Light
          {theme === "light" && (
            <span className="ml-2 text-sm text-popover-foreground">
              (active)
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme( "dark" );
            handleThemeToggle();
          }}
        >
          Dark
          {theme === "dark" && (
            <span className="ml-2 text-sm text-muted-foreground">(active)</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
