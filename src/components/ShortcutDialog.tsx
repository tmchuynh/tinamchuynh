"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaWindows } from "react-icons/fa6";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ShortcutDialog() {
  // List of keyboard shortcuts and their descriptions
  const shortcuts = [
    {
      shortcut: (
        <span>
          <FaWindows className="inline-block mr-1" /> + B
        </span>
      ),
      description: "Open/Close Side Menu",
    },
    {
      shortcut: (
        <span>
          <FaWindows className="inline-block mr-1" /> + M
        </span>
      ), description: "Open/Close Spotlight Search"
    },
    {
      shortcut: (
        <span>
          Ctrl + <FaWindows className="inline-block mr-1" /> + D
        </span>
      ), description: "Toggle Dark/Light Mode"
    },
    {
      shortcut: (
        <span>
          <FaWindows className="inline-block mr-1" /> + /
        </span>
      ), description: "Cut selected text"
    },
    {
      shortcut: (
        <span>
          <FaWindows className="inline-block mr-1" /> + /
        </span>
      ), description: "Undo last action"
    },
    {
      shortcut: (
        <span>
          <FaWindows className="inline-block mr-1" /> + /
        </span>
      ), description: "Redo last action"
    },
    {
      shortcut: (
        <span>
          <FaWindows className="inline-block mr-1" /> + /
        </span>
      ), description: "Save the current document"
    },
    {
      shortcut: (
        <span>
          <FaWindows className="inline-block mr-1" /> + /
        </span>
      ), description: "Close dialog or cancel"
    },
  ];

  const [open, setOpen] = React.useState( false );
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';


  // Keyboard event listener for opening and closing the dialog
  useEffect( () => {
    const handleKeydown = ( e: KeyboardEvent ) => {
      if ( ( e.metaKey ) && e.key === "/" ) {
        setOpen( true ); // Open dialog on Ctrl + /
      }
      if ( e.key === "Escape" ) {
        setOpen( false ); // Close dialog on Escape key
      }
    };

    window.addEventListener( "keydown", handleKeydown );

    return () => {
      window.removeEventListener( "keydown", handleKeydown );
    };
  }, [] );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <p className="font-mono flex items-center gap-2 px-7 justify-end text-muted-foreground my-2">
        Keyboard Shortcuts: Press{" "}
        <kbd className="pointer-events-none inline-flex h-full select-none items-center gap-1 rounded bg-muted px-1.5 py-1 font-mono text-[14px] font-medium text-muted-foreground opacity-100 align-text-bottom">
          <span><FaWindows /></span>/
        </kbd>
        <span className="sr-only">Show keyboard shortcuts</span>
      </p>

      <DialogContent>
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogDescription>
          Use the following keyboard shortcuts for quick actions:
        </DialogDescription>
        <div className="flex flex-col gap-2 mt-4">
          {shortcuts.map( ( shortcut, index ) => (
            <div key={index} className="grid grid-cols-7 gap-6">
              <div className="font-mono col-span-3 text-right">{shortcut.shortcut}</div>
              <div className="text-left col-span-4">{shortcut.description}</div>
            </div>
          ) )}
        </div>
        <DialogClose asChild>
          <Button variant={isDarkMode ? "secondary" : "default"} className="mt-4 w-full">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
