import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import heroPour from "@/assets/hero-pour.jpg";
import heroTable from "@/assets/hero-table.jpg";
import archQuiet from "@/assets/arch-quiet.jpg";
import archRegular from "@/assets/arch-regular.jpg";
import archList from "@/assets/arch-list.jpg";
import plateOverhead from "@/assets/plate-overhead.jpg";
import kitchen from "@/assets/kitchen.jpg";
import coffee from "@/assets/coffee.jpg";
import {
  FOUNDING_SPOTS_LEFT, WA_LINK, CELL_NUMBER, EMAIL, WHATSAPP_DISPLAY,
  INSTAGRAM, FACEBOOK, FOUNDER_1, FOUNDER_2, spotsText,
} from "@/lib/patron";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patron | Bring your restaurant guests back" },
      { name: "description", content: "Patron helps independent South African restaurants, cafés and takeaways turn first-timers into regulars and fill the quiet hours. Join the waitlist." },
      { property: "og:title", content: "Patron | Bring your restaurant guests back" },
      { property: "og:description", content: "Stamp cards, a guest list you own and messages that fill quiet days. Join the waitlist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const showTest = FOUNDING_SPOTS_LEFT > 0;

/* ---------- helpers ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Star = ({ className = "" }: { className?: string }) => <span aria-hidden className={className}>✺</span>;

function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`label-xs ${className}`}>{children}</p>;
}

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M9 8.5c.3 2.6 2.4 5 5.5 6l1-1.3-1.7-1-1 .7c-1-.5-1.9-1.4-2.3-2.4l.6-1-1-1.7Z" />
    </svg>
  );
}

/* ---------- page ---------- */
function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Nav />
      <Strip />
      <main>
        <Hero />
        <Band />
        <About />
        <WhatItDoes />
        <MenuFeatures />
        <Problem />
        <Pricing />
        <Faq />
        <Apply />
        <Contact />
      </main>
      <Footer />
      <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Chat to Patron on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-band text-cream shadow-lg transition hover:-translate-y-1">
        <WaIcon className="h-6 w-6" />
      </a>
      <ScrollStampCard />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["How it works", "#how"], ["Pricing", "#pricing"], ["Contact", "#contact"]];
  return (
    <header className="sticky top-0 z-50 bg-ink text-cream">
      <nav className="relative mx-auto flex h-[60px] items-center justify-between px-5 md:px-8" aria-label="Main">
        <ul className="hidden gap-7 md:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="font-serif text-base italic opacity-85 hover:opacity-100">{l}</a></li>
          ))}
        </ul>
        <a href="#top" className="font-display text-lg font-semibold tracking-[0.45em] md:absolute md:left-1/2 md:-translate-x-1/2">PATRON</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hidden md:block"><WaIcon /></a>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-px w-6 bg-cream" /><span className="mt-2 block h-px w-6 bg-cream" />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 top-[60px] z-50 flex flex-col items-center justify-center gap-8 bg-ink">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="font-serif text-4xl italic">{l}</a>
          ))}
          <a href="#apply" onClick={() => setOpen(false)} className="pill mt-4">Join the waitlist</a>
        </div>
      )}
    </header>
  );
}

