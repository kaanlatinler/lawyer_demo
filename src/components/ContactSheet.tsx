"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRACTICE_AREAS, FIRM_INFO } from "@/data/lawFirmData";

export function ContactSheet({
  triggerLabel = "Randevu Al",
  variant = "default",
}: {
  triggerLabel?: string;
  variant?: "default" | "outline";
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button
          variant={variant}
          className="rounded-none uppercase tracking-[0.16em] text-xs h-11 px-6 gap-2 cursor-pointer"
        >
          <span>{triggerLabel}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg bg-[#F9F8F6] text-stone-900 border-stone-300 p-6 sm:p-10 overflow-y-auto">
        <SheetHeader className="border-b border-stone-300 pb-6 text-left">
          <span className="text-[11px] uppercase tracking-[0.25em] text-amber-800">
            Müvekkil İletişim Masası
          </span>
          <SheetTitle className="font-serif text-3xl font-semibold text-stone-900">
            Ön Görüşme Talebi
          </SheetTitle>
          <SheetDescription className="text-stone-600">
            Hukuki süreciniz hakkında kısa bilgi bırakın, ilgili departman ortağımız dönüş sağlasın.
          </SheetDescription>
        </SheetHeader>

        {submitted ? (
          <div className="py-24 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center bg-stone-900 text-white">
              <Check className="h-5 w-5" />
            </div>
            <h4 className="mt-6 font-serif text-2xl font-semibold">
              Talebiniz Kayda Alındı
            </h4>
            <p className="mt-2 text-sm text-stone-600">
              En kısa sürede tarafınıza dönüş yapılacaktır.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-stone-600">
                Ad Soyad / Kurum
              </Label>
              <Input
                id="name"
                required
                placeholder="Mehmet Yılmaz"
                className="rounded-none border-stone-300 bg-white focus-visible:ring-stone-900"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-stone-600">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="05XX XXX XX XX"
                  className="rounded-none border-stone-300 bg-white focus-visible:ring-stone-900"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-stone-600">
                  Çalışma Alanı
                </Label>
                <Select defaultValue={PRACTICE_AREAS[0].id}>
                  <SelectTrigger className="rounded-none border-stone-300 bg-white">
                    <SelectValue placeholder="Alan seçin" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {PRACTICE_AREAS.map((area) => (
                      <SelectItem key={area.id} value={area.id}>
                        {area.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary" className="text-xs uppercase tracking-wider text-stone-600">
                Uyuşmazlık Özeti
              </Label>
              <Textarea
                id="summary"
                rows={4}
                required
                placeholder="Konuyu kısaca özetleyiniz..."
                className="rounded-none border-stone-300 bg-white focus-visible:ring-stone-900"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-none bg-stone-900 hover:bg-stone-800 text-stone-50 uppercase tracking-[0.2em] text-xs h-12 cursor-pointer"
            >
              Talebi Gönder
            </Button>
          </form>
        )}

        <div className="mt-10 border-t border-stone-300 pt-4 flex justify-between text-xs text-stone-500">
          <span>{FIRM_INFO.phone}</span>
          <span>Gizlilik Esasına Tabidir</span>
        </div>
      </SheetContent>
    </Sheet>
  );
}