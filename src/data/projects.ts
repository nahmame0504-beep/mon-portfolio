export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Plateforme Interactive de Didactique des Sciences",
    period: "2025 - 2026",
    tags: ["React", "TypeScript", "Tailwind CSS", "EdTech", "Ingénierie Pédagogique"],
    summary: "Conception et développement d'un outil numérique éducatif facilitant la compréhension des concepts scientifiques grâce à des simulations visuelles et des évaluations interactives."
    // Vous ajouterez repo: "..." ou link: "..." plus tard quand votre projet sera en ligne sur GitHub ou Vercel.
  }
];