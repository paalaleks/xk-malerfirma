import { NavbarPage } from "@/components/NavbarPage";
import { Footer } from "@/components/sections/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarPage />
      {children}
      <Footer />
    </>
  );
}