function Strip() {
  return (
    <div id="top" className="bg-cream px-4 py-2 text-center text-[11px] text-band">
      Built for independent restaurants, cafés and takeaways in South Africa <Star className="mx-1" />
      {showTest ? <> {spotsText()}. <a href="#apply" className="underline underline-offset-2">Apply</a></> : <a href="#apply" className="underline underline-offset-2">Join the waitlist</a>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative grid md:grid-cols-2" aria-label="Welcome">
      <img src={heroPour} alt="A hand pouring golden sauce over a plated dish" width={1024} height={1024} className="aspect-square w-full object-cover md:aspect-[4/3.4]" />
      <img src={heroTable} alt="A candle-lit table with a plated dish and a glass of wine" width={1024} height={1024} className="aspect-square w-full object-cover md:aspect-[4/3.4]" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 text-cream">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-cream/70 text-xl"><Star /></span>
        <a href="#apply" className="pill bg-ink/30 backdrop-blur-sm">Join the waitlist</a>
      </div>
    </section>
  );
}

function Band() {
  const cards = [
    { img: archQuiet, alt: "An empty table by a window at a quiet hour", a: "Quiet", b: "Tuesdays" },
    { img: archRegular, alt: "A hand holding a phone with a stamp card above a plate", a: "Regular", b: "Guests" },
    { img: archList, alt: "A glass of wine beside a small QR table card", a: "Your", b: "Guest List" },
  ];
  return (
    <section className="bg-band pt-16 text-band-foreground md:pt-20" aria-label="Patron">
      <h1 className="sr-only">Patron: bring your restaurant guests back</h1>
      <p aria-hidden className="reveal px-3 text-center font-display text-[19vw] font-bold leading-[0.85] tracking-tight">PATRON</p>
      <p className="reveal mx-auto mt-10 max-w-3xl px-6 text-center font-serif text-3xl leading-tight md:text-5xl">
        Turn first-timers into <em>Patrons</em>. We help restaurants bring guests back and fill the <em>quiet hours</em>.
      </p>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3">
        {cards.map((c) => (
          <figure key={c.b} className="group relative overflow-hidden arch transition duration-700 hover:-translate-y-2">
            <img src={c.img} alt={c.alt} loading="lazy" width={768} height={1152} className="aspect-[3/4] w-full object-cover transition duration-1000 group-hover:scale-105" />
            <figcaption className="absolute bottom-5 left-6 text-lg text-cream drop-shadow">
              {c.a} <em className="font-serif text-xl">{c.b}</em>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-beige px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="reveal">
          <Label className="text-band">About Patron</Label>
          <h2 className="mt-5 text-4xl text-band md:text-6xl">Hi, we're <em>{FOUNDER_1}</em> and <em>{FOUNDER_2}</em>.</h2>
          <p className="mt-6 font-serif text-xl italic text-band">We'll visit your restaurant ourselves.</p>
        </div>
        <div className="reveal text-sm leading-relaxed md:pt-10">
          <p>We started Patron because we saw how many good restaurants struggle with the same things: quiet weekdays, guests who visit once and never return, and paper stamp cards that get lost. Big chains have teams and software for this. Independent restaurants usually have a notebook and a good memory.</p>
          <p className="mt-4">Patron is our answer: simple tools that help you remember your guests, reward them and bring them back. We even come to your restaurant, set it up and train your staff.</p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="pill mt-8 text-band">Chat to us</a>
          <ol className="mt-10 space-y-2 border-t border-hairline pt-6 text-xs">
            <li><span className="label-xs mr-3 text-rust">Now</span>Signing our first test restaurants.</li>
            <li><span className="label-xs mr-3 text-muted-foreground">Next</span>The first pilot.</li>
            <li><span className="label-xs mr-3 text-muted-foreground">Later</span>Wallet cards.</li>
          </ol>
        </div>
      </div>
      <div className="relative mx-auto mt-20 h-[420px] max-w-5xl md:h-[560px]">
        <img src={kitchen} alt="A chef carefully plating a dish in a small kitchen" loading="lazy" width={896} height={1152}
          className="bw-hover absolute left-0 top-0 h-[78%] w-[58%] rounded-xl object-cover md:w-[48%]" />
        <img src={coffee} alt="A cappuccino on a marble café table in window light" loading="lazy" width={896} height={1152}
          className="absolute bottom-0 right-0 h-[72%] w-[52%] rounded-xl object-cover shadow-2xl md:w-[42%]" />
      </div>
    </section>
  );
}

function WhatItDoes() {
  const cols = [
    { img: archQuiet, t: "Quiet days", d: "Fill the days that feel too slow with an offer your guests actually want." },
    { img: archRegular, t: "Regular guests", d: "Turn one visit into many with a stamp card in their phone, no app needed." },
    { img: archList, t: "Your own guest list", d: "A list of people who chose to hear from you. It belongs to you." },
  ];
  const steps = [
    ["01", "Know your guests", "They scan the QR code and join in about 15 seconds."],
    ["02", "Send the right offer", "Text guests who haven't visited in 30 days, or whose birthday is this week."],
    ["03", "See what it brought in", "Sign-ups, messages sent, offers redeemed."],
  ];
  return (
    <section id="how" className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Label className="reveal text-center text-band">What it does</Label>
        <h2 className="reveal mt-5 text-center text-5xl text-band md:text-7xl">Fill the quiet <em>hours</em>.</h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.t} className="reveal text-center">
              <img src={c.img} alt="" loading="lazy" width={768} height={1152} className="arch bw-hover mx-auto aspect-[3/4] w-40 object-cover" />
              <h3 className="mt-6 text-2xl italic text-band">{c.t}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm">{c.d}</p>
            </div>
          ))}
        </div>
        <ol className="mt-24 grid border-y border-hairline md:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <li key={n} className="reveal border-hairline p-8 md:border-l md:first:border-l-0">
              <span className="font-serif text-5xl text-band">{n}</span>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <p className="reveal mt-8 text-center font-serif text-2xl italic text-band">Send less. Earn more.</p>
        <p className="mt-6 text-center text-xs text-muted-foreground">No app to download <Star className="mx-2" /> Guests agree before we message them <Star className="mx-2" /> Your list belongs to you</p>

        <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
          <DemoCard />
          <QuietQuiz />
        </div>
      </div>
    </section>
  );
}

