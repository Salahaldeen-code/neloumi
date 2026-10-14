# Neloumi website (Next.js)

A shop-style website for Neloumi: homepage, a page for each perfume, and a shopping bag.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where to edit things

| What | File |
| --- | --- |
| Prices, scent notes, descriptions | `lib/products.ts` |
| Currency (now MYR) | `lib/products.ts` → `CURRENCY` |
| Email, WhatsApp, Instagram, top banner, promise strip | `lib/site.ts` |
| Homepage text (hero, story, gifting) | `components/sections.tsx` |
| Colours and fonts | `app/globals.css` (top of file) |
| Product photos | `public/images/` |

Anything in **[square brackets]** is a placeholder waiting for your real text.

## Pages

- `/` — homepage
- `/products/hayba`, `/products/ofoq`, `/products/waqar`, `/products/safaa`, `/products/karaza`, `/products/nada`

## Checkout

The bag works and remembers items in the visitor's browser. The **Checkout** button currently opens an email
to hello@neloumi.com with the order. Replace it in `components/CartDrawer.tsx` with your real checkout
(Stripe, Shopify, or a WhatsApp order link).

The newsletter form shows a thank-you message but does not save emails yet. Connect it in
`components/Newsletter.tsx` to Mailchimp, Klaviyo or similar.

## Put it online

The easiest way is [Vercel](https://vercel.com): upload this folder to GitHub, import it on Vercel, and
connect your `neloumi.com` domain in the project settings.
