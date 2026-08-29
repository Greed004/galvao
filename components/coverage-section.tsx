import { MapPin, Info } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { WhatsappButton } from '@/components/cta-buttons'
import { acreCities } from '@/lib/site-config'

export function CoverageSection() {
  return (
    <section
      id="area-atendimento"
      className="scroll-mt-20 border-y border-border bg-muted/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Área de atendimento"
          title="Atendimento em todo o Acre"
          description="Atendimento em todo o estado do Acre, conforme a necessidade, disponibilidade e características de cada serviço."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-5">
          {/* Visual de abrangência estadual */}
          <div className="lg:col-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/85 p-8 text-primary-foreground">
              <div>
                <MapPin className="size-8 opacity-90" aria-hidden="true" />
                <p className="mt-6 font-heading text-4xl font-bold leading-none">
                  Estado do Acre
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
                  Cobertura estadual com atuação conforme a logística e as
                  características de cada projeto ou serviço.
                </p>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-bold">22+</span>
                <span className="text-sm text-primary-foreground/80">
                  municípios e demais localidades
                </span>
              </div>
            </div>
          </div>

          {/* Lista de cidades */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-2.5">
              {acreCities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground"
                >
                  <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                  {city}
                </span>
              ))}
              <span className="inline-flex items-center rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground">
                e demais localidades do estado
              </span>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <p>
                Consulte a disponibilidade para atendimento e deslocamento na
                sua região. Serviços que exijam visita técnica ou logística
                específica são avaliados no orçamento.
              </p>
            </div>

            <div className="mt-6">
              <WhatsappButton
                size="lg"
                message="Olá! Gostaria de consultar o atendimento na minha região."
              >
                Consultar atendimento na minha região
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
