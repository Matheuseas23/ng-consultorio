'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'O que é uma teleconsulta de enfermagem?',
    a: 'A teleconsulta de enfermagem é uma consulta de saúde realizada por videochamada na qual a enfermeira avalia as necessidades de cuidado, esclarece dúvidas, orienta sobre prevenção de riscos, rotinas de saúde e cuidados no ambiente doméstico com respaldo ético do Conselho de Enfermagem.',
  },
  {
    q: 'Quem pode entrar em contato com a NG Teleconsulta?',
    a: 'Qualquer pessoa, pai, mãe, familiar ou cuidador que busque orientação de enfermagem para cuidar melhor de si ou de um ente querido, em qualquer fase da vida.',
  },
  {
    q: 'Quais assuntos podem ser conversados durante o atendimento?',
    a: 'Dúvidas sobre saúde infantil, rotina e cuidados com pessoas idosas, orientações para acompanhar pressão arterial e diabetes, organização e uso seguro de medicamentos prescritos, orientações gerais sobre feridas e curativos, e dúvidas de saúde em geral.',
  },
  {
    q: 'Como funciona o agendamento?',
    a: 'O agendamento é feito diretamente pelo WhatsApp oficial do NG Consultório. Você entra em contato, apresenta brevemente sua necessidade e alinhamos o melhor horário disponível na agenda para a sua teleconsulta.',
  },
  {
    q: 'O atendimento é realizado por vídeo?',
    a: 'Sim. A teleconsulta ocorre por videochamada privativa e segura, permitindo um contato direto, acolhedor e próximo no conforto da sua casa.',
  },
  {
    q: 'A teleconsulta substitui um atendimento de emergência?',
    a: 'A teleconsulta não substitui atendimento de emergência ou avaliação médica presencial quando necessária. Em situações graves, sinais de risco agudo, dor torácica intensa, falta de ar severa ou urgência, procure imediatamente um pronto atendimento ou ligue para o SAMU (192).',
    isAlert: true,
  },
  {
    q: 'Como recebo as orientações após o atendimento?',
    a: 'Ao término do atendimento, as orientações de enfermagem combinadas são resumidas de forma clara e compartilhadas diretamente com você pelo WhatsApp para que você possa consultar e aplicar com facilidade na rotina.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-warm mb-2 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-title text-3xl sm:text-5xl font-extrabold text-petrol-deep leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Transparência e respostas claras sobre a teleconsulta de enfermagem.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-petrol-deep/30 bg-petrol-soft/30 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                } ${faq.isAlert ? 'border-amber-200 bg-amber-50/40' : ''}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-title text-lg sm:text-xl font-bold text-petrol-deep">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-gold-warm transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-45 bg-petrol-deep text-white border-petrol-deep' : ''
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-base leading-relaxed border-t border-slate-100/80">
                    {faq.isAlert && (
                      <strong className="text-amber-800 block mb-1">Aviso sobre emergências: </strong>
                    )}
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
