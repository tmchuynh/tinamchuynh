"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";

interface BreadcrumbItem {
  label: string;
  href?: string;
  dropdownItems?: { label: string; href: string; }[];
}

const Breadcrumb: React.FC<{ items: BreadcrumbItem[]; }> = ( { items } ) => {
  const router = useRouter();

  return (
    <nav className="flex justify-between pb-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        {items.map( ( item, index ) => (
          <li key={index} className="flex items-center">
            {item.dropdownItems ? (
              <div className="relative">
                {/* Dropdown Trigger */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="px-4" asChild>
                    <Button variant="default" aria-haspopup="true">
                      {item.label}
                      <ChevronDown aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>

                  {/* Dropdown Menu Content */}
                  <DropdownMenuContent>
                    {item.dropdownItems?.map( ( dropdownItem, subIndex ) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Button
                          variant={"ghost"}
                          onClick={() => router.push( dropdownItem.href! )}
                          className="w-full justify-start"
                        >
                          {dropdownItem.label}
                        </Button>
                      </DropdownMenuItem>
                    ) )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div>
                {item.href ? (
                  <Button
                    variant="default"
                    aria-label={item.label}
                    onClick={() => router.push( item.href! )}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    aria-label={item.label}
                  >
                    {item.label}
                  </Button>
                )}
              </div>
            )}
            {index < items.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ) )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
