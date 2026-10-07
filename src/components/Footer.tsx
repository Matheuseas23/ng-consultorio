'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ivory-page text-slate-700 pt-16 pb-12 border-t border-petrol-deep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BLOCO FINAL CTA: O Bloco Nobre em Azul Petróleo */}
        <div id="contato" className="mb-20">
          <div className="bg-gradient-to-br from-petrol-deep to-[#051c24] rounded-[32px] p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-card text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gold-warm text-xs font-semibold uppercase tracking-wider mb-6">
              Atendimento Privativo & Acolhedor
            </span>

            <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Cuidar começa com uma conversa.
            </h2>

            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Fale com o NG Consultório e descubra como receber orientação de enfermagem com mais acolhimento, clareza e praticidade.
            </p>

            <div>
              <a
                href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-warm hover:bg-gold-hover text-white text-base font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar com a Enfª Natali</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="mt-8 text-sm text-white/70">
              WhatsApp Oficial: <strong className="text-white font-semibold">(11) 96360-1677</strong>
            </p>
          </div>
        </div>

        {/* Rodapé em Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-200">
          
          {/* Coluna Marca */}
          <div>
            <Image
              src="/logo.png"
              alt="NG Consultório"
              width={160}
              height={50}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="font-title text-lg font-bold text-petrol-deep mb-1">
              “Cuidado em cada fase da vida.”
            </p>
            <p className="text-sm text-slate-500 mb-2">
              Enfª Natali Garcia • Responsável pelo NG Consultório
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serviço especializado de orientação e teleconsulta de enfermagem em âmbito nacional.
            </p>
          </div>

          {/* Coluna Navegação */}
          <div>
            <h4 className="font-title text-base font-bold text-petrol-deep mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#inicio" className="hover:text-petrol-deep transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-petrol-deep transition-colors">Sobre o Consultório</a></li>
              <li><a href="#servicos" className="hover:text-petrol-deep transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-petrol-deep transition-colors">Como Funciona</a></li>
              <li><a href="#familias" className="hover:text-petrol-deep transition-colors">Famílias & Cuidadores</a></li>
              <li><a href="#duvidas" className="hover:text-petrol-deep transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-petrol-deep transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna Canais */}
          <div>
            <h4 className="font-title text-base font-bold text-petrol-deep mb-4">
              Canais Oficiais
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="https://wa.me/5511963601677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-petrol-deep transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: (11) 96360-1677</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ngteleconsulta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-petrol-deep transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram: @ngteleconsulta</span>
                </a>
              </li>
            </ul>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Atendimento de segunda a sexta, mediante agendamento prévio.
            </p>
          </div>

        </div>

        {/* Faixa Obrigatória de Emergência Legal */}
        <div className="my-8 p-4 bg-petrol-soft rounded-2xl text-xs text-slate-600 leading-relaxed border border-petrol-deep/5">
          <strong className="text-petrol-deep">Aviso sobre emergências: </strong>
          A teleconsulta não substitui atendimento de emergência ou avaliação médica presencial quando necessária. Em situações graves, sinais de risco ou urgência, procure imediatamente um pronto atendimento ou ligue para o SAMU (192).
        </div>

        {/* Barra Inferior */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 NG Consultório • Enfª Natali Garcia. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="text-petrol-deep hover:text-gold-warm font-medium transition-colors"
          >
            Voltar ao topo ↑
          </button>
        </div>

      </div>

      {/* Botão Flutuante de WhatsApp Oficial */}
      <aside className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/5511963601677?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20teleconsulta%20de%20enfermagem."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          aria-label="Abrir WhatsApp oficial"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </aside>
    </footer>
  );
}
