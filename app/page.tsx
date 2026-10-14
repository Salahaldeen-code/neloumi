import { Collection, Gifting, Hero, NewsletterSection, PromiseStrip, Spotlight, Story } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <PromiseStrip />
      <Collection />
      <Spotlight />
      <Story />
      <Gifting />
      <NewsletterSection />
    </>
  );
}
