import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-ink px-6 py-5 text-center text-cream">
        <Link to="/" className="font-display text-lg font-semibold tracking-[0.45em]">PATRON</Link>
      </header>
      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-5xl text-band">{title}</h1>
        <p className="mt-2 text-xs text-muted-foreground">Draft text. To be reviewed before launch.</p>
        <div className="mt-10 space-y-5 text-sm leading-relaxed">{children}</div>
        <Link to="/" className="pill mt-12 text-band">Back home</Link>
      </main>
    </div>
  );
}
