import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToBagButton from "@/components/AddToBagButton";
import { Notes } from "@/components/sections";
import { formatPrice, getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: `${p.name} · ${p.meaning}`, description: p.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const others = products.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="container product">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/#collection">Collection</Link> / <span>{p.name}</span>
        </nav>
        <div className="split product__split">
          <div className="split__media product__media">
            <Image src={p.image} alt={p.imageAlt} width={1400} height={860} priority sizes="(max-width: 900px) 100vw, 58vw" />
          </div>
          <div className="split__text">
            <p className="eyebrow">Eau de Parfum · {p.size}</p>
            <h1 className="h2 h2--xl">{p.name}</h1>
            <p className="product__meaning" style={{ color: p.accent === "#161412" ? "#8A6A32" : p.accent }}>
              {p.meaning}
            </p>
            <p className="product__price">{formatPrice(p.price)}</p>
            <p className="lead">{p.description}</p>
            <Notes notes={p.notes} />
            <div className="btn-row">
              <AddToBagButton slug={p.slug} variant="solid" />
            </div>
            <ul className="product__perks">
              <li>Presented in the signature {p.name} box</li>
              <li>Complimentary gift wrapping</li>
              <li>[Your delivery promise]</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">You may also like</p>
          <h2 className="h2">More from the collection</h2>
        </div>
        <div className="product-grid">
          {others.map((o) => (
            <article key={o.slug} className="card">
              <Link href={`/products/${o.slug}`} className="card__media">
                <Image src={o.image} alt={o.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </Link>
              <div className="card__row">
                <h3 className="card__name">
                  <Link href={`/products/${o.slug}`}>{o.name.toUpperCase()}</Link>
                </h3>
                <span className="card__price">{formatPrice(o.price)}</span>
              </div>
              <p className="card__desc">{o.meaning}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
