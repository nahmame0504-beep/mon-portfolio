import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Mail, Github, Linkedin, Award, GraduationCap } from "lucide-react";

export default function Home() {
  const eduLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    address: profile.location,
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.school,
    })),
  };

  const certLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    hasCredential: (certifications ?? []).map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: { "@type": "Organization", name: c.issuer },
      validFrom: c.issueDate,
      validUntil: c.expiryDate,
      url: c.credentialUrl,
    })),
  };

  return (
    <section className="grid gap-12 md:grid-cols-2 items-center py-8">
      <Helmet>
        <title>{profile.name} — Portfolio React Pro</title>
        <meta name="description" content={`Portfolio de ${profile.name}: ${profile.role}. ${profile.about}`} />
        <script type="application/ld+json">{JSON.stringify(eduLd)}</script>
        <script type="application/ld+json">{JSON.stringify(certLd)}</script>
      </Helmet>

      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-4">
          <MapPin className="w-3.5 h-3.5" /> {profile.location}
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Bonjour, je suis <span className="text-primary underline decoration-primary/30">{profile.name}</span>
        </h1>
        <p className="mt-3 text-xl font-medium text-muted-foreground">{profile.role}</p>

        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{profile.about}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/projects">
            <Button className="gap-2">
              Voir les projets <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" /> Me contacter
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Compétences clés
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              {s.label === "GitHub" && <Github className="w-4 h-4" />}
              {s.label === "LinkedIn" && <Linkedin className="w-4 h-4" />}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col gap-6 justify-center items-center">
        <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-primary/10 via-accent/30 to-primary/20 p-8 border shadow-lg flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <GraduationCap className="w-10 h-10 text-primary" />
            <Award className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-4">
            <div className="bg-card/90 backdrop-blur p-4 rounded-xl border shadow-sm">
              <p className="text-xs text-muted-foreground font-semibold">FORMATION RÉCENTE</p>
              <p className="font-bold text-sm">Master Intelligence Artificielle & SIG</p>
              <p className="text-xs text-muted-foreground">Université Cadi Ayyad (2025)</p>
            </div>
            <div className="bg-card/90 backdrop-blur p-4 rounded-xl border shadow-sm">
              <p className="text-xs text-muted-foreground font-semibold">CERTIFICATION PRINCIPALE</p>
              <p className="font-bold text-sm">AWS Solutions Architect Associate</p>
              <p className="text-xs text-muted-foreground">Amazon Web Services (2024)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}