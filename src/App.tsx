import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import CVPage from "./pages/CVPage";
import ContactPage from "./pages/ContactPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import { useScrollReveal } from "./hooks/useScrollReveal";

type Route = "home" | "work" | "about" | "cv" | "contact" | "case";

interface RouteState {
  route: Route;
  slug?: string;
}

const ROUTES: Record<string, Route> = {
  "": "home",
  "/": "home",
  "/home": "home",
  "/work": "work",
  "/about": "about",
  "/cv": "cv",
  "/contact": "contact",
};

function parseHash(hash: string): RouteState {
  const h = hash.replace(/^#/, "");
  const caseMatch = h.match(/^\/case\/(.+)$/);
  if (caseMatch) return { route: "case", slug: caseMatch[1] };
  return { route: ROUTES[h] || "home" };
}

export default function App() {
  const [{ route, slug }, setRoute] = useState<RouteState>(() =>
    parseHash(location.hash)
  );

  useEffect(() => {
    const handler = () => {
      setRoute(parseHash(location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  useScrollReveal(route + (slug || ""));

  const navPage = route === "case" ? "work" : route;

  return (
    <>
      {route === "home" && <div className="accent-bar" />}
      <Nav activePage={navPage} />
      <main>
        {route === "home" && <HomePage />}
        {route === "work" && <WorkPage />}
        {route === "about" && <AboutPage />}
        {route === "cv" && <CVPage />}
        {route === "contact" && <ContactPage />}
        {route === "case" && <CaseStudyPage slug={slug || "mb11"} />}
      </main>
      <footer className="site-footer">
        <Footer />
      </footer>
    </>
  );
}
