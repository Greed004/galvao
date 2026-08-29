import Link from 'next/link'
import { Zap, Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { WhatsappButton } from '@/components/cta-buttons'
import { siteConfig } from '@/lib/site-config'

const footerServices = [
  'Elétrica em geral',
  'Instalação e manutenção',
  'Manutenção de equipamentos',
  'Manutenção de geradores',
  'Sistemas de combate a incêndio',
  'Sistema fotovoltaico',
]

export function SiteFooter() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-base font-bold text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Soluções elétricas, manutenção, geradores, combate a incêndio e
              energia solar, com atendimento direto e personalizado.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="#servicos"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.whatsappDisplay}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Atendimento em todo o estado do Acre
              </li>
            </ul>
          </div>

          {/* Área de atendimento + CTA */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Área de atendimento
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Todo o estado do Acre, conforme a disponibilidade e as
              características de cada serviço.
            </p>
            <WhatsappButton size="md" className="mt-5 w-full" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>CNPJ: {siteConfig.cnpj}</p>
          <p>
            &copy; 2026 {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
