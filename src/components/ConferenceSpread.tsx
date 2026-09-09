import imgBig from "@/imports/Frame2085664713/f691b52057029c7001161d3c523e1b0663c943d5.png";
import imgTop from "@/imports/Frame2085664713/b900ddc216536adc024f9a72c3b38903c082fb78.png";
import imgBot from "@/imports/Frame2085664713/73b8479717ee72b4d45bb2de21a8447c0328de99.png";

export default function ConferenceSpread() {
  return (
    <div className="conf-spread">
      <div className="conf-spread-main">
        <img src={imgBig} alt="Joy Omowaye at conference" className="conf-spread-img" />
      </div>
      <div className="conf-spread-stack">
        <div className="conf-spread-cell">
          <img src={imgTop} alt="Conference event photo" className="conf-spread-img" />
        </div>
        <div className="conf-spread-cell">
          <img src={imgBot} alt="Joy speaking at event" className="conf-spread-img" />
        </div>
      </div>
    </div>
  );
}
