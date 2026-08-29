import { MessageCircle } from 'lucide-react'
import { WhatsappButton } from '@/components/cta-buttons'

export function WhatsappSection() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-whatsapp/20 bg-whatsapp/[0.06] px-6 py-12 text-center sm:py-14">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-whatsapp/15 text-whatsapp">
            <MessageCircle className="size-7" aria-hidden="true" />
          </span>
          <h2 className="text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Prefere falar diretamente?
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Entre em contato pelo WhatsApp e explique o que você precisa. O
            atendimento é direto com o profissional.
          </p>
          <WhatsappButton size="lg" />
        </div>
      </div>
    </section>
  )
}
