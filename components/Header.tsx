"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { useCart } from "./CartProvider";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon, UserIcon } from "./Icons";

const navLinks = [
  { href: "/#collection", label: "Shop" },
  { href: "/#collection", label: "Collection" },
  { href: "/#story", label: "Our Story" },
  { href: "/#gifting", label: "Gifting" },
];

export default function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement">{site.announcement}</div>
      <header className="header">
        <div className="header__left">
          <button
            type="button"
            className="icon-btn header__menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <nav className="header__nav" aria-label="Main">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="logo" aria-label="Neloumi home">
          <Image src="/images/mono.jpg" alt="" width={47} height={44} className="logo__mark" priority />
          <span className="logo__word">NELOUMI</span>
        </Link>

        <div className="header__right">
          <button type="button" className="icon-btn" aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" className="icon-btn hide-sm" aria-label="Account">
            <UserIcon />
          </button>
          <button type="button" className="icon-btn bag-btn" aria-label={`Shopping bag, ${count} items`} onClick={open}>
            <BagIcon />
            {count > 0 && <span className="bag-btn__count">{count}</span>}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
