"use client";

import { useCart } from "./CartProvider";

export default function AddToBagButton({
  slug,
  variant = "link",
  label = "Add to bag",
}: {
  slug: string;
  variant?: "link" | "solid" | "gold";
  label?: string;
}) {
  const { add } = useCart();
  return (
    <button type="button" className={`btn btn--${variant}`} onClick={() => add(slug)}>
      {label}
    </button>
  );
}
