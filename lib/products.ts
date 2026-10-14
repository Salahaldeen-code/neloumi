// All perfume data lives here. Edit prices, notes and descriptions in this one file.

export type Product = {
  slug: string;
  name: string;
  meaning: string; // English meaning of the Arabic name
  description: string;
  price: number | null; // null = shows "Price coming soon"
  size: string;
  notes: { top: string; heart: string; base: string };
  image: string;
  imageAlt: string;
  accent: string; // box colour, used on the product page
};

export const CURRENCY = "MYR";

export const products: Product[] = [
  {
    slug: "hayba",
    name: "Hayba",
    meaning: "Presence",
    description:
      "Smoked glass, a black cap and a black linen box. [Describe how Hayba smells and who it is for.]",
    price: null,
    size: "100 ml",
    notes: { top: "[Top notes]", heart: "[Heart notes]", base: "[Base notes]" },
    image: "/images/hayba.jpg",
    imageAlt: "Hayba bottle beside its black presentation box",
    accent: "#161412",
  },
  {
    slug: "ofoq",
    name: "Ofoq",
    meaning: "Horizon",
    description:
      "Clear blue glass with a silver cap, in a navy box. [Describe how Ofoq smells and who it is for.]",
    price: null,
    size: "100 ml",
    notes: { top: "[Top notes]", heart: "[Heart notes]", base: "[Base notes]" },
    image: "/images/ofoq.jpg",
    imageAlt: "Ofoq bottle beside its navy presentation box",
    accent: "#1B2A4A",
  },
  {
    slug: "waqar",
    name: "Waqar",
    meaning: "Dignity",
    description:
      "Clear glass with a gold-ringed cap, in a forest green box. [Describe how Waqar smells and who it is for.]",
    price: null,
    size: "100 ml",
    notes: { top: "[Top notes]", heart: "[Heart notes]", base: "[Base notes]" },
    image: "/images/waqar.jpg",
    imageAlt: "Waqar bottle beside its green presentation box",
    accent: "#1F3A2B",
  },
  {
    slug: "safaa",
    name: "Safaa",
    meaning: "Purity",
    description:
      "Frosted white glass in an ivory box tied with a gold ribbon. [Describe how Safaa smells and who it is for.]",
    price: null,
    size: "100 ml",
    notes: { top: "[Top notes]", heart: "[Heart notes]", base: "[Base notes]" },
    image: "/images/safaa.jpg",
    imageAlt: "Safaa frosted bottle beside its ivory ribboned box",
    accent: "#8A6A32",
  },
  {
    slug: "karaza",
    name: "Karaza",
    meaning: "Cherry",
    description:
      "Deep red glass, a fluted black cap and a gold-lined box. [Describe how Karaza smells and who it is for.]",
    price: null,
    size: "100 ml",
    notes: { top: "[Top notes]", heart: "[Heart notes]", base: "[Base notes]" },
    image: "/images/karaza.jpg",
    imageAlt: "Karaza bottle beside its burgundy and gold box",
    accent: "#3E1216",
  },
  {
    slug: "nada",
    name: "Nada",
    meaning: "Morning dew",
    description:
      "A round pale-green bottle with a gold cap, in a sage box. [Describe how Nada smells and who it is for.]",
    price: null,
    size: "100 ml",
    notes: { top: "[Top notes]", heart: "[Heart notes]", base: "[Base notes]" },
    image: "/images/nada.jpg",
    imageAlt: "Nada round bottle beside its sage green box",
    accent: "#4E5E4C",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number | null) {
  if (price === null) return "Price coming soon";
  return `${CURRENCY} ${price.toFixed(2)}`;
}
