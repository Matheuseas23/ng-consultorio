/**
 * NG CONSULTÓRIO — SCRIPT DE MOVIMENTO & SCROLL CINEMATOGRÁFICO
 * Regra: Toda animação usa Lenis no scroll e GSAP no movimento.
 * Identidade: Consultório Médico / Telessaúde de Enfermagem (Enfª Natali Garcia)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. REGISTRAR PLUGINS GSAP
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  } else {
    console.error('GSAP ou ScrollTrigger não carregados.');
    return;
  }

  // 2. ANTI-JUMPING NO MOBILE (Prevenção de conflito de barra de navegação móvel)
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  });

  // 3. INICIALIZAÇÃO LENIS (Smooth Scroll sincronizado com Ticker GSAP)
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo.out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      syncTouch: false, // Fix mobile: previne concorrência com touch nativo do iOS/Android
      touchMultiplier: 1.0,
      autoResize: true,
    });

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // 4. HEADER SCROLL SHADOW
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 5. MENU MOBILE DRAWER
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mLinks = document.querySelectorAll('.m-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('is-open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    mLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 6. O HERO CINEMATOGRÁFICO: TENSÃO TIPOGRÁFICA ANTES DO REVEAL
  // Delay deliberado de 0.8s antes de surgir a primeira palavra
  const heroTimeline = gsap.timeline({
    delay: 0.8,
    defaults: { ease: 'expo.out' },
  });

  heroTimeline
    .fromTo('#hero-status-pill', 
      { opacity: 0, y: -15 }, 
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }
    )
    .fromTo('.hero-line-1',
      { opacity: 0, y: 40, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.3 },
      '-=0.5'
    )
    .fromTo('.hero-line-2',
      { opacity: 0, y: 35, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.3 },
      '-=0.9'
    )
    .fromTo('#hero-lead',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo('#hero-secondary',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo('#hero-actions',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('#hero-trust',
      { opacity: 0 },
      { opacity: 1, duration: 1.1, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('#hero-card',
      { opacity: 0, scale: 0.96, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'expo.out' },
      '-=1.0'
    )
    .fromTo('#hero-scroll-indicator',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
      '-=0.5'
    );

  // Scroll Indicator que some ao descer
  gsap.to('#hero-scroll-indicator', {
    scrollTrigger: {
      trigger: '#inicio',
      start: 'top top',
      end: '+=200',
      scrub: 1.0,
    },
    opacity: 0,
    y: 30,
    ease: 'power3.out',
  });

  // 7. O SCROLL QUE PARECE CÂMERA (Pin Scroll na Seção 'Como Funciona')
  const mm = gsap.matchMedia();

  // Desktop: Pin scroll elegante com timing de 0.2s e ease power3.out
  mm.add('(min-width: 992px)', () => {
    const processSection = document.getElementById('como-funciona');
    const stepItems = document.querySelectorAll('.flow-step-item');

    if (!processSection || stepItems.length === 0) return;

    const cameraTl = gsap.timeline({
      scrollTrigger: {
        trigger: processSection,
        pin: true,
        start: 'top top',
        end: '+=2200',
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Elementos entram em sequência estrita com timing de 0.2s entre cada um
    stepItems.forEach((item, index) => {
      const startTime = 0.3 + (index * 0.2); // Intervalo de 0.2s exato

      cameraTl.fromTo(item,
        {
          opacity: 0,
          y: 60,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0, // Duração cinematográfica >= 0.8s
          ease: 'power3.out',
        },
        startTime
      );
    });
  });

  // Mobile: Transições suaves sem pin agressivo para eliminar pulos verticais
  mm.add('(max-width: 991px)', () => {
    const stepItems = document.querySelectorAll('.flow-step-item');
    stepItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 35 },
        {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: index * 0.1,
        }
      );
    });
  });

  // 8. ANIMAÇÕES EDITORIAIS DE SEÇÕES (Durações >= 0.8s e eases power3/expo)
  
  // Seção Sobre
  gsap.fromTo('.editorial-grid',
    { opacity: 0, y: 40 },
    {
      scrollTrigger: {
        trigger: '#sobre',
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
    }
  );

  // Cards de Serviços
  const medicalCards = document.querySelectorAll('.medical-card');
  medicalCards.forEach((card, index) => {
    gsap.fromTo(card,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: (index % 3) * 0.12,
      }
    );
  });

  // Diferenciais
  const diffPanels = document.querySelectorAll('.diff-panel');
  diffPanels.forEach((panel, index) => {
    gsap.fromTo(panel,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: panel,
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        delay: (index % 3) * 0.1,
      }
    );
  });

  // Famílias & Cuidadores
  gsap.fromTo('.caregivers-immersive-box',
    { opacity: 0, scale: 0.97, y: 35 },
    {
      scrollTrigger: {
        trigger: '#familias',
        start: 'top 82%',
      },
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: 'expo.out',
    }
  );

  // Instagram
  gsap.fromTo('.instagram-frame',
    { opacity: 0, y: 35 },
    {
      scrollTrigger: {
        trigger: '#instagram',
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power3.out',
    }
  );

  // 9. FAQ ACCORDION EDITORIAL
  const accordionRows = document.querySelectorAll('.accordion-row');
  accordionRows.forEach((row) => {
    const trigger = row.querySelector('.acc-trigger');
    const drawer = row.querySelector('.acc-drawer');

    if (!trigger || !drawer) return;

    trigger.addEventListener('click', () => {
      const isOpen = row.classList.contains('is-open');

      // Fecha outros itens
      accordionRows.forEach((other) => {
        if (other !== row) {
          other.classList.remove('is-open');
          const otherTrigger = other.querySelector('.acc-trigger');
          const otherDrawer = other.querySelector('.acc-drawer');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherDrawer) otherDrawer.style.maxHeight = null;
        }
      });

      if (isOpen) {
        row.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        drawer.style.maxHeight = null;
      } else {
        row.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        drawer.style.maxHeight = drawer.scrollHeight + 'px';
      }

      // Atualiza o ScrollTrigger com segurança após abertura
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);
    });
  });

  // 10. REFRESH INICIAL DE SEGURANÇA
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 600);
});