function QrGlyph() {
  // decorative QR-like pattern (demo only)
  const cells = "1111111010111111100000101010000010111010011010111010111010100010111010111010011010111010000010101010000011111110101011111110000000011000000001011011101101100110100101100011001110110110101100000000101101001111111011001011000001010010110010111010110100110011011101011101011001110100110100010110000010110110111011111110100110011101";
  return (
    <svg viewBox="0 0 17 17" className="h-28 w-28" aria-hidden>
      {cells.slice(0, 289).split("").map((c, i) => c === "1" && <rect key={i} x={i % 17} y={Math.floor(i / 17)} width="1" height="1" className="fill-ink" />)}
    </svg>
  );
}

function DemoCard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
      <button onClick={() => setOpen(true)} className="flex flex-col items-center gap-3 rounded-xl border border-hairline bg-beige p-5" aria-label="Open the demo stamp card">
        <QrGlyph />
        <span className="label-xs text-band">Tap to try</span>
      </button>
      <div className="relative w-56 rounded-[2rem] border-[6px] border-ink bg-cream p-5 shadow-2xl">
        <span className="label-xs absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rust px-3 py-1 text-cream">Preview</span>
        <p className="mt-3 text-center font-serif text-2xl">Café <em>Example</em></p>
        <p className="mt-1 text-center text-[10px] text-muted-foreground">Demo only. No real data.</p>
        <div className="mt-5 grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={`grid aspect-square place-items-center rounded-full border text-sm ${i < 3 ? "border-band bg-band text-cream" : "border-hairline"}`}>{i < 3 ? "✺" : ""}</span>
          ))}
        </div>
        <p className="mt-5 text-center text-xs">3 of 8 stamps. 8th coffee on us.</p>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Demo stamp card" className="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-6" onClick={() => setOpen(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-cream p-8 text-center" onClick={(e) => e.stopPropagation()}>
            <Label className="text-rust">Preview · demo only</Label>
            <p className="mt-3 font-serif text-4xl">Café <em>Example</em></p>
            <p className="mt-2 text-sm text-muted-foreground">This is a made-up café. Nothing here is real data.</p>
            <div className="mx-auto mt-6 grid max-w-[220px] grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className={`grid aspect-square place-items-center rounded-full border ${i < 3 ? "border-band bg-band text-cream" : "border-hairline"}`}>{i < 3 ? "✺" : ""}</span>
              ))}
            </div>
            <p className="mt-6 text-sm">Today's offer: a free pastry with any coffee before 10am.</p>
            <button onClick={() => setOpen(false)} className="pill mt-6 text-band">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const QUIZ: Record<string, string> = {
  Mon: "Try a 'Monday regulars' double stamp for anyone who visited last week.",
  Tue: "Try a 2-for-1 coffee for guests who haven't visited in 30 days.",
  Wed: "Try a midweek set lunch offer for guests within 5km.",
  Thu: "Try a 'bring a friend' offer: both get a free dessert.",
  Fri: "Try an early-bird offer for the slow hour before the dinner rush.",
  Sat: "Try a late-afternoon tea-and-cake special between lunch and dinner.",
  Sun: "Try a Sunday-evening family special for guests with birthdays this week.",
};

