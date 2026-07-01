"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header
      className="gd-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "var(--gd-header-top)",
        paddingBottom: 0,
      }}
    >
      <Link href="/" aria-label="Home" style={{ display: "block" }}>
        <Image
          src="/logo-mark.svg"
          alt="Logo"
          width={24}
          height={24}
          priority
        />
      </Link>
      <nav aria-label="Site navigation">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            listStyle: "none",
          }}
        >
          <li>
            <Link
              href="/about"
              style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", color: "var(--ink)", fontWeight: 400 }}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="https://cal.com/vanessa-goff-yu-j7laxh/intro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a call (opens in new tab)"
              style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", color: "var(--ink)", fontWeight: 400 }}
            >
              Book a call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
