import Image from 'next/image'
import { ShieldCheck, MapPin } from 'lucide-react'
import { QuoteButton, WhatsappButton } from '@/components/cta-buttons'

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Soluções elétricas e de infraestrutura
          </span>

          <h1 className="mt-5 text-pretty font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Soluções técnicas para sua instalação com{' '}
            <span className="text-primary">segurança, precisão e agilidade.</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Serviços elétricos, manutenção, geradores, sistemas de combate a
            incêndio e energia solar, com atendimento direto e personalizado em
            todo o estado do Acre.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton size="lg" />
            <WhatsappButton size="lg" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
              Execução técnica e responsável
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Atendimento em todo o Acre
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/5">
            <Image
              src="/images/hero-eletricista.png"
              alt="Profissional realizando serviço em painel elétrico com equipamentos de segurança"
              width={1200}
              height={1200}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-background px-5 py-4 shadow-lg sm:block">
            <p className="font-heading text-2xl font-bold text-foreground">Atendimento</p>
            <p className="text-sm font-medium text-primary">direto com o especialista</p>
          </div>
        </div>
      </div>
    </section>
  )
}
