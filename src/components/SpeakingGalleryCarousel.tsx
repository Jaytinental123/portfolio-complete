import { useState } from "react";
import img1 from "@/imports/7U0A4252.jpg";
import img2 from "@/imports/7U0A4470.jpg";
import img3 from "@/imports/7U0A4629.jpg";
import img4 from "@/imports/_MG_8713.jpg";
import img5 from "@/imports/_MG_8741.jpg";
import img6 from "@/imports/Frame2085664714/017be7e812c7a69bb426d18a1472236febd5f251.png";
import img7 from "@/imports/Frame2085664714/1e9f8d8a6db1b74ea4064955ff877d971fd1b5d2.png";
import img8 from "@/imports/Frame2085664714/488a195b22b072bfc16a4e9657cf657a48a4cb2a.png";
import img9 from "@/imports/Frame2085664714/b91e6a2081f5642d0b08813fe0ee1ee65bd51e38.png";
import img10 from "@/imports/Frame2085664714/c72d71e2d242a2fa74dc469ae57161b495ca43b8.png";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const VISIBLE = 4;

export default function SpeakingGalleryCarousel() {
  const [start, setStart] = useState(0);
  const max = Math.max(0, photos.length - VISIBLE);

  return (
    <div className="speaking-gallery-wrap">
      <div className="speaking-gallery-track-outer">
        <div
          className="speaking-gallery-track"
          style={{ transform: `translateX(calc(-${start} * (var(--sg-w) + var(--sg-gap))))` }}
        >
          {photos.map((src, i) => (
            <div key={i} className="speaking-gallery-photo">
              <img src={src} alt={`Speaking photo ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="speaking-gallery-footer">
        <div className="speaking-gallery-arrows">
          <button
            type="button"
            className="sg-arrow"
            aria-label="Previous"
            disabled={start === 0}
            onClick={() => setStart((s) => Math.max(0, s - 1))}
          >
            ‹
          </button>
          <button
            type="button"
            className="sg-arrow"
            aria-label="Next"
            disabled={start >= max}
            onClick={() => setStart((s) => Math.min(max, s + 1))}
          >
            ›
          </button>
        </div>
        <a href="#/about" className="sg-view-more">
          View more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
