"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { FaWindows } from "react-icons/fa6";


export function CommandMenu() {
  const [open, setOpen] = useState( false );
  const [loading] = useState( false );
  const [search, setSearch] = useState( '' );

  useEffect( () => {
    const down = ( e: KeyboardEvent ) => {
      if ( ( e.metaKey ) && e.key === "m" ) {
        e.preventDefault();
        setOpen( ( open ) => !open );
      }
    };

    document.addEventListener( "keydown", down );
    return () => document.removeEventListener( "keydown", down );
  }, [] );

  return (
    <>
      <p className="font-mono flex items-center gap-2 px-7 justify-end text-foreground my-2">
        Command Menu:
        <kbd className="pointer-events-none inline-flex h-full select-none items-center gap-1 rounded bg-accent px-1.5 py-1 font-mono text-[14px] font-medium text-accent-foreground opacity-100 align-text-bottom">
          <span><FaWindows /></span>M
        </kbd>
        <span className="sr-only">Show the command menu</span>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput value={search} onValueChange={setSearch} placeholder="Type a command or search..." />
        <CommandList>
          {loading && <Command.Loading>Hang on…</Command.Loading>}
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={( value ) => console.log( 'Selected', value )}>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={( value ) => console.log( 'Selected', value )}>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem onSelect={( value ) => console.log( 'Selected', value )}>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={( value ) => console.log( 'Selected', value )}>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={( value ) => console.log( 'Selected', value )}>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={( value ) => console.log( 'Selected', value )}>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
