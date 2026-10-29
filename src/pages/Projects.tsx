import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section className="space-y-6">
      <Helmet>
        <title>Projets — Mon Portfolio</title>
        <meta name="description" content="Découvrez l'ensemble de mes projets en React, TypeScript, IA, SIG et DevSecOps." />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold tracking-tight">Projets</h2>
        <p className="text-muted-foreground mt-1">Sélection de réalisations techniques et projets open-source.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <FolderGit2 className="w-6 h-6 text-primary" />
                {p.period && <span className="text-xs text-muted-foreground font-medium">{p.period}</span>}
              </div>
              <h3 className="text-xl font-semibold leading-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.summary}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t flex gap-4 text-sm font-medium">
              {p.link && (
                <a
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Démo <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {p.repo && (
                <a
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" /> Code Source
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}