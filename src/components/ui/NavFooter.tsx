"use client";

import React, { } from "react";
import { ModeToggle } from "../ModeToggle";

export function NavFooter() {

  return (
    <div className="flex w-full justify-end p-2">
      <ModeToggle />
    </div>
  );
}
