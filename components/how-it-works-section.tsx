import { MessageSquare, Search, FileText, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Você entra em contato',
    description: 'Explique o que você precisa.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Entendemos a necessidade',
    description: 'São analisadas as características do serviço.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Avaliação e orçamento',
    description: 'É definida a melhor abordagem para o trabalho.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Execução',
    description:
      'O serviço é realizado conforme o planejamento e as condições acordadas.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Um processo simples e transparente"
        />

        <ol className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {/* Linha conectora no desktop */}
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li key={step.number} className="relative flex flex-col">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-bold text-primary md:mt-4">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-bold text-foreground md:mt-1">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
