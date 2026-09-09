import { lazy, Suspense, useRef, useEffect, useState } from "react";
import { Project, initials } from "../data";

const AppBanner = lazy(() => import("../imports/AppBanner"));

// AppBanner was designed at 900px wide × 562px tall (16/10).
// We scale it so it always fills whatever size the card is.
const DESIGN_W = 900;
const DESIGN_H = 562;

function MB11BannerCover({ cls }: { cls: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.44);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / DESIGN_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={cls} style={{ background: "#3463b9", overflow: "hidden", position: "relative" }}>
      <div style={{
        position: "absolute",
        top: 0, left: 0,
        width: DESIGN_W,
        height: DESIGN_H,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        pointerEvents: "none",
      }}>
        <Suspense fallback={null}>
          <AppBanner />
        </Suspense>
      </div>
      <div style={{
        position: "absolute", bottom: 14, left: 16, zIndex: 10,
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "0.95rem", color: "#fff", letterSpacing: "-0.01em",
        textShadow: "0 1px 8px rgba(0,0,0,0.5)",
        background: "rgba(0,0,0,0.28)",
        backdropFilter: "blur(4px)",
        padding: "4px 10px",
        borderRadius: 4,
        lineHeight: 1.3,
      }}>
        My Best 11
      </div>
    </div>
  );
}

export default function CoverFrame({ project, wide }: { project: Project; wide?: boolean }) {
  const tile = project.tileColor || "#1c1c1c";
  const cls = `cover-frame${wide ? " cover-frame--wide" : ""}`;

  if (project.frame === "app-banner") {
    return <MB11BannerCover cls={cls} />;
  }

  if (!project.cover) {
    return (
      <div className={cls} style={{ background: tile }}>
        <div className="cover-placeholder">
          <span>{initials(project.title)}</span>
        </div>
      </div>
    );
  }

  const img = (
    <img
      className="cover-img"
      src={project.cover}
      alt={`${project.title} project cover`}
      loading="lazy"
      decoding="async"
      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
    />
  );

  if (project.frame === "browser") {
    return (
      <div className={`${cls} cover-frame--device`} style={{ background: tile }}>
        <div className="device device--browser">
          <div className="device-chrome">
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="device-screen">{img}</div>
        </div>
      </div>
    );
  }

  if (project.frame === "phone") {
    return (
      <div className={`${cls} cover-frame--device`} style={{ background: tile }}>
        <div className="device device--phone">
          <div className="device-notch" />
          <div className="device-screen">{img}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${cls} cover-frame--flat`} style={{ background: tile }}>
      {img}
    </div>
  );
}
