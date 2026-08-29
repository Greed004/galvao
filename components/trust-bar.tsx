import { UserCheck, MapPinned, Layers, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: UserCheck,
    title: 'Atendimento personalizado',
    description: 'Contato direto com o profissional.',
  },
  {
    icon: MapPinned,
    title: 'Todo o Acre',
    description: 'Atendimento em todo o estado.',
  },
  {
    icon: Layers,
    title: 'Soluções completas',
    description: 'Da instalação à manutenção.',
  },
  {
    icon: ShieldCheck,
    title: 'Foco em segurança',
    description: 'Execução técnica e responsável.',
  },
]

export function TrustBar() {
  return (
    <section aria-label="Diferenciais de confiança" className="border-y border-border bg-muted/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden px-4 py-2 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3 px-2 py-5 sm:px-5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-foreground">
                {item.title}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
