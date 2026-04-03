"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";

export default function VideoCreatorLandingPage() {
  const reels = [
    {
      title: "Cobertura de evento",
      description: "Captação dinâmica e cortes com ritmo para gerar impacto imediato.",
      embed: "https://www.instagram.com/vinifreitaslivemusic/reel/DWH3ltKiKF5/embed",
    },
    {
      title: "Post flash",
      description: "Entrega rápida para aproveitar o hype enquanto o evento ainda está quente.",
      embed: "https://www.instagram.com/vinifreitaslivemusic/reel/DWH3ltKiKF5/embed",
    },
    {
      title: "Conteúdo de marca",
      description: "Visual premium para fortalecer presença e percepção de valor.",
      embed: "https://www.instagram.com/vinifreitaslivemusic/reel/DWH3ltKiKF5/embed",
    },
    {
      title: "Vídeo de impacto",
      description: "Edição estratégica para prender atenção e aumentar retenção.",
      embed: "https://www.instagram.com/vinifreitaslivemusic/reel/DWH3ltKiKF5/embed",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.10),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(0,170,255,0.12),transparent_24%),radial-gradient(circle_at_bottom,rgba(0,255,170,0.08),transparent_30%)]" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emerald-300 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              DG.rec Event Media
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-none sm:text-6xl lg:text-7xl">
              Transformando
              <span className="mt-2 block text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text">
                eventos em conteúdo.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Captação, edição e criação de conteúdo para eventos, marcas e negócios que querem presença forte, estética premium e impacto real no digital.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/351933837256" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]"
              >
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/dg.recoficial/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:border-emerald-400/30 hover:bg-white/10"
              >
                Ver Instagram
              </a>
            </div>

            <div className="mt-4 flex w-full gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
              {[
                { title: "Captação", desc: "Eventos" },
                { title: "Post Flash", desc: "Alta velocidade" },
                { title: "Estética", desc: "Premium" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="min-w-[180px] rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition hover:border-emerald-400/30 hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-white/90">{item.title}</p>
                  <p className="mt-1 text-xs text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-emerald-400/30 via-cyan-400/20 to-emerald-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
              <img
                src="/douglas.jpg"
                alt="Douglas Freitas"
                className="h-[580px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <motion.div
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-6 top-6 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/90">Douglas Freitas</p>
                <p className="mt-2 text-2xl font-bold sm:text-3xl">DG.rec</p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">
                  Conteúdo estratégico + produção audiovisual para transformar presença em percepção de valor.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">Quem sou eu</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Douglas Freitas</h2>
            <p className="mt-2 font-medium text-emerald-400">Vulgo DG</p>

            <div className="mt-8 space-y-4 text-white/75">
              {[
                "🎬 Editor & Videomaker",
                "🚀 CEO da DG.rec",
                "⚡ Conteúdo estratégico + produção audiovisual",
                "📈 Foco em visibilidade, autoridade e impacto digital",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:col-span-1">
              <p className="text-sm text-white/50">01</p>
              <h3 className="mt-3 text-lg font-semibold">Captação</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Registro profissional com olhar criativo, energia e presença visual forte.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:col-span-1">
              <p className="text-sm text-white/50">02</p>
              <h3 className="mt-3 text-lg font-semibold">Edição</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Ritmo, estética e narrativa para transformar cenas em conteúdo memorável.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:col-span-1">
              <p className="text-sm text-white/50">03</p>
              <h3 className="mt-3 text-lg font-semibold">Post Flash</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Entrega rápida para colocar sua marca no ar enquanto o público ainda está vivendo o momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-y border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/30">
            <h3 className="font-semibold">Alta retenção</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Conteúdos pensados para prender atenção desde os primeiros segundos.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30">
            <h3 className="font-semibold">Estética premium</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Visual moderno e cinematográfico para valorizar a sua imagem e a sua marca.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/30">
            <h3 className="font-semibold">Velocidade</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Entrega ágil para aproveitar o hype do evento e gerar presença no timing certo.</p>
          </div>
        </div>
      </section>

   {/* REELS
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">Portfólio</p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Alguns trabalhos recentes</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                Um recorte rápido do meu estilo de captação, edição e entrega. Troque os links abaixo pelos seus reels reais.
              </p>
            </div>

            <a
              href="https://instagram.com/dgrecoficial"
              className="inline-flex items-center gap-2 self-start rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-emerald-400/30 hover:bg-white/10"
            >
              Ver mais no Instagram
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group min-w-[290px] snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] sm:min-w-[340px]"
              >
                <div className="relative border-b border-white/10 bg-black">
                  <iframe
                    src={reel.embed}
                    title={reel.title}
                    className="h-[500px] w-full"
                    frameBorder="0"
                    scrolling="no"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-t-[2rem] ring-1 ring-inset ring-white/5 transition group-hover:ring-emerald-400/20" />

                  <div className="pointer-events-none absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/90 backdrop-blur transition group-hover:scale-110 group-hover:border-emerald-400/30 group-hover:text-emerald-300">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">{reel.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/60">{reel.description}</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                      Reel
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-emerald-400">Vamos trabalhar juntos</p>
          <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Bora criar algo forte?</h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Me chama e vamos transformar seu evento ou marca em conteúdo que realmente chama atenção, gera percepção de valor e marca presença no digital.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/351933837256" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:douglashvf13@gmail.com" target="_blank" rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 transition hover:bg-white/10"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}