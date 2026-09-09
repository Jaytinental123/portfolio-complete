import imgMain from "@/imports/Frame2085664714/017be7e812c7a69bb426d18a1472236febd5f251.png";
import imgOverlay from "@/imports/Frame2085664714/b91e6a2081f5642d0b08813fe0ee1ee65bd51e38.png";
import imgDsc6709 from "@/imports/Frame2085664714/488a195b22b072bfc16a4e9657cf657a48a4cb2a.png";
import imgDsc6809 from "@/imports/Frame2085664714/1e9f8d8a6db1b74ea4064955ff877d971fd1b5d2.png";
import imgDsc6703 from "@/imports/Frame2085664714/c72d71e2d242a2fa74dc469ae57161b495ca43b8.png";

export default function ConferencesCollage() {
  return (
    <div className="conferences-collage">
      {/* Top row: main large photo spans 2 cols */}
      <div className="conf-cell conf-cell--main">
        <img src={imgMain} alt="Joy Omowaye speaking at NextGen Conference" className="conf-img" />
      </div>
      <div className="conf-cell conf-cell--top-right">
        <img src={imgDsc6809} alt="Joy on stage, Ogun NextGen Conference" className="conf-img" />
      </div>

      {/* Bottom row */}
      <div className="conf-cell conf-cell--bot-left">
        <img src={imgOverlay} alt="Joy Omowaye presenting" className="conf-img" />
      </div>
      <div className="conf-cell conf-cell--bot-mid">
        <img src={imgDsc6703} alt="Joy speaking, conference" className="conf-img" />
      </div>
      <div className="conf-cell conf-cell--bot-right">
        <img src={imgDsc6709} alt="Joy at speaking event" className="conf-img" />
      </div>
    </div>
  );
}
