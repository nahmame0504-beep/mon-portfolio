import { useState } from "react";
import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Contact — Mon Portfolio</title>
        <meta name="description" content={`Entrer en contact avec ${profile.name}.`} />
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold tracking-tight">Me Contacter</h2>
        <p className="text-muted-foreground mt-1">Une question, un projet ou une opportunité ? N'hésitez pas à m'écrire.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start pt-4">
        <div className="space-y-6 border rounded-2xl p-6 bg-card text-card-foreground">
          <h3 className="text-xl font-semibold">Coordonnées</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href={`mailto:${profile.email}`} className="font-medium hover:underline">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Localisation</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground mb-3">RÉSEAUX SOCIAUX</p>
            <div className="flex gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 border rounded-xl text-xs font-medium hover:bg-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-6 bg-card text-card-foreground shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-bold">Message envoyé !</h3>
              <p className="text-sm text-muted-foreground">
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
                Envoyer un autre message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">Nom complet</label>
                <Input required placeholder="Votre nom" />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">Email</label>
                <Input required type="email" placeholder="votre.email@exemple.com" />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">Message</label>
                <Textarea required placeholder="Votre message..." />
              </div>

              <Button type="submit" className="w-full gap-2" disabled={loading}>
                <Send className="w-4 h-4" /> {loading ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}