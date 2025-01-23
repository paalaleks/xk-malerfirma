import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Malerarbeid",
    icon: "/paint.png",
    description:
      "Profesjonell maling av både innvendige og utvendige overflater. Vi sikrer et perfekt resultat hver gang.",
  },
  {
    title: "Snekker",
    icon: "/saw.png",
    description:
      "Kvalitetsarbeid innen snekring og tømring. Vi hjelper deg med alt fra små reparasjoner til større prosjekter.",
  },
  {
    title: "Tapetsering",
    icon: "/wallpaper.png",
    description:
      "Profesjonell tapetsering som gir rommet ditt et helt nytt uttrykk. Vi har erfaring med alle typer tapeter.",
  },
  {
    title: "Gulvlegging",
    icon: "/floor.png",
    description:
      "Profesjonell legging av alle typer gulv. Vi garanterer et perfekt resultat som varer.",
  },
];

export function Services() {
  return (
    <section id="tjenester" className="py-12 mt-8 relative bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="w-fit h-fit flex items-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold font-brand">
              Våre tjenester
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#f0f0f0] flex items-center justify-center p-2.5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={28}
                    height={28}
                    className="text-accent"
                  />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-for leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
