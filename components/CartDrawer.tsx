"use client";

import Image from "next/image";
import { useEffect } from "react";
import { formatPrice, getProduct } from "@/lib/products";
import { site } from "@/lib/site";
import { useCart } from "./CartProvider";
import { CloseIcon } from "./Icons";

export default function CartDrawer() {
  const { lines, isOpen, close, setQty, remove, total, count } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="drawer" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <button type="button" className="drawer__backdrop" aria-label="Close bag" onClick={close} />
      <aside className="drawer__panel">
        <div className="drawer__head">
          <h2>Your bag ({count})</h2>
          <button type="button" className="icon-btn" aria-label="Close bag" onClick={close}>
            <CloseIcon />
          </button>
        </div>

        {lines.length === 0 ? (
          <p className="drawer__empty">Your bag is empty.</p>
        ) : (
          <ul className="drawer__list">
            {lines.map((line) => {
              const p = getProduct(line.slug);
              if (!p) return null;
              return (
                <li key={line.slug} className="drawer__item">
                  <Image src={p.image} alt={p.imageAlt} width={96} height={72} className="drawer__img" />
                  <div className="drawer__info">
                    <span className="drawer__name">{p.name.toUpperCase()}</span>
                    <span className="muted">
                      {p.meaning} · {p.size}
                    </span>
                    <span>{formatPrice(p.price)}</span>
                    <div className="qty">
                      <button type="button" aria-label={`One less ${p.name}`} onClick={() => setQty(p.slug, line.qty - 1)}>
                        −
                      </button>
                      <span aria-live="polite">{line.qty}</span>
                      <button type="button" aria-label={`One more ${p.name}`} onClick={() => setQty(p.slug, line.qty + 1)}>
                        +
                      </button>
                      <button type="button" className="link-btn" onClick={() => remove(p.slug)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {lines.length > 0 && (
          <div className="drawer__foot">
            <div className="drawer__total">
              <span>Subtotal</span>
              <span>{total === null ? "Set prices in lib/products.ts" : formatPrice(total)}</span>
            </div>
            {/* Replace this link with your real checkout (Shopify, Stripe, WhatsApp order, etc.) */}
            <a
              className="btn btn--solid btn--full"
              href={`mailto:${site.email}?subject=${encodeURIComponent("Neloumi order")}&body=${encodeURIComponent(
                lines
                  .map((l) => `${getProduct(l.slug)?.name ?? l.slug} x ${l.qty}`)
                  .join("\n")
              )}`}
            >
              Checkout
            </a>
          </div>
        )}
      </aside>
    </div>
  );
}
