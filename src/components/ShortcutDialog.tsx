"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { shortcuts } from "@/data/data";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect } from "react";
import { FaWindows } from "react-icons/fa6";

export function ShortcutDialog() {
  const [open, setOpen] = React.useState( false );
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

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
      <p className="font-mono flex items-center gap-2 px-7 justify-end text-foreground my-2">
        Keyboard Shortcuts:
        <kbd className="pointer-events-none inline-flex h-full select-none items-center gap-1 rounded bg-accent px-1.5 py-1 font-mono text-[14px] font-medium text-accent-foreground opacity-100 align-text-bottom">
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
