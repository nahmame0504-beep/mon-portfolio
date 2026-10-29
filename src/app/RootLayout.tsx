import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { Code2 } from "lucide-react";

export default function RootLayout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary font-semibold underline underline-offset-4" : "text-muted-foreground"
    }`;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4 px-6">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <Code2 className="w-6 h-6 text-primary" />
            <span>MonPortfolio</span>
          </NavLink>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-5">
              <NavLink to="/projects" className={linkClass}>Projets</NavLink>
              <NavLink to="/experience" className={linkClass}>Parcours</NavLink>
              <NavLink to="/education" className={linkClass}>Formations</NavLink>
              <NavLink to="/certifications" className={linkClass}>Certifications</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6 flex-1 w-full">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} • Mon Portfolio Pro. Tous droits réservés.</p>
          <p className="text-xs">Propulsé par Vite, React, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}