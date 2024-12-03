"use client";

import { CommandMenu } from "@/components/CommandMenu";
import { NavSidebar } from "@/components/NavSidebar";
import { ShortcutDialog } from "@/components/ShortcutDialog";
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Head from "next/head";
import React from "react";
import { NotFoundProvider, useNotFound } from "./context/NotFoundContext";
import './globals.css';
import { Providers } from "./providers";

export default function RootLayout( {
  children,
  title = "Home",
  description = "Tina Huynh Portfolio",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
} ) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=PT+Sans+Narrow:wght@400;700&family=Titan+One&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Tina Huynh Portfolio" />
        <meta name="description" content={description} />
        <meta title={title} />
        <title>{title}</title>
      </Head>
      <body>
        <NotFoundProvider>
          <SidebarProvider>
            <Providers>
              <MainContent>{children}</MainContent>
            </Providers>
          </SidebarProvider>
        </NotFoundProvider>
      </body>
    </html>
  );
}

const MainContent = ( {
  children,
}: {
  children: React.ReactNode;
} ) => {
  const { isNotFound } = useNotFound();

  return (
    <>
      {!isNotFound &&
        <>
          <NavSidebar />
          <SidebarTrigger className='py-10 pl-9' />
        </>}
      <main className='relative w-9/12 mx-auto py-10'>
        {children}
        <div className="fixed bottom-8 right-10 backdrop-blur-sm rounded-lg">
          <CommandMenu />
          <ShortcutDialog />
        </div>
      </main>
    </>
  );
};
