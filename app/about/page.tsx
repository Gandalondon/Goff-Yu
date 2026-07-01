import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Goff-Yu helps organisations build stronger brands, products and digital experiences through strategy, design and marketing.",
};

const BIO =
  "Goff-Yu helps organisations build stronger brands, products and digital experiences through strategy, design and marketing. Together we bring over 35 years of experience working with startups, agencies and global organisations, combining product design, research, marketing strategy, communications and creative campaigns to help businesses connect with customers and achieve measurable results.";

const EXPERTISE = [
  "Product Design",
  "Product Strategy",
  "Marketing Strategy",
  "Digital Marketing",
  "Brand Strategy",
  "UX Research",
  "Experimentation",
  "Conversion Optimisation",
  "Communications & PR",
  "Content Strategy",
  "Campaign Planning",
  "Creative Direction",
  "Partnerships & Outreach",
  "AI Workflows",
];

const CLIENTS = [
  "Google",
  "BMW",
  "Sony",
  "McLaren",
  "General Motors",
  "Toyota",
  "FINN",
  "McKinsey & Company",
  "Ernst & Young",
  "Dentsu",
  "Publicis Media",
  "Mindshare",
  "Xaxis",
  "Kin + Carta",
  "Kairos Group",
  "Codemasters",
  "Twitch",
  "Takumi",
  "Barclays",
  "NatWest",
  "BP",
  "Shell",
  "Adidas",
  "Gap",
  "BADU",
];

export default function AboutPage() {
  return (
    <main style={{ paddingBottom: 144 }}>
      <div className="gd-container" style={{ paddingTop: 128, paddingBottom: 0 }}>
        <div className="gd-split" style={{ gap: 24 }}>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "1px",
              lineHeight: 1.25,
            }}
          >
            About
          </h1>
          <div>
            {BIO.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 18,
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  marginTop: i === 0 ? 0 : "1.2em",
                  textWrap: "pretty" as React.CSSProperties["textWrap"],
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="gd-container" style={{ marginTop: 96 }}>
        <div className="gd-split" style={{ gap: 24 }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "1px",
              lineHeight: 1.25,
              color: "var(--ink)",
            }}
          >
            Expertise
          </h2>
          <div className="gd-clients">
            {EXPERTISE.map((item, i) => (
              <p
                key={i}
                style={{
                  fontSize: 18,
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="gd-container" style={{ marginTop: 96 }}>
        <div className="gd-split" style={{ gap: 24 }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "1px",
              lineHeight: 1.25,
              color: "var(--ink)",
            }}
          >
            Clients
          </h2>
          <div className="gd-clients">
            {CLIENTS.map((c, i) => (
              <p
                key={i}
                style={{
                  fontSize: 18,
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                }}
              >
                {c}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
