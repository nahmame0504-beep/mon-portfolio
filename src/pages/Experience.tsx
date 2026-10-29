import { experiences } from "@/data/experience";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

function fmt(s?: string) {
  if (!s || s === "Présent") return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function Experience() {
  return (
    <section className="space-y-6">
      <Helmet>
        <title>Parcours & Expérience — Mon Portfolio</title>
        <meta name="description" content="Mon parcours professionnel et mes expériences en ingénierie logicielle." />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold tracking-tight">Parcours Professionnel</h2>
        <p className="text-muted-foreground mt-1">Expériences en entreprise, missions cloud et développement web.</p>
      </div>

      <div className="relative border-s border-border ml-3 my-6 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-8 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-background">
              <Briefcase className="w-3.5 h-3.5 text-primary-foreground" />
            </span>

            <div className="border rounded-2xl p-5 bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{exp.role}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
                  <Calendar className="w-3.5 h-3.5" /> {fmt(exp.start)} — {fmt(exp.end)}
                </span>
              </div>

              <p className="text-sm font-semibold text-primary mt-1 flex items-center gap-2">
                {exp.company}
                {exp.location && (
                  <span className="text-xs text-muted-foreground font-normal inline-flex items-center gap-1">
                    • <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                )}
              </p>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}