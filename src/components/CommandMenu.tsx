"use client";
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
import { commands } from "@/data/data";


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
        <CommandInput
          value={search}
          onValueChange={setSearch}
          placeholder="Type a command or search..."
        />
        <CommandList>
          {loading && <Command.Loading>Hang on…</Command.Loading>}
          <CommandEmpty>No results found.</CommandEmpty>

          {commands.map( ( group, groupIndex ) => (
            <CommandGroup key={groupIndex} heading={group.groupName}>
              {group.items.map( ( command, itemIndex ) => (
                <CommandItem
                  key={itemIndex}
                  onSelect={() => window.location.href = command.onSelect}
                >
                  <command.icon className="mr-2" />
                  <span>{command.title}</span>
                  {command.shortcut && (
                    <CommandShortcut>{command.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              ) )}
            </CommandGroup>
          ) )}

          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
