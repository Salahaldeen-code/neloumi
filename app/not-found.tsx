import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container story">
      <p className="eyebrow">404</p>
      <h1 className="h2">This page has drifted away</h1>
      <Link href="/" className="btn btn--solid">
        Back to Neloumi
      </Link>
    </section>
  );
}
