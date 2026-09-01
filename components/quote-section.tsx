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
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Regra crítica: não recarregar a página.
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    // Captura dos dados exatamente como informados pelo usuário.
    const nome = String(data.get('nome') ?? '').trim()
    const servico = String(data.get('servico') ?? '').trim()
    const detalhes = String(data.get('detalhes') ?? '').trim()

    // Validação simples dos campos obrigatórios.
    if (!nome) {
      setError('Por favor, informe o seu nome.')
      return
    }
    if (!servico) {
      setError('Por favor, selecione o serviço desejado.')
      return
    }
    if (!detalhes) {
      setError('Por favor, descreva o que você precisa.')
      return
    }

    setError('')

    // Mensagem organizada e amigável para o WhatsApp.
    const mensagem = `Olá! Meu nome é ${nome}.

Gostaria de solicitar um orçamento para o serviço de ${servico}.

Detalhes:
${detalhes}`

    // Codifica a mensagem e abre o WhatsApp em uma nova aba.
    window.open(
      buildWhatsappLink(mensagem),
      '_blank',
      'noopener,noreferrer',
    )
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
              Solicitar Orçamento
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Conte o que você precisa e envie sua solicitação diretamente pelo
              WhatsApp.
            </p>

            <ul className="mt-8 space-y-4">
              {perks.map((perk) => (
                <li
                  key={perk.text}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
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
                <form
                  id="orcamentoForm"
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid gap-5"
                >
                  {/* Nome */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="nome"
                      className="text-sm font-medium text-foreground"
                    >
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="Digite seu nome"
                      className={fieldClass}
                    />
                  </div>

                  {/* Serviço desejado */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="servico"
                      className="text-sm font-medium text-foreground"
                    >
                      Serviço Desejado
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Selecione o serviço
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Detalhes */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="detalhes"
                      className="text-sm font-medium text-foreground"
                    >
                      Detalhes
                    </label>
                    <textarea
                      id="detalhes"
                      name="detalhes"
                      rows={4}
                      required
                      placeholder="Descreva brevemente o que você precisa."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  {error ? (
                    <p
                      role="alert"
                      className="rounded-lg bg-destructive/10 px-3.5 py-2.5 text-sm font-medium text-destructive"
                    >
                      {error}
                    </p>
                  ) : null}

                  {/* Botão */}
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
