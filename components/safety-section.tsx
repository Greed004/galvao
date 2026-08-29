import { ShieldCheck } from 'lucide-react'

export function SafetySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-primary/[0.04] p-8 text-center sm:p-12">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </span>
          <h2 className="text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Segurança em primeiro lugar
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            Serviços elétricos e de infraestrutura exigem conhecimento técnico,
            atenção aos detalhes e responsabilidade. Cada trabalho deve ser
            avaliado de acordo com suas características específicas.
          </p>
        </div>
      </div>
    </section>
  )
}
