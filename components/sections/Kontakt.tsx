import Image from "next/image";
import { HubSpotForm } from "../HubSpotForm";

export async function Kontakt() {
  return (
    <section
      id="kontakt"
      className="bg-gray-200 text-foreground h-full items-center flex flex-col justify-center px-6 md:px-12 py-16"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-0 md:mb-12 xl:mb-0 relative z-10">
          <div className="w-fit flex items-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold font-brand">
              Kontaktskjema
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start lg:items-center text-balance text-center gap-4 ">
          <div className="max-w-4xl w-full space-y-4 mr-0 mb-4 md:mb-0">
            <Image
              src="/team.svg"
              alt="team"
              width={1024}
              height={1024}
              className="relative -left-3 -top-4"
            />

            <p className="leading-relaxed max-w-xl w-full mx-auto">
              XK Malerfirma er en gjeng med god lagånd som virkelig jobber bra
              sammen. Vi er sammensveiset og leverer topp kvalitet, alltid med
              fokus på å gjøre kunden fornøyd.
            </p>
          </div>
          <div className="w-full max-w-md md:max-w-lg mx-auto">
            <HubSpotForm />
          </div>
        </div>
      </div>
    </section>
  );
}
