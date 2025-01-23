import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { Faglig } from "@/components/sections/Faglig";
import { Kontakt } from "@/components/sections/Kontakt";
export default async function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Faglig />
      <Testimonials />
      <Kontakt />
      <Footer />
    </main>
  );
}
