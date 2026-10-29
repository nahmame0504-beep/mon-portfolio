export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;        // "YYYY-MM"
  expiryDate?: string;      // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Certification Professionnelle — Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "2026-10",
    credentialId: "28-431bbb75-ff07-435e-8fbe-efd6dd1eca",
    credentialUrl: "/certs/certificat-hibernate.pdf", // Lien direct vers votre PDF local
    skills: ["Hibernate", "JPA", "JEE", "ORM", "Mapping Objet-Relationnel"],
    tags: ["Java", "JEE", "Base de données", "Backend"],
    status: "active"
  }
];