import { Headset, ClipboardCheck, Eye, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const cards = [
  {
    icon: Headset,
    title: 'Atendimento personalizado',
    description: 'Cada serviço é analisado individualmente.',
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliação técnica',
    description: 'Entendimento das condições e necessidades do local.',
  },
  {
    icon: Eye,
    title: 'Transparência',
    description: 'Informações claras sobre o serviço e o orçamento.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromisso',
    description: 'Foco em segurança, qualidade e execução responsável.',
  },
]

export function DifferentiatorsSection() {
  return (
    <section
      id="diferenciais"
      className="scroll-mt-20 border-y border-border bg-muted/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Atendimento direto, sem complicação"
          title="Menos intermediários, mais clareza"
          description="Comunicação direta, avaliação personalizada e acompanhamento próximo para encontrar a solução certa para a sua necessidade."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <card.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
