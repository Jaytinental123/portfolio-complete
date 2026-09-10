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
import { BASE_TITLE, PAGE_META, ROUTE_PATHS, caseMeta, casePath } from "./seo";

type Route = "home" | "work" | "about" | "cv" | "contact" | "case";

interface RouteState {
  route: Route;
  slug?: string;
}

const ROUTES: Record<string, Route> = {
  "/": "home",
  "/home": "home",
  "/work": "work",
  "/about": "about",
  "/cv": "cv",
  "/contact": "contact",
};

// Works both on the live site ("/") and inside Figma Make's preview.
const BASE_PATH = (() => {
  try {
    return new URL(import.meta.env.BASE_URL, location.href).pathname.replace(/\/+$/, "");
  } catch {
    return "";
  }
})();

function stripBase(pathname: string): string {
  let p = pathname;
  if (BASE_PATH && p.startsWith(BASE_PATH)) p = p.slice(BASE_PATH.length);
  return p || "/";
}

/** Turns "/case/mb11/" or "/work" into a route. Returns null if unknown. */
function parsePath(path: string): RouteState | null {
  const clean = path.replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/";
  const caseMatch = clean.match(/^\/case\/([^/]+)$/);
  if (caseMatch) return { route: "case", slug: decodeURIComponent(caseMatch[1]) };
  const route = ROUTES[clean];
  return route ? { route } : null;
}

function pathFor(state: RouteState): string {
  if (state.route === "case" && state.slug) return casePath(state.slug);
  return ROUTE_PATHS[state.route as Exclude<Route, "case">] || "/";
}

/** Old links looked like /#/case/mb11. Convert them to /case/mb11/. */
function legacyHashRoute(): RouteState | null {
  if (!location.hash.startsWith("#/")) return null;
  return parsePath(location.hash.slice(1)) || { route: "home" };
}

function readLocation(): RouteState {
  const legacy = legacyHashRoute();
  if (legacy) {
    history.replaceState(null, "", BASE_PATH + pathFor(legacy));
    return legacy;
  }
  const parsed = parsePath(stripBase(location.pathname));
  if (parsed) return parsed;
  // Unknown address: show the home page at "/".
  history.replaceState(null, "", BASE_PATH + "/");
  return { route: "home" };
}

export default function App() {
  const [{ route, slug }, setRoute] = useState<RouteState>(readLocation);

  useEffect(() => {
    const go = (next: RouteState, push: boolean) => {
      if (push) history.pushState(null, "", BASE_PATH + pathFor(next));
      setRoute(next);
      window.scrollTo(0, 0);
    };

    // Intercept clicks on internal links so pages switch instantly.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || !a.getAttribute("href")) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      const legacy = url.hash.startsWith("#/") ? parsePath(url.hash.slice(1)) : null;
      const next = legacy || (url.hash ? null : parsePath(stripBase(url.pathname)));
      if (!next) return;
      e.preventDefault();
      go(next, true);
    };

    const onPop = () => {
      setRoute(readLocation());
    };
    const onHash = () => {
      const legacy = legacyHashRoute();
      if (legacy) go(legacy, false);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useScrollReveal(route + (slug || ""));

  useEffect(() => {
    if (route === "case" && slug) {
      document.title = caseMeta(slug)?.title || BASE_TITLE;
    } else {
      document.title = PAGE_META[route as Exclude<Route, "case">]?.title || BASE_TITLE;
    }
  }, [route, slug]);

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
