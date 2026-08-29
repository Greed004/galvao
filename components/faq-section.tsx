'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'Vocês atendem fora de Rio Branco?',
    a: 'Sim. O atendimento abrange todo o estado do Acre, sujeito à disponibilidade e às características de cada serviço.',
  },
  {
    q: 'Vocês fazem manutenção elétrica?',
    a: 'Sim. São realizados serviços de instalação e manutenção conforme a especialidade e a necessidade do cliente.',
  },
  {
    q: 'Trabalham com empresas?',
    a: 'Sim. Há atendimento para necessidades comerciais e industriais, conforme o serviço solicitado.',
  },
  {
    q: 'Trabalham com geradores?',
    a: 'Sim. É oferecido serviço de manutenção de geradores, conforme as características do equipamento e do serviço.',
  },
  {
    q: 'Trabalham com energia solar?',
    a: 'Sim. O profissional atua com sistemas fotovoltaicos, conforme a necessidade e as características do projeto.',
  },
  {
    q: 'Como solicito um orçamento?',
    a: 'Você pode preencher o formulário nesta página ou entrar diretamente em contato pelo WhatsApp.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas e respostas" />

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q} className="bg-card">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/50"
                  >
                    <span className="font-heading text-base font-semibold text-foreground">
                      {faq.q}
                    </span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-primary transition-transform duration-200',
                        isOpen && 'rotate-45',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={cn(
                    'grid transition-all duration-200',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
