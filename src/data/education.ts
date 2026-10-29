export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "ENS Marrakech — Université Cadi Ayyad",
    degree: "Master",
    field: "Didactique des Sciences et Ingénierie Éducative (DSIE)",
    location: "Marrakech",
    start: "2024-09",
    end: "Présent",
    courses: [
      "Didactique des Sciences",
      "Ingénierie Pédagogique & Technologies Éducatives",
      "Conception de Contenus Multimédias",
      "Évaluation & Dispositifs de Formation"
    ],
    highlights: [
      "Projets de numérisation des contenus éducatifs"
    ]
  },
  {
    school: "ESEF Oujda (École Supérieure d'Éducation et de Formation)",
    degree: "Licence",
    field: "Informatique",
    location: "Oujda",
    start: "2021-09",
    end: "2024-06",
    courses: [
      "Algorithmique & Programmation",
      "Bases de Données",
      "Technologies Web",
      "Pédagogie & Didactique de l'Informatique"
    ]
  }
];