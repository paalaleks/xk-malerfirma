"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Mail, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/app/context";
import Image from "next/image";
import MenuView from "./MenuView";

type NavigationItem = {
  name: string;
  href: string;
  icon?: ReactNode;
};

const navigation: NavigationItem[] = [
  { name: "Prosjekter", href: "/prosjekter" },
  { name: "Kontakskjema", href: "/#kontaktskjema" },
  {
    name: "post@xkmalerfirma.no",
    href: "mailto:post@xkmalerfirma.no",
    icon: <Mail size={13} className="flex-shrink-0 relative -bottom-0.5" />,
  },
  {
    name: "+47 968 68 947",
    href: "tel:+47 968 68 947",
    icon: (
      <PhoneCall size={13} className="flex-shrink-0 relative -bottom-0.5" />
    ),
  },
];

export function Navbar() {
  const { isVideoOpen } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    if (isVideoOpen) {
      setIsVisible(false);
    }
  }, [isVideoOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar at the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Show/hide based on scroll direction
        setIsVisible(prevScrollY > currentScrollY);
      }

      setIsScrolled(currentScrollY > 0);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="container-fluid lg:container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/xk-logo.jpeg"
            alt="XK Logo"
            width={100}
            height={100}
            className="w-32"
          />
        </Link>

        <div className="hidden md:flex items-center text-lg">
          {navigation.map((item) => (
            <Button
              size={"sm"}
              className="text-foregroound transition-colors hover:bg-transparent hover:text-accent text-base"
              variant="ghost"
              key={item.name}
              asChild
            >
              <Link href={item.href} className="flex items-center">
                {item.icon}
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
        <MenuView>
          <div className=" flex flex-col items-start gap-2">
            {navigation.map((item) => (
              <Button
                className="text-foregroound transition-colors hover:bg-transparent hover:text-accent text-base"
                variant="ghost"
                key={item.name}
                asChild
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-center leading-none"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </MenuView>
      </nav>
    </header>
  );
}
