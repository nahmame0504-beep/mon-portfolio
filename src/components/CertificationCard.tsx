import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { ExternalLink, ShieldCheck, AlertTriangle } from "lucide-react";

function mmYYYY(s: string) {
  if (!s) return "";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border rounded-2xl p-5 hover:shadow-lg transition-all bg-card text-card-foreground flex flex-col justify-between",
        isExpired && "opacity-75"
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div>
        {c.image && (
          <div className="mb-4 flex items-center justify-center p-3 bg-muted/50 rounded-xl w-20 h-20">
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              width={80}
              height={80}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <h3 className="font-bold text-lg leading-snug">{c.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          <span className="font-medium text-foreground">{c.issuer}</span> • {mmYYYY(c.issueDate)}
          {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        </p>

        {c.credentialId && (
          <p className="text-xs text-muted-foreground mt-1">ID: {c.credentialId}</p>
        )}

        {c.skills?.length ? (
          <div className="mt-3 flex flex-wrap gap-1">
            {c.skills.map((skill) => (
              <span key={skill} className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-5 pt-3 border-t flex items-center justify-between text-sm">
        {c.credentialUrl ? (
          <a
            className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Vérifier
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        ) : (
          <span className="text-xs text-muted-foreground">Certificat vérifié</span>
        )}

        {isExpired && (
          <span className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-3.5 h-3.5" /> Expirée
          </span>
        )}
        {c.status === "revoked" && (
          <span className="text-xs text-red-500 font-medium">Révoquée</span>
        )}
      </div>
    </article>
  );
}