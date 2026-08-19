"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/lib/faq";

/**
 * FAQ v4 — titre + CTA pastilles à gauche, rangées arrondies à droite
 * (référence template).
 */
export function FaqSaas() {
  const [open, setOpen] = useState<number | null>(0);
  const items = FAQ_ITEMS.slice(0, 6);

  return (
    <section id="faq" className="bg-paper pb-24 lg:pb-36">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-20">
        <div>
          <p className="text-sm font-medium text-slate-600">
            Frequently asked questions
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-abyss-950 sm:text-5xl">
            Everything you need to know
          </h2>
          <p className="mt-4 text-body-l text-slate-600">
            Can&apos;t find the answer you&apos;re looking for? Reach out!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/essai"
              className="rounded-full bg-abyss-950 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-abyss-900"
            >
              Start for free
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-mist-100 px-6 py-3 text-sm font-medium text-abyss-950 transition-colors hover:bg-mist-200"
            >
              Contact support
            </Link>
          </div>
        </div>

        <ul className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="overflow-hidden rounded-2xl bg-mist-100/80">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-saas-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-body font-medium text-abyss-950"
                >
                  {item.q}
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className={cn(
                      "size-4 shrink-0 text-slate-600 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  >
                    <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div id={`faq-saas-${i}`} hidden={!isOpen} className="px-6 pb-6">
                  <p className="max-w-2xl text-body text-slate-600">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
