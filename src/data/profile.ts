export type Social = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  socials: Social[];
  about: string;
  skills: string[];
};

export const profile: Profile = {
  name: "Noufal Ahmame",
  role: "Étudiant en Master DSIE • Didactique des Sciences & Ingénierie Éducative",
  location: "Marrakech, Maroc",
  email: "noufalahmame@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/nahmame0504-beep" }
  ],
  about: "Étudiant passionné par la didactique des sciences, l'ingénierie pédagogique et l'intégration des technologies numériques dans l'éducation (EdTech).",
  skills: ["Didactique des Sciences", "Ingénierie Pédagogique", "React", "TypeScript", "Tailwind CSS", "EdTech"]
};
