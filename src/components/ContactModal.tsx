"use client";

import { useEffect, useState } from "react";
import { X, ArrowUpRight, Check } from "lucide-react";
import { PRACTICE_AREAS, FIRM_INFO } from "@/data/lawFirmData";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Yavaşça kararan arka plan */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#141413]/55 backdrop-blur-[2px] animate-backdrop"
      />

      {/* Sağdan kayarak gelen panel */}
      <div className="relative z-10 flex h-full w-full max-w-xl flex-col justify-between overflow-y-auto bg-[#F9F8F6] p-8 sm:p-12 text-[#141413] shadow-2xl animate-drawer border-l border-stone-300">
        <div>
          <div className="flex items-center justify-between border-b border-stone-300 pb-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D46]">
                Müvekkil İletişim Masası
              </span>
              <h3 className="mt-1 font-serif text-3xl font-semibold">
                Ön Görüşme Talebi
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Kapat"
              className="flex h-10 w-10 items-center justify-center border border-stone-300 text-stone-700 transition hover:bg-[#141413] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {submitted ? (
            <div className="py-24 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#141413] bg-[#141413] text-white">
                <Check className="h-5 w-5" />
              </div>
              <h4 className="mt-6 font-serif text-2xl font-semibold">
                Başvurunuz Kayda Alındı
              </h4>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-stone-600">
                İlgili departman ortağımız dosya ön incelemesini tamamladıktan
                sonra tarafınıza dönüş sağlayacaktır.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500">
                  Ad Soyad / Kurum Unvanı
                </label>
                <input
                  required
                  type="text"
                  placeholder="Mehmet Yılmaz"
                  className="mt-2 w-full border-b border-stone-400 bg-transparent py-2.5 text-sm text-[#141413] placeholder:text-stone-400 focus:border-[#141413] focus:outline-none"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500">
                    Telefon Numarası
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+90 (5XX) XXX XX XX"
                    className="mt-2 w-full border-b border-stone-400 bg-transparent py-2.5 text-sm text-[#141413] placeholder:text-stone-400 focus:border-[#141413] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500">
                    Hukuki Alan
                  </label>
                  <select className="mt-2 w-full border-b border-stone-400 bg-transparent py-2.5 text-sm text-[#141413] focus:border-[#141413] focus:outline-none">
                    {PRACTICE_AREAS.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500">
                  Uyuşmazlık / Talep Özeti
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hukuki sürecinizi kısaca özetleyiniz..."
                  className="mt-2 w-full border border-stone-300 bg-white/60 p-3.5 text-sm text-[#141413] placeholder:text-stone-400 focus:border-[#141413] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-between bg-[#141413] px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#F9F8F6] transition hover:bg-[#8C6D46]"
              >
                <span>Talebi İlet</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 border-t border-stone-300 pt-6 text-xs text-stone-500 flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>Doğrudan Hat: {FIRM_INFO.phone}</span>
          <span>Gizlilik Esasına Tabidir</span>
        </div>
      </div>
    </div>
  );
}
