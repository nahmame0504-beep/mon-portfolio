import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="space-y-6">
      <Helmet>
        <title>Certifications — Mon Portfolio</title>
        <meta name="description" content="Certifications professionnelles AWS, Kubernetes, Cloud et DevOps." />
      </Helmet>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          <p className="text-muted-foreground mt-1">Accréditations et compétences certifiées.</p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Filtrer (ex: AWS, Kubernetes)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9"
            aria-label="Filtrer les certifications"
          />
        </div>
      </div>

      {list.length === 0 ? (
        <p className="text-center py-12 text-muted-foreground">Aucune certification ne correspond à votre recherche.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c) => (
            <CertificationCard key={c.title + c.issueDate} c={c} />
          ))}
        </div>
      )}
    </section>
  );
}