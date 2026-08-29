import Link from 'next/link'
import {
  Zap,
  Wrench,
  Cog,
  BatteryCharging,
  Flame,
  Sun,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Zap,
    title: 'Elétrica em geral',
    description:
      'Serviços elétricos para diferentes necessidades residenciais, comerciais e profissionais.',
    items: ['Residencial', 'Comercial', 'Profissional'],
  },
  {
    icon: Wrench,
    title: 'Instalação e manutenção',
    description:
      'Atuação em instalações e manutenção predial, industrial e comercial, com foco em segurança e funcionamento adequado.',
    items: ['Predial', 'Industrial', 'Comercial', 'Preventiva e corretiva'],
  },
  {
    icon: Cog,
    title: 'Manutenção de equipamentos',
    description:
      'Serviços de manutenção e suporte técnico conforme o tipo e as características de cada equipamento.',
    items: ['Diagnóstico', 'Suporte técnico', 'Adequação'],
  },
  {
    icon: BatteryCharging,
    title: 'Manutenção de geradores',
    description:
      'Serviços que buscam garantir a confiabilidade e a disponibilidade do gerador conforme as características do equipamento.',
    items: ['Manutenção preventiva', 'Verificação', 'Confiabilidade'],
  },
  {
    icon: Flame,
    title: 'Sistemas de combate a incêndio',
    description:
      'Instalação, manutenção e adequação de sistemas de combate a incêndio conforme a necessidade e as especificações técnicas do projeto.',
    items: ['Instalação', 'Manutenção', 'Adequação'],
  },
  {
    icon: Sun,
    title: 'Sistema fotovoltaico — energia solar',
    description:
      'Soluções em energia solar fotovoltaica para geração própria de energia, com foco em economia e eficiência.',
    items: ['Geração própria', 'Energia limpa', 'Eficiência energética'],
    accent: true,
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Serviços especializados"
          title="Soluções técnicas completas"
          description="Soluções para instalações elétricas, manutenção, infraestrutura e geração de energia — avaliadas conforme a necessidade de cada projeto."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <span
                className={
                  service.accent
                    ? 'flex size-12 items-center justify-center rounded-xl bg-solar/20 text-solar-foreground'
                    : 'flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground'
                }
              >
                <service.icon className="size-6" aria-hidden="true" />
              </span>

              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#orcamento"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Solicitar orçamento
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
