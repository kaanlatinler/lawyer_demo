"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRACTICE_AREAS } from "@/data/lawFirmData";

export default function PracticeAreas() {
  return (
    <section id="uzmanliklar" className="border-b border-stone-300 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-800">
              Uzmanlık İndeksi
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 sm:text-5xl">
              Çalışma Alanlarımız
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Her dosya, ilgili hukuk dalında uzmanlaşmış ortak avukatlarımızın
              doğrudan gözetiminde yürütülür.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion
              defaultValue={[PRACTICE_AREAS[0].id]}
              className="border-t border-stone-300"
            >
              {PRACTICE_AREAS.map((area, index) => (
                <AccordionItem
                  key={area.id}
                  value={area.id}
                  className="border-b border-stone-300 py-2"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left">
                    <div className="flex items-baseline gap-6">
                      <span className="font-serif text-base italic text-amber-800">
                        0{index + 1}.
                      </span>
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-stone-900">
                        {area.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12 pr-4 pb-6 text-stone-600">
                    <p className="text-sm leading-relaxed">
                      {area.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {area.details.map((item) => (
                        <span
                          key={item}
                          className="border border-stone-300 bg-white px-3 py-1 text-xs text-stone-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
