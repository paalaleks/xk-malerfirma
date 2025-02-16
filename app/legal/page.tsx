import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvern og Informasjonskapsler | XK Malerfirma",
  description:
    "Informasjon om hvordan vi bruker Google Analytics og behandler dine personopplysninger",
};

export default function LegalPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">
        Personvern og Informasjonskapsler
      </h1>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Bruk av Google Analytics
        </h2>
        <p>
          Denne nettsiden bruker Google Analytics, et analyseverktøy fra Google,
          for å hjelpe oss å forstå hvordan besøkende bruker nettstedet vårt.
          Google Analytics bruker informasjonskapsler (cookies), som er
          tekstfiler plassert på din datamaskin.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Hvilken informasjon samles inn?
        </h3>
        <p>Google Analytics samler inn følgende type informasjon:</p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>
            Hvordan du kom til nettsiden (direkte, via søk, eller fra andre
            nettsteder)
          </li>
          <li>Hvilke sider du besøker og hvor lenge du er på hver side</li>
          <li>
            Teknisk informasjon som nettlesertype, operativsystem og
            skjermstørrelse
          </li>
          <li>Omtrentlig geografisk lokasjon (på by-nivå)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Hvorfor bruker vi denne informasjonen?
        </h3>
        <p>Vi bruker denne informasjonen for å:</p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Forbedre nettsidens funksjonalitet og brukeropplevelse</li>
          <li>
            Forstå hvilke deler av nettstedet som er mest interessante for
            besøkende
          </li>
          <li>Analysere hvordan nettsiden vår presterer</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Personvern og databehandling
        </h3>
        <p>
          All informasjon som samles inn via Google Analytics behandles i
          henhold til:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>EUs personvernforordning (GDPR)</li>
          <li>Googles egne personvernregler</li>
          <li>Norsk personvernlovgivning</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Dine rettigheter</h3>
        <p>Du har rett til å:</p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Be om innsyn i informasjonen vi har om deg</li>
          <li>Be om at informasjon om deg blir slettet</li>
          <li>Reservere deg mot sporing via Google Analytics</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Hvordan reservere seg?
        </h3>
        <p>
          Du kan reservere deg mot Google Analytics-sporing på følgende måter:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Installere Google Analytics Opt-out Browser Add-on</li>
          <li>Deaktivere informasjonskapsler i din nettleser</li>
          <li>Bruke privat nettlesermodus</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Kontakt</h3>
        <p>
          Har du spørsmål om vår bruk av Google Analytics eller dine
          personvernrettigheter? Kontakt oss på [kontakt@xkmalerfirma.no].
        </p>

        <p className="text-sm text-gray-600 mt-8">
          Sist oppdatert: {new Date().toLocaleDateString("nb-NO")}
        </p>
      </section>
    </main>
  );
}
