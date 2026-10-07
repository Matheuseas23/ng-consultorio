import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ng-consultorio.vercel.app'),
  title: 'NG Consultório | Teleconsulta de Enfermagem • Enfª Natali Garcia',
  description:
    'Orientação de enfermagem com acolhimento, clareza e praticidade. Conheça a NG Teleconsulta e fale com a Enfª Natali Garcia pelo WhatsApp.',
  icons: {
    icon: '/favicon.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'NG Consultório | Teleconsulta de Enfermagem',
    description:
      'Orientação de enfermagem com acolhimento, clareza e praticidade. Enfª Natali Garcia.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-ivory-page text-slate-800 antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
