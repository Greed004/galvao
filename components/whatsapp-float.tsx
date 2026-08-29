import { MessageCircle } from 'lucide-react'
import { buildWhatsappLink, defaultWhatsappMessage } from '@/lib/site-config'

export function WhatsappFloat() {
  return (
    <a
      href={buildWhatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="group fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition-all hover:scale-105 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s]"
        aria-hidden="true"
      />
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  )
}