function QuietQuiz() {
  const [day, setDay] = useState<string | null>(null);
  return (
    <div className="reveal rounded-2xl bg-beige p-8">
      <h3 className="text-3xl text-band">Which day is your <em>quietest</em>?</h3>
      <div className="mt-6 flex flex-wrap gap-2" role="radiogroup" aria-label="Quietest day">
        {Object.keys(QUIZ).map((d) => (
          <button key={d} role="radio" aria-checked={day === d} onClick={() => setDay(d)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${day === d ? "border-band bg-band text-cream" : "border-band/40 text-band hover:border-band"}`}>{d}</button>
        ))}
      </div>
      <p className="mt-6 min-h-12 font-serif text-xl italic" aria-live="polite">{day ? QUIZ[day] : "Pick a day for an idea."}</p>
      {day && <p className="mt-1 text-[11px] text-muted-foreground">An idea only, not a promised result.</p>}
      <a href="#apply" className="pill mt-6 text-band">Join the waitlist</a>
    </div>
  );
}

function MenuFeatures() {
  const items = [
    ["Your guest list", "Everyone who joined, in one place you own."],
    ["Stamp cards", "In their phone. Staff confirm each stamp."],
    ["Messages that fill tables", "Text the right guests at the right time."],
    ["Quiet-day offers", "Simple offers for the days that drag."],
    ["Simple results", "See sign-ups, messages and offers redeemed."],
    ["Menu and specials page", "Your menu and today's specials, one scan away."],
  ];
  return (
    <section className="bg-band px-6 py-24 text-cream md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Label className="reveal text-sage">What you get</Label>
          <h2 className="reveal mt-5 text-5xl md:text-6xl">The <em>menu</em>.</h2>
          <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {items.map(([t, d]) => (
              <li key={t} className="reveal">
                <div className="flex items-end"><span className="font-serif text-2xl italic">{t}</span><span className="leader" /><Star className="text-sage" /></div>
                <p className="mt-1 text-sm text-cream/75">{d}</p>
              </li>
            ))}
          </ul>
          <p className="reveal mt-12 font-serif text-lg italic text-sage">Coming later: wallet cards, one account across many restaurants, WhatsApp messages.</p>
        </div>
        <img src={plateOverhead} alt="An overhead plated dish with fresh herbs on a dark green surface" loading="lazy" width={1024} height={1024} className="reveal aspect-square w-full rounded-3xl object-cover" />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="relative overflow-hidden" aria-label="The problem">
      <img src={archQuiet} alt="" loading="lazy" width={768} height={1152} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-3xl px-6 py-32 text-center text-cream md:py-44">
        <h2 className="reveal text-5xl md:text-7xl">Sound <em>familiar</em>?</h2>
        <ul className="reveal mt-10 space-y-3 font-serif text-2xl md:text-3xl">
          <li>Empty tables on quiet days.</li>
          <li>Guests who visit once and disappear.</li>
          <li>Stamp cards that get lost, and offers nobody can measure.</li>
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { n: "Starter", p: "R399", d: "Your page and QR codes, stamp card, staff stamp page, menu and specials page, guest list, simple results. You send your own messages with prepaid credits." },
    { n: "Growth", p: "R1,200", d: "Everything in Starter, plus we write and send about 4 campaigns a month, target guests who haven't visited in 30 days, and send you a monthly results summary.", hot: true },
    { n: "Pro", p: "R3,000", d: "Everything in Growth, plus weekly campaigns, birthday messages, several reward offers, staff coaching and priority support." },
  ];
  return (
    <section id="pricing" className="relative overflow-hidden bg-beige px-6 py-24 md:px-12 md:py-32">
      <p aria-hidden className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[22vw] font-bold leading-none text-beige-deep">PRICING</p>
      <div className="relative mx-auto max-w-4xl">
        <Label className="reveal text-band">Pricing</Label>
        <h2 className="reveal mt-5 text-5xl text-band md:text-7xl">Simple pricing. No <em>surprises</em>.</h2>
        <p className="reveal mt-4 text-sm">Per restaurant, per month. Guests always use Patron free. <em className="text-muted-foreground">Early prices, may change before launch.</em></p>
        <div className="mt-14 space-y-4">
          {plans.map((pl) => (
            <div key={pl.n} className={`reveal rounded-2xl p-7 md:p-9 ${pl.hot ? "bg-band text-cream" : "border border-hairline"}`}>
              <div className="flex items-end">
                <h3 className="text-3xl md:text-4xl">{pl.n}</h3>
                {pl.hot && <span className="label-xs mb-2 ml-3 rounded-full bg-rust px-2.5 py-1 text-cream">Most popular</span>}
                <span className="leader" />
                <span className="font-serif text-3xl md:text-4xl">{pl.p}<span className="text-base"> / month</span></span>
              </div>
              <p className={`mt-3 max-w-2xl text-sm ${pl.hot ? "text-cream/80" : ""}`}>{pl.d}</p>
              <a href="#apply" className={`pill mt-6 ${pl.hot ? "" : "text-band"}`}>Join the waitlist</a>
            </div>
          ))}
        </div>
        <p className="reveal mt-6 font-serif text-xl italic text-band">Several branches? We'll build you a custom quote.</p>
        <div className="reveal mt-10 space-y-3 border-t border-hairline pt-8 font-serif text-lg italic">
          <p>Once-off setup from R1,000: we build your page, print your table QR cards and train your staff.</p>
          <p>Messages go out by SMS and are paid with prepaid credits, like airtime. We never message guests who haven't agreed.</p>
          {showTest && <p>Our first 2 restaurants test Patron free for 30 days in return for honest feedback and, if they're happy, a review we can share. <strong className="not-italic">{spotsText()}.</strong> <a href="#apply" className="text-rust underline">Apply for a test spot.</a></p>}
        </div>
        <Calculator />
        <p className="mt-10 text-center text-sm text-muted-foreground">Our first reviews are coming from our test restaurants.</p>
      </div>
    </section>
  );
}

function Calculator() {
  const [spend, setSpend] = useState(150);
  const [guests, setGuests] = useState(300);
  const [pct, setPct] = useState(8);
  const visits = Math.round(guests * (pct / 100) * 4.33);
  const fmt = (n: number) => "R" + Math.round(n).toLocaleString("en-ZA");
  const rows: [string, number, (v: number) => void, number, number, number, string][] = [
    ["Average spend per guest", spend, setSpend, 50, 600, 10, `R${spend}`],
    ["Guests per week", guests, setGuests, 50, 2000, 50, `${guests}`],
    ["Extra guests returning each week", pct, setPct, 1, 25, 1, `${pct}%`],
  ];
  return (
    <div className="reveal mt-16 rounded-2xl bg-cream p-8 md:p-10">
      <h3 className="text-3xl text-band md:text-4xl">What could <em>regulars</em> be worth?</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {rows.map(([l, v, set, mn, mx, st, shown]) => (
          <label key={l} className="block text-sm">
            <span className="flex justify-between"><span>{l}</span><strong>{shown}</strong></span>
            <input type="range" min={mn} max={mx} step={st} value={v} onChange={(e) => set(+e.target.value)} className="mt-3 w-full accent-[var(--band)]" />
          </label>
        ))}
      </div>
      <div className="mt-8 grid gap-4 border-t border-hairline pt-6 sm:grid-cols-3">
        <div><Label className="text-muted-foreground">Extra visits / month</Label><p className="font-serif text-4xl text-band">{visits}</p></div>
        <div><Label className="text-muted-foreground">Extra revenue / month</Label><p className="font-serif text-4xl text-band">{fmt(visits * spend)}</p></div>
        <div><Label className="text-muted-foreground">Extra revenue / year</Label><p className="font-serif text-4xl text-band">{fmt(visits * spend * 12)}</p></div>
      </div>
      <p className="mt-6 text-xs italic text-muted-foreground">Estimate only. Real results depend on your offers, your guests and your food.</p>
    </div>
  );
}

function Faq() {
  const qs: [string, string][] = [
    ["What is a message credit?", "One credit sends one SMS to one guest. You buy credits upfront, like airtime, so you only pay for what you send."],
    ["Do I need my guests' permission to message them?", "Yes. Each guest agrees to hear from your restaurant when they join. We only message people who opted in, in line with POPIA, and every message has an opt-out."],
    ["Do my guests need an app?", "No. They scan a QR code and join with their phone number."],
    ["Do I need new equipment?", "No. Staff use their own phone to confirm stamps."],
    ...(showTest ? ([["Why only 2 test restaurants first?", "We want to set up each one properly, in person, and learn from real service before we open to everyone."]] as [string, string][]) : []),
    ["When does Patron launch?", "Patron isn't live yet. We're signing our first test restaurants now. Join the waitlist and we'll tell you first."],
    ["What happens after the test?", "If it works for you, you move onto a monthly plan. If not, you walk away, no hard feelings."],
  ];
  return (
    <section className="bg-cream px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Label className="text-band">Questions</Label>
        <h2 className="mt-5 text-5xl text-band">Good <em>questions</em>.</h2>
        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {qs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl">
                {q}<span className="text-band transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apply() {
  const [tab, setTab] = useState<"waitlist" | "test">("waitlist");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const err: Record<string, string> = {};
    if (!String(f.get("restaurant")).trim()) err["restaurant"] = "What's your restaurant called?";
    if (!String(f.get("name")).trim()) err["name"] = "We'd love to know your name.";
    if (!/^[+\d\s()-]{9,}$/.test(String(f.get("phone")))) err["phone"] = "Please add a number we can reach you on.";
    if (!/^\S+@\S+\.\S+$/.test(String(f.get("email")))) err["email"] = "That email doesn't look quite right.";
    if (!f.get("consent")) err["consent"] = "Please tick this so we can contact you.";
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true);
  };

  const share = `https://wa.me/?text=${encodeURIComponent("Have a look at Patron, it helps restaurants bring guests back: " + (typeof window !== "undefined" ? window.location.origin : ""))}`;
  const field = "mt-1.5 w-full rounded-lg border border-hairline bg-cream px-4 py-3 text-sm focus:border-band focus:outline-none";
  const Err = ({ k }: { k: string }) => errors[k] ? <p className="mt-1 text-xs text-rust" role="alert">{errors[k]}</p> : null;

  return (
    <section id="apply" className="bg-cream px-6 pb-24 md:px-12">
      <div className="mx-auto max-w-3xl rounded-3xl bg-beige p-8 md:p-14">
        <h2 className="text-center text-5xl text-band md:text-7xl">Save us a <em>table</em>.</h2>
        {done ? (
          <div className="mt-10 text-center" aria-live="polite">
            <p className="font-serif text-3xl">Thank you, you're on the list.</p>
            <p className="mt-3 text-sm">We'll be in touch soon. Know another owner who'd like this?</p>
            <a href={share} target="_blank" rel="noreferrer" className="pill mt-8 text-band">Share Patron with another owner</a>
          </div>
        ) : (
          <>
            <div role="tablist" aria-label="Application type" className="mx-auto mt-10 flex w-fit rounded-full border border-band/30 p-1">
              {([["waitlist", "Join the waitlist"], ...(showTest ? [["test", `Test restaurant (${FOUNDING_SPOTS_LEFT} spot${FOUNDING_SPOTS_LEFT === 1 ? "" : "s"})`]] : [])] as [typeof tab, string][]).map(([k, l]) => (
                <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                  className={`rounded-full px-5 py-2 text-sm ${tab === k ? "bg-band text-cream" : "text-band"}`}>{l}</button>
              ))}
            </div>
            <form onSubmit={submit} noValidate className="mt-10 grid gap-5 sm:grid-cols-2">
              <input type="hidden" name="type" value={tab} />
              <label className="text-sm">Restaurant name<input name="restaurant" className={field} /><Err k="restaurant" /></label>
              <label className="text-sm">Your name<input name="name" autoComplete="name" className={field} /><Err k="name" /></label>
              <label className="text-sm">Role<select name="role" className={field}><option>Owner</option><option>Manager</option></select></label>
              <label className="text-sm">WhatsApp or phone number<input name="phone" type="tel" autoComplete="tel" className={field} /><Err k="phone" /></label>
              <label className="text-sm">Email<input name="email" type="email" autoComplete="email" className={field} /><Err k="email" /></label>
              <label className="text-sm">Type<select name="kind" className={field}>{["Café", "Casual dining", "Takeaway", "Bakery", "Higher-end", "Other"].map((o) => <option key={o}>{o}</option>)}</select></label>
              <label className="text-sm">Town or suburb<input name="town" className={field} /></label>
              <label className="text-sm">Quietest day or time<input name="quiet" placeholder="e.g. Tuesday afternoons" className={field} /></label>
              <label className="text-sm">Approx. guests per week<select name="guests" className={field}>{["Under 100", "100–300", "300–600", "600–1,000", "Over 1,000"].map((o) => <option key={o}>{o}</option>)}</select></label>
              <label className="text-sm">Which plan would suit you<select name="plan" className={field}>{["Not sure", "Starter", "Growth", "Pro"].map((o) => <option key={o}>{o}</option>)}</select></label>
              <label className="flex items-start gap-3 text-sm sm:col-span-2">
                <input type="checkbox" name="consent" className="mt-1 accent-[var(--band)]" />
                <span>You may contact me about Patron (POPIA).<Err k="consent" /></span>
              </label>
              <button type="submit" className="rounded-full bg-band px-8 py-4 text-sm text-cream transition hover:bg-ink sm:col-span-2">
                {tab === "test" ? "Apply for a test spot" : "Join the waitlist"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-beige px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-5xl text-band md:text-7xl">Let's <em>talk</em>.</h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <div><Label className="text-muted-foreground">WhatsApp</Label><p className="mt-2 font-serif text-2xl">{WHATSAPP_DISPLAY}</p><a href={WA_LINK} target="_blank" rel="noreferrer" className="pill mt-4 text-band">Message us</a></div>
          <div><Label className="text-muted-foreground">Cell</Label><a href={`tel:${CELL_NUMBER.replace(/\s/g, "")}`} className="mt-2 block font-serif text-2xl hover:text-band">{CELL_NUMBER}</a></div>
          <div><Label className="text-muted-foreground">Email</Label><a href={`mailto:${EMAIL}`} className="mt-2 block font-serif text-2xl hover:text-band">{EMAIL}</a></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const m = "PATRON ✺ BRING GUESTS BACK ✺ FILL QUIET HOURS ✺ ";
  return (
    <footer className="overflow-hidden bg-ink text-cream">
      <div className="overflow-hidden border-y border-cream/10 py-3">
        <div className="animate-marquee flex w-max whitespace-nowrap label-xs">{m.repeat(12)}</div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 text-sm sm:grid-cols-2 md:grid-cols-4 md:px-12">
        <div><Label className="text-sage">Social</Label><a href={INSTAGRAM} className="mt-3 block underline-offset-2 hover:underline">Instagram</a><a href={FACEBOOK} className="block underline-offset-2 hover:underline">Facebook</a></div>
        <div><Label className="text-sage">Contact</Label><a href={`mailto:${EMAIL}`} className="mt-3 block">{EMAIL}</a><a href={WA_LINK} className="block">WhatsApp</a></div>
        <div><Label className="text-sage">Area served</Label><p className="mt-3">Starting in Johannesburg, Gauteng.<br />Made in Joburg.</p></div>
        <div><Label className="text-sage">Links</Label><Link to="/privacy" className="mt-3 block">Privacy Policy</Link><Link to="/terms" className="block">Terms</Link></div>
      </div>
      <p className="px-6 pb-4 text-center text-xs text-cream/50">© 2026 Patron. All rights reserved.</p>
      <p aria-hidden className="-mb-[4vw] text-center font-display text-[20vw] font-bold leading-none tracking-[0.15em] text-cream/5">PATRON</p>
    </footer>
  );
}

function ScrollStampCard() {
  const [n, setN] = useState(0);
  const total = 8;
  const ref = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const v = Math.min(total, Math.round((window.scrollY / Math.max(1, max)) * total));
      if (v !== ref.current) { ref.current = v; setN(v); }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="#apply" className="fixed bottom-5 left-5 z-40 hidden w-44 rounded-xl border border-hairline bg-cream/95 p-3 shadow-lg backdrop-blur lg:block" aria-label="Your stamp card: go to the waitlist form">
      <p className="label-xs text-band">Your stamp card</p>
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className={`grid aspect-square place-items-center rounded-full border text-[10px] transition ${i < n ? "border-band bg-band text-cream" : "border-hairline"}`}>{i < n ? "✺" : ""}</span>
        ))}
      </div>
      <p className="mt-2 text-[10px] leading-tight">{n >= total ? "Last stamp: join the waitlist" : "Scroll to collect stamps"}</p>
    </a>
  );
}
