import { TEAM } from "@/data/lawFirmData";

export default function TeamSection() {
  return (
    <section id="ekibimiz" className="border-b border-stone-300 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D46]">
            Ortaklar & Kadro
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#141413] sm:text-5xl">
            Hukuk Ekibimiz
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article key={member.id} className="group">
              <div className="aspect-[3/4] w-full overflow-hidden bg-stone-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between border-b border-stone-300 pb-3">
                <h3 className="font-serif text-2xl font-semibold text-[#141413]">
                  {member.name}
                </h3>
                <span className="text-xs uppercase tracking-wider text-[#8C6D46]">
                  {member.title}
                </span>
              </div>
              <p className="mt-3 text-sm text-stone-700">{member.specialty}</p>
              <p className="mt-1 text-xs text-stone-500">{member.barNumber}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
