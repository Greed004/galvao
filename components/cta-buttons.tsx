import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  buildWhatsappLink,
  defaultWhatsappMessage,
} from '@/lib/site-config'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-heading font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring active:translate-y-px'

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
}

type Size = keyof typeof sizes

export function QuoteButton({
  className,
  size = 'md',
  children = 'Solicitar Orçamento',
  href = '#orcamento',
  onClick,
}: {
  className?: string
  size?: Size
  children?: React.ReactNode
  href?: string
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        base,
        sizes[size],
        'bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function WhatsappButton({
  className,
  size = 'md',
  children = 'Falar pelo WhatsApp',
  message = defaultWhatsappMessage,
  showIcon = true,
}: {
  className?: string
  size?: Size
  children?: React.ReactNode
  message?: string
  showIcon?: boolean
}) {
  return (
    <a
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        sizes[size],
        'bg-whatsapp text-whatsapp-foreground shadow-sm shadow-whatsapp/20 hover:bg-whatsapp/90 hover:shadow-md',
        className,
      )}
    >
      {showIcon ? <MessageCircle className="size-5" aria-hidden="true" /> : null}
      {children}
    </a>
  )
}

export function OutlineButton({
  className,
  size = 'md',
  children,
  href,
}: {
  className?: string
  size?: Size
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        sizes[size],
        'border border-border bg-background text-foreground hover:border-primary/40 hover:bg-muted',
        className,
      )}
    >
      {children}
    </Link>
  )
}
