import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="space-y-6">
      <Helmet>
        <title>Formations — Mon Portfolio</title>
        <meta name="description" content="Diplômes universitaires et formations spécialisées." />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold tracking-tight">Formations & Diplômes</h2>
        <p className="text-muted-foreground mt-1">Mon cursus académique et parcours universitaire.</p>
      </div>

      <ol className="relative border-s border-border ml-3 space-y-8">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-background">
              <GraduationCap className="w-3.5 h-3.5 text-primary-foreground" />
            </span>

            <div className="border rounded-2xl p-5 bg-card text-card-foreground shadow-sm">
              <h3 className="text-lg font-bold">
                {e.degree}
                {e.field ? ` — ${e.field}` : ""}
              </h3>
              <p className="text-sm font-semibold text-primary mt-0.5">@{e.school}</p>

              <p className="text-xs text-muted-foreground mt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {fmt(e.start)} — {fmt(e.end)}
                </span>
                {e.location && (
                  <span className="inline-flex items-center gap-1">
                    • <MapPin className="w-3 h-3" /> {e.location}
                  </span>
                )}
                {e.gpa && <span className="font-semibold">• GPA: {e.gpa}</span>}
              </p>

              {e.courses?.length ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Cours clés :</span> {e.courses.join(", ")}
                </p>
              ) : null}

              {e.highlights?.length ? (
                <ul className="mt-3 space-y-1">
                  {e.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}