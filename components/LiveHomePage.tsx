"use client";

export default function LiveHomePage() {
  return (
    <main className="gd-container" style={{ paddingBottom: 144 }}>
      <h1
        style={{
          maxWidth: 816,
          marginTop: 128,
          marginBottom: 128,
          fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
          lineHeight: 1.25,
          fontWeight: 400,
          letterSpacing: "1px",
          color: "var(--ink)",
          textWrap: "pretty",
        }}
      >
        Hello, we&rsquo;re Goff-Yu. Together we help organisations build stronger brands, products and digital experiences through strategy, design and marketing.
      </h1>
    </main>
  );
}
