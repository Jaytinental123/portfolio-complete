import imgFofMakeathon from "@/imports/7U0A4252.webp";
import imgFofAbeokuta from "@/imports/_MG_8741.webp";
import imgNextgen from "@/imports/Frame2085664714/017be7e812c7a69bb426d18a1472236febd5f251.webp";
import imgAirtel from "@/imports/Frame2085664714/1e9f8d8a6db1b74ea4064955ff877d971fd1b5d2.webp";

const photos = [
  { src: imgFofMakeathon, alt: "Joy speaking at FOF Make-a-thon 2026, Abeokuta" },
  { src: imgNextgen, alt: "Joy speaking at NextGen Conference" },
  { src: imgAirtel, alt: "Joy as judge at Airtel × 3MTT NextGen Showcase" },
  { src: imgFofAbeokuta, alt: "Joy at Friends of Figma Abeokuta" },
];

export default function SpeakingPhotos() {
  return (
    <div className="speaking-photos-grid">
      {photos.map((p, i) => (
        <div key={i} className="speaking-photo-cell">
          <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  );
}
