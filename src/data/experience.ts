export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end?: string;
  description?: string;
  technologies?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Stagiaire en Enseignement & Ingénierie Pédagogique",
    company: "Lycée Zineb An-Nafzaouia",
    location: "Oujda",
    start: "2021-09",
    end: "2024-06",
    description: "Préparation et animation d'activités pédagogiques, intégration des technologies de l'information (TICE) pour l'apprentissage et suivi des élèves.",
    technologies: ["Informatique", "TICE", "Pédagogie", "Didactique"]
  }
];