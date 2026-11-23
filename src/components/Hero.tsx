import { ArrowUpRight } from "lucide-react";
import { STATS } from "@/data/lawFirmData";

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="hakkimizda" className="border-b border-stone-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12">
          {/* Sol Tipografi Alanı */}
          <div className="py-16 lg:col-span-7 lg:border-r lg:border-stone-300 lg:py-24 lg:pr-12">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8C6D46]">
              <span className="h-[1px] w-8 bg-[#8C6D46]" />
              <span>Antalya & İstanbul • Kuruluş 2008</span>
            </div>

            <h1 className="mt-8 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-[#141413] sm:text-6xl">
              Ticari ve Hukuki Uyuşmazlıklarda Stratejik Temsil.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-stone-600">
              Kaya & Partners; şirketler hukuku, gayrimenkul yatırımları ve ağır
              ceza yargılamalarında önleyici hukuk disipliniyle hareket eden
              bağımsız bir hukuk bürosudur.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center gap-3 bg-[#141413] px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#F9F8F6] transition hover:bg-[#8C6D46]"
              >
                <span>Hukuki Görüşme Talep Et</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="#uzmanliklar"
                className="border-b border-[#141413] pb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#141413] transition hover:text-[#8C6D46] hover:border-[#8C6D46]"
              >
                Faaliyet Alanlarını İncele
              </a>
            </div>
          </div>

          {/* Sağ Görsel ve Metrik Alanı */}
          <div className="flex flex-col justify-between py-12 lg:col-span-5 lg:py-24 lg:pl-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
                alt="Hukuk Kütüphanesi ve Büro"
                className="h-full w-full object-cover grayscale contrast-110 transition duration-700 hover:grayscale-0"
              />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-y-8 border-t border-stone-300 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-semibold text-[#141413]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-stone-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
