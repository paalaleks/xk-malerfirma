import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    body: "Fantastisk god service fra start til slutt. Kjempedyktig til reparasjon/sparkling og maling. Tusen takk. Anbefales!",
    name: "Anne Cathrine Lerhaugen",
  },
  {
    body: "Xixi og gjengen anbefales på det varmeste! Kvalitet, effektivitet - og ikke minst hyggelige!",
    name: "Eva Engeset",
  },
  {
    body: "Veldig fornøyd, befaring, pris og kontakt. Arbeidet ble utført med et godt resultat. Skal bruke de igjen. Maling tak og vegger, nytt gulv og listing i hele leiligheten. Kjempefornøyd 😊",
    name: "Lars Lindberg Aanonsen",
  },
  {
    body: "Ansatte X.K Malerfirma for å helsparkle og male alle tak, veggflater og vinduer med listfrie løsninger. Xi er alltid tilgjengelig på telefon og er utrolig faglig dyktig i jobben han utfører. Vi kan sterkt anbefale Xi videre.",
    name: "Håkon Hosle",
  },
  {
    body: "Superfornøyd med Xixi! Kvaliteten på arbeidet, prisen, ryddigheten, påliteligheten, profesjonaliteten og kommunikasjonen var helt supert. Anbefales sterkt!",
    name: "Anna Estensen",
  },
  {
    body: "Punktlig og til å stole på. Svært fornøyd med innvendig malerarbeid.",
    name: "Ingrid Wall",
  },
  {
    body: "Hyggelig team! Utfører arbeid raskt, pent og ryddig! Anbefales på det sterkeste!",
    name: "Antonela Zverku",
  },
  {
    body: "Opplevde daglig leder som imøtekommende, løsningsorientert og villig til å gjennomføre små og store prosjekter med et godt resultat. Lett å kommunisere med. Anbefales.",
    name: "Daniel Berget Nilsen",
  },
  {
    body: "Jeg benyttet Xixi og teamet hans ved 2 anledninger, og alt fungerte greit. Solide folk med solid kvalitet. Anbefales på det sterkeste!",
    name: "Bosko Janjusevic",
  },
  {
    body: "Rask respons og hjelp. De helsparklet og malte vegger, karmer og lister. Ferdig på bare noen dager! Veggene ble helt perfekte. Dyktige og hyggelige arbeidsfolk! Anbefales!",
    name: "Jenny Liabø",
  },
  {
    body: "Fjernet dører, vinduskarmer, sparklet, malte og la gulvlister i hele leiligheten. Flott arbeid, tidseffektivt og rimelig. Anbefales på det sterkeste.",
    name: "Alexander Jensen",
  },
  {
    body: "Høflige, profesjonelle og flinke malere! Veldig fornøyd.",
    name: "Ayan Ali Omar",
  },
  {
    body: "De beste ... serviceinnstilte og vi var fornøyd med kvaliteten på arbeidet som ble utført.",
    name: "Sidita Fortuzi",
  },
];

// const reviews = [
//   {
//     name: "Jack",
//     username: "",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "",
//   },
//   {
//     name: "Jill",
//     username: "",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "",
//   },
//   {
//     name: "John",
//     username: "",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "",
//   },
//   {
//     name: "Jane",
//     username: "",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "",
//   },
//   {
//     name: "Jenny",
//     username: "",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "",
//   },
//   {
//     name: "James",
//     username: "",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "",
//   },
// ];

const ReviewCard = ({ name, body }: { name: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
        <blockquote className="text-sm">{body}</blockquote>
      </div>
    </figure>
  );
};

export function Testimonials() {
  return (
    <>
      <div className="max-w-2xl mx-auto text-center mb-8 mt-12">
        <div className="w-fit h-fit flex items-center mx-auto">
          <h2 className="text-xl md:text-2xl font-bold font-brand">
            Anbefalinger fra våre kunder
          </h2>
        </div>
      </div>
      <div className="relative flex pb-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:60s]">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    </>
  );
}
