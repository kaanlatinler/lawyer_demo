export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Lawyer {
  id: string;
  name: string;
  title: string;
  specialty: string;
  barNumber: string;
  image: string;
}

export const FIRM_INFO = {
  name: "KAYA & PARTNERS",
  subtitle: "Hukuk & Danışmanlık Bürosu",
  phone: "+90 (242) 555 01 92",
  email: "info@kayapartners.av.tr",
  address: "Meltem Mah. Adalet Bulvarı No: 42/8 Muratpaşa / Antalya",
  workingHours: "Pazartesi - Cuma: 09:00 - 18:30",
};

export const STATS = [
  { label: "Yıllık Tecrübe", value: "18+" },
  { label: "Sonuçlanan Dava", value: "1.450+" },
  { label: "Kurumsal Müvekkil", value: "120+" },
  { label: "Müvekkil Memnuniyeti", value: "%98" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "ticaret-hukuku",
    title: "Ticaret ve Şirketler Hukuku",
    description: "Şirket kuruluşları, birleşme ve devralmalar, ticari sözleşmelerin hazırlanması ve kurumsal danışmanlık.",
    iconName: "Building2",
    details: ["Sözleşme Yönetimi", "Şirket Birleşmeleri", "Haksız Rekabet Davaları"],
  },
  {
    id: "gayrimenkul-hukuku",
    title: "Gayrimenkul ve İnşaat Hukuku",
    description: "Tapu iptal ve tescil davaları, kat karşılığı inşaat sözleşmeleri, kira tespit ve tahliye süreçleri.",
    iconName: "Landmark",
    details: ["Tapu Davaları", "Kentsel Dönüşüm", "Kira & Tahliye"],
  },
  {
    id: "ceza-hukuku",
    title: "Ceza Hukuku",
    description: "Soruşturma ve kovuşturma aşamalarında etkin savunma, ağır ceza ve asliye ceza davaları takibi.",
    iconName: "Scale",
    details: ["Ağır Ceza Davaları", "Ekonomik Suçlar", "Soruşturma Danışmanlığı"],
  },
  {
    id: "is-hukuku",
    title: "İş ve Sosyal Güvenlik Hukuku",
    description: "İşe iade davaları, kıdem ve ihbar tazminatı hesaplamaları, işveren ve çalışan uyuşmazlıkları.",
    iconName: "Briefcase",
    details: ["İşe İade", "Tazminat Davaları", "İK Uyum Süreçleri"],
  },
  {
    id: "bilisim-hukuku",
    title: "Bilişim ve KVKK Hukuku",
    description: "Kişisel verilerin korunması uyum süreçleri, e-ticaret hukuku ve siber suçlarla mücadele.",
    iconName: "ShieldCheck",
    details: ["KVKK Uyum", "E-Ticaret Mevzuatı", "Dijital Marka Koruma"],
  },
  {
    id: "aile-hukuku",
    title: "Aile ve Miras Hukuku",
    description: "Anlaşmalı ve çekişmeli boşanma davaları, mal rejimi tasfiyesi, vasiyetname ve miras paylaşımı.",
    iconName: "Users",
    details: ["Boşanma & Velayet", "Mal Paylaşımı", "Miras Hukuku"],
  },
];

export const TEAM: Lawyer[] = [
  {
    id: "1",
    name: "Av. Ahmet Kaya",
    title: "Kurucu Ortak",
    specialty: "Ticaret & Gayrimenkul Hukuku",
    barNumber: "Antalya Barosu - 4120",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Av. Zeynep Arslan",
    title: "Kıdemli Ortak",
    specialty: "Ceza & Bilişim Hukuku",
    barNumber: "Antalya Barosu - 5892",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Av. Mert Demir",
    title: "Yönetici Avukat",
    specialty: "İş & Sosyal Güvenlik Hukuku",
    barNumber: "Antalya Barosu - 6340",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];