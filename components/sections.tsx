import Image from "next/image";
import Link from "next/link";
import { formatPrice, getProduct, products } from "@/lib/products";
import { site } from "@/lib/site";
import AddToBagButton from "./AddToBagButton";
import Newsletter from "./Newsletter";

export function Hero() {
  const hayba = getProduct("hayba")!;
  return (
    <section id="top" className="hero container">
      <div className="hero__text">
        <p className="eyebrow">Eau de Parfum · New Collection</p>
        <h1 className="hero__title">
          Scents with a name,
          <br />
          <em>and a meaning.</em>
        </h1>
        <p className="lead">
          Six fragrances, each named for a feeling in Arabic: presence, horizon, dignity, purity, warmth and morning
          dew. Bottled in glass, finished in gold.
        </p>
        <div className="btn-row">
          <Link href="/#collection" className="btn btn--solid">
            Discover the Collection
          </Link>
          <Link href="/#story" className="btn btn--outline">
            Our Story
          </Link>
        </div>
      </div>
      <div className="hero__media">
        <Image src={hayba.image} alt={hayba.imageAlt} width={1418} height={851} priority sizes="(max-width: 900px) 100vw, 58vw" />
        <Link href={`/products/${hayba.slug}`} className="hero__tag">
          <span className="hero__tag-name">HAYBA</span>
          <span className="hero__tag-sub">
            {hayba.meaning} · {hayba.size}
          </span>
        </Link>
      </div>
    </section>
  );
}

export function PromiseStrip() {
  return (
    <section className="promises">
      <div className="container promises__grid">
        {site.promises.map((p) => (
          <div key={p}>{p}</div>
        ))}
      </div>
    </section>
  );
}

export function Collection() {
  return (
    <section id="collection" className="section container">
      <div className="section-head">
        <p className="eyebrow">The Collection</p>
        <h2 className="h2">Six words, six moods</h2>
        <div className="rule" />
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <article key={p.slug} className="card">
            <Link href={`/products/${p.slug}`} className="card__media">
              <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
            </Link>
            <div className="card__row">
              <h3 className="card__name">
                <Link href={`/products/${p.slug}`}>{p.name.toUpperCase()}</Link>
              </h3>
              <span className="card__price">{formatPrice(p.price)}</span>
            </div>
            <p className="card__desc">{p.meaning}</p>
            <AddToBagButton slug={p.slug} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function Notes({ notes, dark = false }: { notes: { top: string; heart: string; base: string }; dark?: boolean }) {
  return (
    <div className={`notes ${dark ? "notes--dark" : ""}`}>
      {(["top", "heart", "base"] as const).map((k) => (
        <div key={k} className="notes__item">
          <span className="notes__label">{k}</span>
          <span className="notes__value">{notes[k]}</span>
        </div>
      ))}
    </div>
  );
}

export function Spotlight() {
  const p = getProduct("karaza")!;
  return (
    <section className="spotlight">
      <div className="container split">
        <div className="split__media">
          <Image src={p.image} alt={p.imageAlt} width={1310} height={857} sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
        <div className="split__text">
          <p className="eyebrow eyebrow--light">In the spotlight</p>
          <h2 className="h2 h2--xl">{p.name}</h2>
          <p className="lead lead--light">{p.description}</p>
          <Notes notes={p.notes} dark />
          <div className="btn-row">
            <AddToBagButton slug={p.slug} variant="gold" label={`Add Karaza · ${formatPrice(p.price)}`} />
            <Link href={`/products/${p.slug}`} className="btn btn--ghost-light">
              View details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const values = [
  { num: "I", title: "Named with meaning", text: "Each scent takes its name from an Arabic word, and its character from that word." },
  { num: "II", title: "Made to be gifted", text: "Every bottle arrives in its own linen-finish box, ready to give." },
  { num: "III", title: "Signed in gold", text: "The NL monogram, foiled on glass and box alike." },
];

export function Story() {
  return (
    <section id="story" className="section story container container--narrow">
      <Image src="/images/mono.jpg" alt="" width={102} height={96} className="story__mark" />
      <p className="eyebrow">Our Story</p>
      <h2 className="h2 story__title">Every Neloumi fragrance carries a word worth wearing.</h2>
      <p className="lead story__lead">
        [Tell your story here: who founded Neloumi, where the perfumes are made, and why each scent is named in Arabic.]
      </p>
      <div className="values">
        {values.map((v) => (
          <div key={v.num} className="values__item">
            <span className="values__num">{v.num}</span>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Gifting() {
  const p = getProduct("safaa")!;
  return (
    <section id="gifting" className="gifting">
      <div className="container split split--reverse">
        <div className="split__text">
          <p className="eyebrow">Gifting</p>
          <h2 className="h2">Wrapped to be given</h2>
          <p className="lead">
            Add a ribbon and a handwritten card at checkout. [Mention Eid, wedding or corporate gifting options if you
            offer them.]
          </p>
          <div className="btn-row">
            <Link href="/#collection" className="btn btn--solid">
              Choose a gift
            </Link>
          </div>
        </div>
        <div className="split__media">
          <Image src={p.image} alt={p.imageAlt} width={1275} height={852} sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="section newsletter container">
      <h2 className="h2">Join the Neloumi circle</h2>
      <p className="muted">New releases and private offers, sent rarely.</p>
      <Newsletter />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__word">NELOUMI</span>
          <p>{site.tagline}</p>
        </div>
        <div className="footer__col">
          <span className="footer__label">Shop</span>
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}>
              {p.name}
            </Link>
          ))}
        </div>
        <div className="footer__col">
          <span className="footer__label">Help</span>
          <Link href="#">Shipping &amp; returns</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Track your order</Link>
        </div>
        <div className="footer__col">
          <span className="footer__label">Contact</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.whatsapp}</span>
          <span>{site.instagram}</span>
        </div>
      </div>
      <div className="footer__bottom">© {new Date().getFullYear()} Neloumi. All rights reserved.</div>
    </footer>
  );
}
