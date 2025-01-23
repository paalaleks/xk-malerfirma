"use client";

import { Button } from "@/components/ui/button";
import { useState, ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function MenuView({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Popover onOpenChange={setIsMenuOpen}>
      <PopoverTrigger asChild>
        <Button
          className="group flex md:hidden rounded-full h-10 w-10"
          variant="ghost"
          size="icon"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="pointer-events-none"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L20 12"
              className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
            />
            <path
              d="M4 12H20"
              className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            />
            <path
              d="M4 12H20"
              className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent>{isMenuOpen && <>{children}</>}</PopoverContent>
    </Popover>
  );
}
