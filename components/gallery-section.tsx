import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const gallery = [
  {
    src: '/images/galeria-painel.png',
    alt: 'Painel elétrico organizado com disjuntores e cabeamento',
    caption: 'Painéis elétricos',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/images/galeria-gerador.png',
    alt: 'Gerador de energia em sala técnica',
    caption: 'Geradores',
  },
  {
    src: '/images/galeria-solar.png',
    alt: 'Painéis solares fotovoltaicos instalados em telhado',
    caption: 'Energia solar',
  },
  {
    src: '/images/galeria-industrial.png',
    alt: 'Infraestrutura elétrica industrial com eletrocalhas e painéis',
    caption: 'Infraestrutura industrial',
  },
  {
    src: '/images/galeria-incendio.png',
    alt: 'Componentes de sistema de combate a incêndio',
    caption: 'Combate a incêndio',
  },
  {
    src: '/images/galeria-manutencao.png',
    alt: 'Técnico realizando medição elétrica com multímetro',
    caption: 'Manutenção técnica',
  },
]

export function GallerySection() {
  return (
    <section className="border-y border-border bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Serviços realizados"
          title="Áreas de atuação em imagens"
          description="Instalações, manutenções, geradores, energia solar e sistemas de combate a incêndio. Espaço preparado para inserção de fotografias reais dos serviços."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 md:auto-rows-[200px]">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-xl border border-border ${item.span ?? ''}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-4 font-heading text-sm font-semibold text-background">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
