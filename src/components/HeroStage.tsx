import { profile } from "../data";

/**
 * Hero stage.
 *
 * The portrait, the yellow blob, the black arc and the cursor tags are four
 * separate layers sharing one 900x918 coordinate space (the natural size of
 * assets/photos/joy-cutout.webp), so everything stays registered to the photo
 * at any container width while each layer drifts on its own timing.
 */

const BLOB_PATH =
  "M21.4 224.1 C31.7 207.8 61.7 175.2 81.4 163.7 C101.1 152.3 148.0 141.8 169.4 138.3 C190.7 134.8 226.0 137.3 241.5 137.7 C256.9 138.0 276.7 141.9 285.6 140.8 C294.5 139.7 302.6 134.8 308.1 129.5 C313.5 124.3 320.2 108.7 326.5 101.4 C332.7 94.0 346.0 80.8 354.9 74.7 C363.8 68.5 382.1 59.0 393.4 55.2 C404.7 51.4 426.9 46.8 440.0 46.0 C453.1 45.3 477.7 46.7 491.7 49.6 C505.7 52.5 531.2 60.9 545.1 67.7 C559.0 74.6 574.4 92.8 596.2 101.0 C618.0 109.2 675.3 116.3 708.3 129.5 C741.4 142.6 823.0 175.6 844.0 199.7 C865.0 223.7 865.2 279.9 866.0 309.6 C866.8 339.4 857.8 393.0 850.1 422.7 C842.5 452.5 823.0 504.4 808.7 532.4 C794.3 560.4 763.2 608.0 742.5 632.8 C721.9 657.6 680.0 698.2 653.8 718.3 C627.6 738.5 576.6 769.7 545.9 783.9 C515.2 798.2 457.2 818.3 423.4 825.3 C389.5 832.2 325.9 841.5 292.1 836.2 C258.4 830.9 197.9 806.0 170.4 785.3 C142.9 764.5 103.4 709.9 85.8 680.6 C68.3 651.2 48.1 594.6 39.0 565.1 C29.8 535.6 21.9 485.5 17.3 459.4 C12.6 433.3 6.1 392.3 4.3 369.2 C2.5 346.1 1.5 305.4 3.8 286.1 C6.1 266.7 11.1 240.5 21.4 224.1 Z";

const CURSOR_PATH =
  "M0.4 0 L0 4.4 L4.9 26.2 L6.7 28 L15.6 17.8 L25.3 13.3 L6.2 1.8 Z";

function CursorTag({ variant, label }: { variant: string; label: string }) {
  return (
    <span className={`hero-cursor hero-cursor--${variant}`}>
      <svg
        className="hero-cursor-arrow"
        viewBox="0 0 26 28"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d={CURSOR_PATH} />
      </svg>
      <span className="hero-cursor-label">{label}</span>
    </span>
  );
}

export default function HeroStage() {
  return (
    <div className="hero-stage" data-reveal="fade-left" data-delay="2">
      <svg
        className="hero-art hero-art--blob"
        viewBox="0 0 900 918"
        aria-hidden="true"
        focusable="false"
      >
        <path d={BLOB_PATH} fill="#FFCB60" />
      </svg>

      <svg
        className="hero-art hero-art--arc"
        viewBox="0 0 900 918"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M81.3 140.3 A165 165 0 0 0 -5 342.2"
          stroke="#111111"
          strokeWidth="5.6"
          strokeLinecap="round"
        />
      </svg>

      <picture className="hero-figure">
        <source srcSet={profile.photos.heroCutout} type="image/webp" />
        <img
          src={profile.photos.heroCutoutFallback}
          alt={`${profile.name}, product designer`}
          width={900}
          height={918}
          loading="eager"
          decoding="async"
        />
      </picture>

      <CursorTag variant="ux" label="UI/UX designer" />
      <CursorTag variant="pd" label="Product Designer" />

      <div className="hero-stamp-wrap">
        <svg className="hero-stamp" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <path
              id="stampCircle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="9.4" fontWeight="700" letterSpacing="1.6" fill="#0f766e">
            <textPath href="#stampCircle" startOffset="0%">
              HIRE ME • HIRE ME • HIRE ME •{" "}
            </textPath>
          </text>
        </svg>
        <div className="hero-stamp-center">
          <a href="/contact/" className="hero-stamp-arrow" aria-label="Contact me">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
