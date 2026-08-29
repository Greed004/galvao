import { QuoteButton, WhatsappButton } from '@/components/cta-buttons'

export function CtaBand() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/5"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-primary-foreground/5"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Precisa de um serviço elétrico ou de manutenção?
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-primary-foreground/80">
                Conte o que você precisa. Vamos entender o serviço e avaliar a
                melhor solução para a sua necessidade.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <QuoteButton
                size="lg"
                className="bg-background text-primary shadow-none hover:bg-background/90"
              >
                Solicitar Orçamento
              </QuoteButton>
              <WhatsappButton
                size="lg"
                message="Olá! Gostaria de falar sobre o meu serviço."
              >
                Falar sobre meu serviço
              </WhatsappButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
