"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FIRM_INFO } from "@/data/lawFirmData";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Büro Profili", href: "#hakkimizda" },
    { name: "Çalışma Alanları", href: "#uzmanliklar" },
    { name: "Ortaklar", href: "#ekibimiz" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-300/80 bg-[#F9F8F6]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="group flex items-baseline gap-3">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#141413]">
            {FIRM_INFO.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.22em] text-stone-500">
            Hukuk Bürosu
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.16em] text-stone-600 transition hover:text-[#141413]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center gap-2 border border-[#141413] bg-[#141413] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#F9F8F6] transition hover:bg-transparent hover:text-[#141413]"
          >
            <span>Randevu Al</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-[#141413] md:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-300 bg-[#F9F8F6] px-6 py-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs font-medium uppercase tracking-[0.18em] text-stone-700"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenModal();
              }}
              className="mt-2 w-full bg-[#141413] py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#F9F8F6]"
            >
              Randevu Al
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
