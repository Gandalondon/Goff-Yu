"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header
      className="gd-container gd-nav"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "var(--gd-header-top)",
        paddingBottom: "var(--gd-header-gap)",
        // Sticky header. It sits at the same distance from the top of the
        // screen at rest and when stuck (--gd-header-top), so it never
        // moves. No background for now. The header itself ignores clicks so
        // the empty strip between the logo and the links never blocks the
        // content underneath.
        position: "sticky",
        top: 0,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <Link
        href="/"
        aria-label="Home"
        style={{ display: "block", pointerEvents: "auto" }}
      >
        <Image
          src="/logo-mark.svg"
          alt="Logo"
          width={32}
          height={32}
          priority
        />
      </Link>
      <nav aria-label="Site navigation" style={{ pointerEvents: "auto" }}>
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
              style={{
                fontSize: "var(--type-small)",
                color: "var(--ink)",
                fontWeight: 400,
              }}
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
              style={{
                fontSize: "var(--type-small)",
                color: "var(--ink)",
                fontWeight: 400,
              }}
            >
              Book a call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
