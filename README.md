# Kaya & Partners — Hukuk & Danışmanlık Bürosu Web Platformu

Kurumsal ve bireysel hukuk danışmanlığı sunan hukuk büroları için **Next.js App Router**, **Tailwind CSS** ve **shadcn/ui (Base UI)** mimarisiyle geliştirilmiş modern, editoryal tasarımlı web uygulaması demosu.

---

## Özellikler

- **Editoryal Kurumsal Arayüz:** Yüksek kontrastlı fildişi (`#F9F8F6`) ve derin antrasit (`#141413`) renk paleti, serif tipografi ve keskin mimari ızgara düzeni.
- **Açılış Perde Animasyonu (`PageLoader`):** `motion` kütüphanesi ile sayfa ilk yüklendiğinde devreye giren akıcı kurumsal açılış ekranı.
- **Animasyonlu Ön Görüşme Çekmecesi (`ContactSheet`):** `shadcn/ui` `Sheet` bileşeni ile sağdan kayarak açılan, erişilebilir randevu ve ön görüşme talep formu.
- **İnteraktif Uzmanlık İndeksi (`PracticeAreas`):** Numaralandırılmış departman yapısına sahip açılır/kapanır (`Accordion`) çalışma alanları sunumu.
- **Merkezi Statik Veri Katmanı:** Tüm içeriklerin (`FIRM_INFO`, `STATS`, `PRACTICE_AREAS`, `TEAM`) tek bir TypeScript dosyasından yönetildiği, veritabanı (PostgreSQL/Prisma) entegrasyonuna hazır veri yapısı.
- **Server Component Optimizasyonu:** Dinamik tarih ve statik bölümlerin sunucu tarafında render edildiği performanslı sayfa mimarisi.

---

## Teknoloji Yığını

- **Framework:** Next.js (App Router) & React
- **Dil:** TypeScript
- **Stil:** Tailwind CSS v4
- **UI Bileşenleri:** shadcn/ui (`@base-ui/react` tabanlı)
- **Animasyon:** Motion (`motion/react`)
- **İkon Seti:** Lucide React

---

## Proje Yapısı

```text
src/
├── app/
│   ├── globals.css                # Tailwind v4 yapılandırması ve temel tema kuralları
│   ├── layout.tsx                 # Cormorant Garamond & Inter font tanımları ve kök düzen
│   └── page.tsx                   # Ana sayfa bileşen birleşimi
├── components/
│   ├── ui/                        # shadcn/ui temel bileşenleri (Sheet, Accordion, Button vb.)
│   ├── ContactSheet.tsx           # Sağdan açılan animasyonlu ön görüşme talep çekmecesi
│   ├── Footer.tsx                 # Kurumsal iletişim ve TBB yasal bilgilendirme alanı
│   ├── Hero.tsx                   # Asimetrik giriş alanı ve büro istatistikleri
│   ├── Navbar.tsx                 # Sabit (sticky) navigasyon çubuğu
│   ├── PageLoader.tsx             # Sayfa açılış perde animasyonu
│   ├── PracticeAreas.tsx          # Açılır liste formatında uzmanlık alanları
│   └── TeamSection.tsx            # Ortaklar ve avukat kadrosu vitrini
└── data/
    └── lawFirmData.ts             # Büro bilgileri, istatistikler, uzmanlıklar ve ekip verileri
```
