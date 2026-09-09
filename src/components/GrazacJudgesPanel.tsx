import imgBg from "@/imports/Frame7/8510b70286dcf28463db2eb8060b2d78682d50c1.png";

const judges = [
  { name: "Ahmod Adeniyi", role: "Data Analyst", company: "The Access Group", isJoy: false },
  { name: "Moyinoluwa Olufisayo", role: "UX Designer", company: "Booking.com", isJoy: false },
  { name: "Ayotunde Lanwo", role: "Product Manager", company: "Location.live", isJoy: false },
  { name: "Joy Omowaye", role: "Lead Product Designer", company: "Prooval", isJoy: true },
];

export default function GrazacJudgesPanel() {
  return (
    <div className="grazac-panel">
      <div className="grazac-bg">
        <img src={imgBg} alt="" aria-hidden className="grazac-bg-img" />
      </div>
      <div className="grazac-inner container">
        <p className="eyebrow">External Judge</p>
        <h2 className="section-title" style={{ marginBottom: 36 }}>
          Our Judges help us maintain global standard
        </h2>
        <p className="grazac-sub">
          Grazac Academy · External judge for graduation product showcases
        </p>
        <div className="grazac-judges">
          {judges.map((j) => (
            <div key={j.name} className={`grazac-card${j.isJoy ? " grazac-card--featured" : ""}`}>
              <div className="grazac-info">
                <p className="grazac-name">{j.name}</p>
                <p className="grazac-role">{j.role.toUpperCase()}</p>
                <p className="grazac-company">{j.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
