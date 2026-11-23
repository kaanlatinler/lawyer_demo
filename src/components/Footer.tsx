import { FIRM_INFO } from "@/data/lawFirmData";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-[#141413] text-[#F9F8F6] pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-b border-stone-800 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl font-semibold tracking-tight">
              {FIRM_INFO.name}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">
              Türkiye Barolar Birliği Meslek Kuralları ve Reklam Yasağı
              Yönetmeliği uyarınca yalnızca bilgilendirme amacıyla
              hazırlanmıştır.
            </p>
          </div>

          <div className="space-y-2 text-sm md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C6D46] mb-3">
              Merkez Ofis
            </p>
            <p className="text-stone-300">{FIRM_INFO.address}</p>
            <p className="text-stone-300 pt-2">{FIRM_INFO.phone}</p>
            <p className="text-stone-300">{FIRM_INFO.email}</p>
          </div>

          <div className="space-y-2 text-sm md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C6D46] mb-3">
              Çalışma Düzeni
            </p>
            <p className="text-stone-300">{FIRM_INFO.workingHours}</p>
            <p className="text-stone-500 text-xs pt-2">
              Görüşmeler randevu esasına göre gerçekleştirilmektedir.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <span>© 2026 {FIRM_INFO.name} Hukuk Bürosu.</span>
          <span>Tüm Hakları Saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
