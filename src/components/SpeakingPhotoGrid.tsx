import img1 from "@/imports/Frame2085664702/68eca78d53ff5e7ad6b64d35cf52f32cd7cf86cc.png";
import img2 from "@/imports/Frame2085664702/52c49b9095da81d1e950cf653994e4a2b980fe1e.png";
import img3 from "@/imports/Frame2085664702/e498645e4b818cc3cbb026ed6022e4984c518755.png";
import img4 from "@/imports/Frame2085664702/f04921ebcf2f243ab0efc871458e110c688ea277.png";
import img5 from "@/imports/Frame2085664702/b890cc9e6a0277e8d51b4e3b039184fcdeb5eed2.png";
import img6 from "@/imports/Frame2085664702/a37b6ca05580a2f4563cb10761a2a39c555ee060.png";
import img7 from "@/imports/Frame2085664702/9e1d274c1d56f53fa7b8897e4971bc975e26c9d0.png";
import img8 from "@/imports/Frame2085664702/62e6f268a1b83000d3a97c838c01836cf357d9c3.png";

const col1 = [
  { src: img1, alt: "Joy at speaking event", aspect: "591/501" },
  { src: img2, alt: "Joy speaking at conference", aspect: "591/462" },
  { src: img3, alt: "Joy presenting", aspect: "591/329" },
];

const col2 = [
  { src: img4, alt: "Joy on stage", aspect: "591/661" },
  { src: img5, alt: "Joy presenting to audience", aspect: "591/374" },
  { src: img6, alt: "Joy speaking", aspect: "591/268" },
];

const col3 = [
  { src: img7, alt: "Joy at event", aspect: "591/282" },
  { src: img8, alt: "Joy at community event", aspect: "591/801" },
];

function PhotoCol({ photos }: { photos: typeof col1 }) {
  return (
    <div className="flex flex-col">
      {photos.map((p, i) => (
        <div
          key={i}
          className="relative overflow-hidden outline outline-2 outline-white"
          style={{ aspectRatio: p.aspect }}
        >
          <img
            src={p.src}
            alt={p.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function SpeakingPhotoGrid() {
  return (
    <div className="speaking-photo-grid">
      <PhotoCol photos={col1} />
      <PhotoCol photos={col2} />
      <PhotoCol photos={col3} />
    </div>
  );
}
