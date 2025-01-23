import React from "react";
import { HeroVideoDialog } from "../ui/video-dialog";

export function Faglig() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: 'url("/faglig-bg.png")',
        backgroundSize: "700px",
        backgroundPosition: "left 50% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5 pt-8 pb-8 mx-auto flex flex-col relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row mt-4 relative">
            <div className="w-96 mx-auto sm:mx-0 sm:w-1/3 text-center sm:pr-8 sm:py-8 relative">
              <div className="rounded-lg overflow-hidden aspect-[9/16]">
                <HeroVideoDialog
                  className="dark:hidden block z-10"
                  animationStyle="from-center"
                  videoSrc="/xk-faglig-dyktighet.mp4"
                  thumbnailSrc="/xk-thumb.png"
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>

            <div className="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left text-balance relative px-6 sm:px-0">
              <div className="w-fit h-fit flex items-center mx-auto py-4">
                <h2 className="text-xl md:text-2xl font-bold font-brand">
                  Faglig dyktighet
                </h2>
              </div>
              <p className="leading-relaxed mb-4">
                God fagkunnskap innen tapetsering, maling, snekring og
                gulvlegging er avgjørende for å få et flott og holdbart
                resultat. En dyktig håndverker vet hvordan jobben skal gjøres
                riktig, enten det gjelder å få en jevn overflate på veggene,
                bygge solide løsninger eller legge et gulv som tåler tidens
                tann. Uten skikkelig utført arbeid kan man ende opp med feil og
                ekstra kostnader. Derfor lønner det seg å bruke fagfolk som kan
                sitt håndverk. Det gir ikke bare et pent resultat, men også
                trygghet for at alt holder i mange år fremover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
