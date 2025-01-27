import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Holmenkollen",
    description: "Dette var vår siste prosjekt før vi startet opp i 2024.",
    image: "/prosjekter/holmenkollen.jpg",
    slug: "holmenkollen",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pb-12 md:pb-0">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mt-4 mb-20 relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            Våre Prosjekter
          </h1>
          <p className="text-muted-foreground text-balance z-10 relative">
            Utforsk våre tidligere prosjekter og la deg inspirere av mulighetene
            for ditt neste prosjekt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Link key={project.id} href={`/prosjekter/${project.slug}`}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadowhover:shadow-sm transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 ">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
          <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadowhover:shadow-sm transition-shadow">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={"/prosjekt.png"}
                alt={"Prosjekt"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Flere prosjekter kommer snart
              </h3>
              <p className="text-muted-foreground">
                Vi jobber konstant på nye prosjekter, og vi kommer til å legge
                til flere prosjekter her snart!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
