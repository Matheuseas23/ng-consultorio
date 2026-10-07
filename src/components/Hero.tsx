'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const telemetryBadgeRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const leadTextRef = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const secondaryRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Tensão cinematográfica: Inicialmente tudo oculto por 0.8s
      // O overlay escuro respira e abre suavemente
      gsap.fromTo(
        videoOverlayRef.current,
        { opacity: 0.98 },
        { opacity: 0.78, duration: 1.8, ease: 'power3.inOut' }
      );

      // 2. Timeline principal de reveal com respiração e tensão dramática
      // Tensão prévia: delay deliberado de 0.8s antes de surgir a primeira palavra
      const tl = gsap.timeline({
        delay: 0.8,
        defaults: { ease: 'expo.out' },
        delay: 0.85, // Pausa dramática deliberada antes do primeiro caractere surgir
      });

      // Telemetria inicial
      tl.fromTo(
        telemetryBadgeRef.current,
        { opacity: 0, y: -20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' }
      );

      // Título principal - Linha 1 (Revelação cinematográfica lenta e imponente)
      tl.fromTo(
        titleLine1Ref.current,
        { opacity: 0, y: 50, letterSpacing: '0.08em', filter: 'blur(10px)' },
        { opacity: 1, y: 0, letterSpacing: '0.02em', filter: 'blur(0px)', duration: 1.4 },
      tl.fromTo(pillRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }
      )
      .fromTo(title1Ref.current,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.3 },
        '-=0.5'
      );

      // Título principal - Linha 2 em destaque Ciano Neon
      tl.fromTo(
        titleLine2Ref.current,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4 },
        '-=1.0'
      );

      // Texto de apoio (Lead text)
      tl.fromTo(
        leadTextRef.current,
      )
      .fromTo(title2Ref.current,
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.3 },
        '-=0.9'
      )
      .fromTo(leadRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.8'
      );

      // Botões de Ação
      tl.fromTo(
        actionsRef.current,
        '-=0.7'
      )
      .fromTo(secondaryRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        '-=0.7'
      );

      // Telemetria inferior / Indicadores de precisão clínica
      tl.fromTo(
        statsRowRef.current,
      )
      .fromTo(actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(trustRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power3.out' },
        { opacity: 1, duration: 1.1, ease: 'power3.out' },
        '-=0.6'
      );

      // Scroll Indicator surgindo suavemente
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -15 },
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

      // 3. Scroll Indicator desaparece ao descer a página (ScrollTrigger)
      // Scroll indicator que some ao descer
      gsap.to(scrollIndicatorRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          trigger: heroRef.current,
          start: 'top top',
          end: '+=220',
          end: '+=200',
          scrub: 1.0,
        },
        opacity: 0,
        y: 40,
        y: 30,
        ease: 'power3.out',
      });
    }, containerRef);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-abyss-950 pt-28 pb-8 px-4 sm:px-6 lg:px-8"
      id="inicio"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 bg-ivory-page overflow-hidden"
    >
      {/* Background Video Cinematográfico em Loop */}
      {/* Vídeo em Loop no Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 filter brightness-[0.7] contrast-[1.15]"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 filter contrast-105"
        src="/hero-bg.mp4"
      />
      <div className="absolute inset-0 bg-radial-light z-0 pointer-events-none" />

      {/* Camadas Abissais de Atmosfera & Gradiente Blueprint */}
      <div
        ref={videoOverlayRef}
        className="absolute inset-0 z-10 bg-gradient-to-t from-abyss-950 via-abyss-950/80 to-abyss-950/70"
      />
      <div className="absolute inset-0 z-10 blueprint-grid opacity-70 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,11,18,0.75)_100%)] pointer-events-none" />
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

      {/* Linhas de Telemetria Decorativa do Cockpit */}
      <div className="absolute top-24 left-8 right-8 z-10 hidden md:flex items-center justify-between text-[10px] font-mono text-neon/40 pointer-events-none">
        <div className="flex items-center gap-2">
          <span>LAT_BR // -23.5505</span>
          <span className="w-12 h-[1px] bg-neon/30" />
          <span>FREQ: 433.92 MHz</span>
        </div>
        <div className="flex items-center gap-2">
          <span>STANDARDS // COFEN RESOLUTION</span>
          <span className="w-12 h-[1px] bg-neon/30" />
          <span>SYS_ID: #NG-2026-MED</span>
        </div>
      </div>
            <h1 className="font-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-petrol-deep leading-[1.08] mb-6">
              <span ref={title1Ref} className="block">Cuidado de enfermagem</span>
              <span ref={title2Ref} className="block text-gold-warm">em cada fase da vida.</span>
            </h1>

      {/* Conteúdo Central Monumental */}
      <div className="relative z-20 max-w-5xl mx-auto my-auto w-full text-center flex flex-col items-center">
        {/* Status Pill / HUD Kicker */}
        <div
          ref={telemetryBadgeRef}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-neon/30 bg-abyss-900/80 backdrop-blur-hud mb-6 relative group"
        >
          <span className="corner-bracket corner-tl" />
          <span className="corner-bracket corner-br" />
          <span className="w-2 h-2 rounded-full bg-neon animate-ping opacity-75" />
          <span className="w-2 h-2 rounded-full bg-neon -ml-4" />
          <span className="font-mono text-xs text-neon tracking-widest uppercase">
            NG Teleconsulta • Atendimento Individualizado
          </span>
        </div>
            <p ref={leadRef} className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed mb-3 max-w-xl">
              Orientação profissional, acolhedora e individualizada para você e sua família, onde estiver.
            </p>

        {/* Título Monumental com Tensão Tipográfica */}
        <h1 className="font-heading uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wide leading-[0.95] mb-6">
          <div ref={titleLine1Ref} className="block drop-shadow-lg">
            Cuidado de Enfermagem
          </div>
          <span
            ref={titleLine2Ref}
            className="block text-neon drop-shadow-[0_0_35px_rgba(8,222,235,0.45)] mt-1"
          >
            Em Cada Fase da Vida.
          </span>
        </h1>
            <p ref={secondaryRef} className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
              Por meio da NG Teleconsulta, você recebe orientação de enfermagem com mais praticidade, clareza e segurança.
            </p>

        {/* Lead Text Editorial Clínico */}
        <p
          ref={leadTextRef}
          className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed tracking-normal mb-8 text-center px-4"
        >
          Orientação profissional, acolhedora e individualizada para você e sua família, onde
          estiver. Mais clareza, segurança e autonomia em sua rotina de saúde.
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

        {/* Botões de Ação Dark-Tech */}
        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neon text-abyss-950 font-mono text-sm font-bold tracking-widest uppercase transition-all duration-700 shadow-hud-cyan hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] focus:outline-none relative group"
          >
            <span className="corner-bracket corner-tl !border-abyss-950" />
            <span className="corner-bracket corner-br !border-abyss-950" />
            <MessageCircle className="w-4 h-4 text-abyss-950" />
            <span>AGENDAR VIA WHATSAPP</span>
          </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 hover:border-petrol-deep text-petrol-deep text-base font-semibold transition-all duration-300 hover:bg-petrol-deep/5 hover:-translate-y-0.5"
              >
                <span>Conhecer o consultório</span>
              </a>
            </div>

          <a
            href="#metodo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-neon/40 bg-abyss-900/60 backdrop-blur-hud text-slate-200 hover:text-neon hover:border-neon font-mono text-sm tracking-widest uppercase transition-all duration-700 relative group"
          >
            <span className="corner-bracket corner-tl" />
            <span className="corner-bracket corner-br" />
            <span>EXPLORAR METODOLOGIA</span>
            <ArrowRight className="w-4 h-4 text-neon group-hover:translate-x-1 transition-transform duration-700" />
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

        {/* Telemetria de Confiança / Badges Clínicos */}
        <div
          ref={statsRowRef}
          className="mt-10 grid grid-cols-3 gap-2 sm:gap-6 border-t border-neon/15 pt-6 max-w-xl w-full"
        >
          <div className="text-center">
            <span className="block font-mono text-[11px] sm:text-xs text-neon tracking-wider">
              100% ONLINE
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-sans">
              Sem filas ou deslocamentos
            </span>
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
          <div className="text-center border-x border-neon/15 px-2">
            <span className="block font-mono text-[11px] sm:text-xs text-neon tracking-wider">
              INDIVIDUALIZADO
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-sans">
              Escuta atenta e humana
            </span>
          </div>
          <div className="text-center">
            <span className="block font-mono text-[11px] sm:text-xs text-neon tracking-wider">
              SEGURANÇA ÉTICA
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-sans">
              Enfª Natali Garcia
            </span>
          </div>

        </div>
      </div>

      {/* Indicador de Scroll Cinematográfico (Some ao descer) */}
      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-20 flex flex-col items-center justify-center mx-auto text-center"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-slate-400 font-medium uppercase tracking-wider"
      >
        <div className="flex items-center gap-3 mb-2 font-mono text-[10px] tracking-widest text-slate-400 uppercase">
          <span className="w-8 h-[1px] bg-neon/30" />
          <span className="text-neon/80">DESÇA PARA EXPLORAR</span>
          <span className="w-8 h-[1px] bg-neon/30" />
        <span>Desça para explorar</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-petrol-deep animate-bounce" />
        </div>
        <div className="w-5 h-8 border border-neon/40 rounded-full flex items-start justify-center p-1 relative">
          <div className="w-1 h-2 rounded-full bg-neon animate-bounce" />
        </div>
      </div>
    </section>
  );
}
