'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const secondaryRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tensão prévia: delay deliberado de 0.8s antes de surgir a primeira palavra
      const tl = gsap.timeline({
        delay: 0.8,
        defaults: { ease: 'expo.out' },
      });

      tl.fromTo(pillRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }
      )
      .fromTo(title1Ref.current,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.3 },
        '-=0.5'
      )
      .fromTo(title2Ref.current,
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.3 },
        '-=0.9'
      )
      .fromTo(leadRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo(secondaryRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo(actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(trustRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(cardRef.current,
        { opacity: 0, scale: 0.96, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'expo.out' },
        '-=1.0'
      )
      .fromTo(scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        '-=0.5'
      );

      // Scroll indicator que some ao descer
      gsap.to(scrollIndicatorRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=200',
          scrub: 1.0,
        },
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 bg-ivory-page overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-light z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Headline e Ações */}
          <div className="lg:col-span-7">
            <div
              ref={pillRef}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-petrol-soft text-petrol-deep text-xs font-semibold border border-petrol-base/15 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>NG Teleconsulta • Atendimento Online</span>
            </div>

            <h1 className="font-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-petrol-deep leading-[1.08] mb-6">
              <span ref={title1Ref} className="block">Cuidado de enfermagem</span>
              <span ref={title2Ref} className="block text-gold-warm">em cada fase da vida.</span>
            </h1>

            <p ref={leadRef} className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed mb-3 max-w-xl">
              Orientação profissional, acolhedora e individualizada para você e sua família, onde estiver.
            </p>

            <p ref={secondaryRef} className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
              Por meio da NG Teleconsulta, você recebe orientação de enfermagem com mais praticidade, clareza e segurança.
            </p>

            <div ref={actionsRef} className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-petrol-deep hover:bg-petrol-base text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 hover:border-petrol-deep text-petrol-deep text-base font-semibold transition-all duration-300 hover:bg-petrol-deep/5 hover:-translate-y-0.5"
              >
                <span>Conhecer o consultório</span>
              </a>
            </div>

            <div ref={trustRef} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
              <span>Atendimento online</span>
              <span className="text-gold-warm font-bold">/</span>
              <span>Cuidado humanizado</span>
              <span className="text-gold-warm font-bold">/</span>
              <span>Orientação profissional</span>
            </div>
          </div>

          {/* Lado Direito: Card Panorâmico da Enfermeira */}
          <div ref={cardRef} className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-petrol-deep/10 bg-white group transition-all duration-500 hover:shadow-hover">
              <div className="relative aspect-[4/4.8] w-full overflow-hidden">
                <Image
                  src="/natali-garcia.jpg"
                  alt="Enfª Natali Garcia - Atendimento NG Consultório"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-deep/90 via-petrol-deep/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-end justify-between">
                  <div>
                    <span className="block text-xs font-semibold text-gold-warm uppercase tracking-wider mb-1">
                      Responsável Técnica
                    </span>
                    <strong className="block font-title text-2xl font-bold">
                      Enfª Natali Garcia
                    </strong>
                    <p className="text-xs text-white/90 mt-1 max-w-[260px]">
                      Orientação de enfermagem individualizada para você e sua família.
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                    NG Consultório
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-slate-400 font-medium uppercase tracking-wider"
      >
        <span>Desça para explorar</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-petrol-deep animate-bounce" />
        </div>
      </div>
    </section>
  );
}
