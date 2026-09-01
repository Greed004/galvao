import Image from 'next/image'
import { Check } from 'lucide-react'
import { QuoteButton } from '@/components/cta-buttons'

const highlights = [
  'Experiência e especialização técnica',
  'Atendimento direto, sem intermediários',
  'Responsabilidade e foco em segurança',
  'Compromisso com a qualidade em cada serviço',
]

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/images/sobre-profissional.png"
              alt="Profissional especializado em serviços elétricos e infraestrutura"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="h-px w-6 bg-primary" aria-hidden="true" />
            Sobre o profissional
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Você fala diretamente com quem entende do serviço
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Meu trabalho é oferecer soluções técnicas com segurança,
              responsabilidade e atenção a cada detalhe. O atendimento é direto,
              permitindo entender de perto a necessidade de cada cliente e buscar
              a solução mais adequada para cada serviço.
            </p>
            <p>
              Atuo com serviços elétricos, manutenção, geradores, sistemas de
              combate a incêndio e energia solar em todo o estado do Acre, com
              avaliação individual de cada projeto.
            </p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <QuoteButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
