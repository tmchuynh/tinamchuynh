"use client";

import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-primary-foreground">Page Not Found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        The page you're looking for might have been moved, deleted, or doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;