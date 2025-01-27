import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
export function Hero() {
  return (
    <section className="">
      <div className=" mx-auto flex pt-14 md:pt-20 pb-12 px-5 md:flex-row flex-col items-center justify-center container">
        <div className="md:ml-auto w-fit md:mr-8 mr-0 relative right-4 md:right-0 lg:right-12">
          <Image
            src="/hero.png"
            alt="Xk Malerfirma"
            className="object-contain h-full max-h-[500px] md:max-h-[600px] w-fit"
            priority
            width={720}
            height={600}
          />
        </div>
        <div className="flex flex-col flex-growjustify-center items-center text-center text-balance max-w-md md:mr-auto mr-0 relative md:right-12 right-0">
          <div className="md:mt-16 mt-2">
            <div className="flex items-center justify-center space-x-3 mx-auto mb-2">
              <span className="w-8 h-[2px] bg-accent"></span>
              <h2 className="text-accent font-medium tracking-wide uppercase text-sm text-center">
                Profesjonelle Håndverkstjenester
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.5] md:leading-[1.5] lg:leading-[1.55] font-bold text-gray-900 font-brand pt-4">
              Mal
              <span className="text-accent mx-2">Drømmen Din</span>
              Til Liv
            </h1>
          </div>
          <p className="text-lg text-gray-600 ">
            Premium malertjenester for hjem og bedrifter i Norge, med fokus på
            kvalitet i hvert strøk
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 mt-8">
            <Link href="/prosjekter">
              <Button className="rounded-full px-8 bg-[#e22727] text-white hover:bg-[#e72828]">
                Se Våre Prosjekter
              </Button>
            </Link>
            <Link href="/#kontakt">
              <Button className="rounded-full px-8 bg-[#e22727] text-white hover:bg-[#e72828]">
                Kontakt Oss
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
