'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Configuração do ScrollTrigger para ignorar resize de address bar no mobile (previne pulos verticais)
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });

    // 2. Inicialização do Lenis com easing cinematográfico expo.out
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo.out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      // Fix Mobile: syncTouch false previne briga de touch nativo com ScrollTrigger no mobile
      syncTouch: false,
      touchMultiplier: 1.0,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // 3. Sincronização oficial Lenis -> ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // 4. Conectar o RAF do Lenis ao Ticker do GSAP a 60/120fps sem dessincronia
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0); // Evita pulos de frame após abas inativas

    // Refresh inicial seguro
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenisRef.current = null;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
