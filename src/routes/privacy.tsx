import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Patron" },
      { name: "description", content: "How Patron collects and protects personal information under POPIA." },
      { property: "og:title", content: "Privacy Policy | Patron" },
      { property: "og:description", content: "How Patron handles your information, consent and opt-out." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>Patron respects your privacy and follows the Protection of Personal Information Act (POPIA).</p>
      <p>We only collect what you give us on our forms (such as your name, restaurant, phone number and email) so we can contact you about Patron.</p>
      <p>Restaurant guests only receive messages after they agree to hear from that restaurant. Every message includes a way to opt out, and opting out is honoured straight away.</p>
      <p>We never sell your information. You can ask us to see, correct or delete your details at any time.</p>
    </LegalPage>
  ),
});
