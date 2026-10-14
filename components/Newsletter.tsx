"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  if (done) return <p className="newsletter__thanks">Thank you. You are on the list.</p>;

  return (
    <form
      className="newsletter__form"
      onSubmit={(e) => {
        e.preventDefault();
        // Connect this to your email tool (Mailchimp, Klaviyo, etc.)
        setDone(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input id="newsletter-email" type="email" required placeholder="Your email address" />
      <button type="submit" className="btn btn--solid">
        Subscribe
      </button>
    </form>
  );
}
