'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2, ShieldCheck, Clock, UserCheck } from 'lucide-react'
import {
  buildWhatsappLink,
  serviceOptions,
  siteConfig,
} from '@/lib/site-config'

const perks = [
  { icon: UserCheck, text: 'Atendimento direto com o profissional' },
  { icon: ShieldCheck, text: 'Avaliação técnica de cada serviço' },
  { icon: Clock, text: 'Retorno o mais breve possível' },
]

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20'

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nome = String(data.get('nome') ?? '')
    const telefone = String(data.get('telefone') ?? '')
    const cidade = String(data.get('cidade') ?? '')
    const servico = String(data.get('servico') ?? '')
    const descricao = String(data.get('descricao') ?? '')

    const message = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${nome}`,
      `Telefone/WhatsApp: ${telefone}`,
      `Cidade: ${cidade}`,
      `Serviço desejado: ${servico}`,
      descricao ? `Descrição: ${descricao}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(buildWhatsappLink(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="orcamento" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Coluna esquerda */}
          <div className="lg:col-span-2">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              Solicite seu orçamento
            </span>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vamos entender o que você precisa
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Explique o que você precisa e entraremos em contato para entender
              melhor o serviço e avaliar a melhor solução.
            </p>

            <ul className="mt-8 space-y-4">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <perk.icon className="size-4" aria-hidden="true" />
                  </span>
                  {perk.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Solicitação preparada!
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Abrimos o WhatsApp com os dados do seu orçamento. Caso não
                    tenha aberto, verifique a janela ou entre em contato
                    diretamente pelo botão abaixo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nome" className="text-sm font-medium text-foreground">
                        Nome
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Seu nome"
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefone" className="text-sm font-medium text-foreground">
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cidade" className="text-sm font-medium text-foreground">
                      Cidade
                    </label>
                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      required
                      placeholder="Informe sua cidade"
                      className={fieldClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="servico" className="text-sm font-medium text-foreground">
                      Serviço desejado
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Selecione um serviço
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="descricao" className="text-sm font-medium text-foreground">
                      Descrição
                    </label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      rows={4}
                      placeholder="Conte brevemente o que você precisa."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-heading text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-md active:translate-y-px"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    Solicitar Orçamento
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Ao enviar, seus dados são organizados em uma mensagem de
                    WhatsApp para {siteConfig.name}.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
