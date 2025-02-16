import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-950 text-white h-full items-center flex flex-col justify-evenly px-4 py-8"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-evenly gap-8 md:gap-4 my-12">
          {/* Company Info */}
          <div className="w-full md:w-fit text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">XK Malerfirma</h3>
            <div className="space-y-2 text-gray-300">
              <p>Profesjonelt malerfirma i Oslo</p>
              <p>Org.nr: 997 871 545</p>
              <p>Telefon: +47 123 45 678</p>
              <p>E-post: post@xkmalerfirma.no</p>
            </div>
          </div>

          {/* Quick Links */}

          {/* Opening Hours */}
          <div className="w-full md:w-fit text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">Åpningstider</h3>
            <div className="space-y-2 text-gray-300">
              <p>Mandag - Fredag: 07:00 - 16:00</p>
              <p>Lørdag - Søndag: Stengt</p>
              <p className="mt-4">Tilgjengelig for akutte oppdrag</p>
            </div>
          </div>
          <div className="w-full md:w-fit text-center md:text-left">
            <div className="text-gray-300">
              <h3 className="font-bold text-xl mb-4">Informasjonskapsler</h3>

              <Link href="/legal" className="underline">
                Les mer om vår bruk av informasjonskapsler
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 w-full" />
        <div className="container px-4 pt-8 flex flex-col md:flex-row items-center justify-evenly gap-4 max-w-2xl text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © 2024 XK Malerfirma. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
