import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | Patron" },
      { name: "description", content: "The terms for using the Patron website and joining the waitlist." },
      { property: "og:title", content: "Terms | Patron" },
      { property: "og:description", content: "Terms for the Patron website and waitlist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Terms">
      <p>Patron is not live yet. Joining the waitlist does not create a contract or commit you to pay.</p>
      <p>Prices shown are early prices and may change before launch.</p>
      <p>Any messages sent through Patron must go only to guests who have given consent, in line with POPIA, and must include an opt-out.</p>
      <p>Estimates on this site are examples only and are not promised results.</p>
    </LegalPage>
  ),
});
