import { useState } from "react";
import { Project } from "../data";
import CoverFrame from "./CoverFrame";

export default function Carousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const n = projects.length;

  const getPos = (i: number) => {
    if (i === index) return "center";
    if (i === (index - 1 + n) % n) return "left";
    if (i === (index + 1) % n) return "right";
    return "hidden";
  };

  return (
    <>
      <div className="carousel-stage">
        <button
          type="button"
          className="carousel-btn carousel-btn--prev"
          aria-label="Previous"
          onClick={() => setIndex((index - 1 + n) % n)}
        >
          ‹
        </button>
        <div className="carousel-track">
          {projects.map((p, i) => (
            <a
              key={p.slug}
              href={`#/case/${p.slug}`}
              className={`carousel-item carousel-item--${getPos(i)}`}
            >
              <div className="carousel-item-inner">
                <CoverFrame project={p} />
                <div className="carousel-item-caption">
                  <span className="carousel-item-label">{p.title}</span>
                  <span className="carousel-item-cat">{p.category}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="carousel-btn carousel-btn--next"
          aria-label="Next"
          onClick={() => setIndex((index + 1) % n)}
        >
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot${i === index ? " is-active" : ""}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </>
  );
}
