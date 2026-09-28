# PROTOCOLO DE DESENVOLVIMENTO & DESIGN SYSTEM — NG CONSULTÓRIO

## 1. REGRA FUNDAMENTAL DE ANIMAÇÃO & SCROLL
- **Toda animação de scroll utiliza Lenis.**
- **Todo movimento, interpolação e transição utiliza GSAP (com ScrollTrigger).**
- Nenhum componente deve utilizar animações CSS descontroladas ou bibliotecas concorrentes (ex: Framer Motion) para movimentos de câmera ou pin scroll.

---

## 2. ARQUITETURA DE INTEGRAÇÃO: LENIS + SCROLLTRIGGER
Para garantir sincronismo milimétrico a 60/120fps sem dessincronização de frames:

```typescript
// Sincronização oficial Lenis + GSAP ScrollTrigger
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo.out
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.2,
  syncTouch: false, // Previne hijacking agressivo no mobile
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

---

## 3. DIRETRIZES ANTI-JUMPING NO MOBILE (RESOLUÇÃO DE CONFLITOS)
O "pulo" no mobile ocorre por três fatores clássicos:
1. **Redimensionamento da barra de navegação (Address Bar Dynamic Resize)** disparando recalculo de altura em pins do ScrollTrigger.
2. **Conflito entre o gesture handler do Lenis e o touch scroll nativo do iOS/Android.**
3. **Falta de pinType fixo ou normalização excessiva.**

### Soluções Obrigatórias:
- Configurar `ScrollTrigger.config({ ignoreMobileResize: true })`.
- Utilizar `gsap.matchMedia()` para adaptar pins e valores de deslocamento no mobile.
- Manter `syncTouch: false` no Lenis para dispositivos touch ou ajustar sensibilidade.
- Utilizar unidades `100svh` / `100dvh` ou medidas relativas estáveis ao invés de `100vh` estático que quebra no Safari iOS.
- Sempre limpar triggers com `ctx.revert()` no unmount de componentes React.

---

## 4. RITMO CINEMATOGRÁFICO & EASING (CINEMATIC PACING)
Sites cinematográficos são lentos com intenção e transmitem autoridade médica de precisão:
- **Duração Mínima:** Nenhuma animação de entrada ou saída pode durar menos de `0.6s` (preferência por `0.8s` a `1.6s` para movimentos de câmera e reveals dramáticos).
- **Curvas de Aceleração (Easing) Permitidas:**
  - `power3.out` / `power3.inOut`
  - `expo.out` / `expo.inOut`
  - *Proibido:* `linear` (exceto em scrubs contínuos), `back.out` (infantil/cartoon), ou eases genéricos como `ease-in-out` padrão de CSS.
- **Stagger & Sequenciamento:** Elementos de lista ou HUD entram em sequência calculada (ex: `0.15s` a `0.25s` de delay entre itens).
- **Tensão Tipográfica:** Revelações de texto devem ter respiração inicial (delay deliberado de `0.3s` a `0.6s` antes do primeiro caractere/palavra).

---

## 5. DESIGN SYSTEM: INDUSTRIAL BLUEPRINT / COCKPIT HUD
- **Paleta Abissal & Neon:**
  - Fundo principal: `#020b12`
  - Fundo secundário / Superfícies HUD: `#031522` / `#051f33`
  - Acento Elétrico: `#08deeb` (Ciano neon de telemetria)
  - Bordas Técnicas: `rgba(8, 222, 235, 0.15)` a `rgba(8, 222, 235, 0.3)`
  - Vidro / Glassmorphism: `backdrop-filter: blur(8px); background: rgba(3, 21, 34, 0.65)`
- **Tipografia:**
  - Títulos & Headings: `'Barlow Condensed'`, sans-serif, uppercase, letter-spacing refinado (`tracking-wider` / `tracking-widest`).
  - Métricas, Rótulos HUD & Telemetria: `'Space Mono'`, monospace.
  - Textos de Leitura Clínica: Sans-serif neutra com alta legibilidade técnica (`Plus Jakarta Sans` ou `Inter`).
- **Regra de Espaçamento do Topo:**
  - Nunca zerar margens superiores (`margin-top`) quando a intenção for apenas deixar o fundo transparente (`background: transparent !important`).
- **Anti-Slop:**
  - Sem gradientes roxos genéricos de IA.
  - Sem botões pílula inchados com sombras difusas.
  - Sem cards desproporcionais com cantos excessivamente arredondados (`rounded-3xl` / `rounded-full`). Preferir cantos industriais precisos (`rounded-none`, `rounded-sm`, cantos chanfrados ou bordas com guias milimétricas).
