"use client";

import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function NavbarPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <nav className="container-fluid lg:container mx-auto px-4 h-20 flex items-center justify-between">
      <Button
        className="group bg-transparent hover:text-accent hover:bg-transparent"
        variant="ghost"
        onClick={handleBack}
      >
        <ArrowLeft
          className="-ms-1 me-2 transition-transform group-hover:-translate-x-0.5 hover:bg-transparent"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Tilbake
      </Button>
    </nav>
  );
}
