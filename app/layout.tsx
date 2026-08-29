import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Projeto Pro Galvão | Soluções Elétricas e Manutenção no Acre',
  description:
    'Serviços elétricos, manutenção, geradores, sistemas de combate a incêndio e energia solar, com atendimento personalizado em todo o estado do Acre.',
  generator: 'v0.app',
  keywords: [
    'eletricista no Acre',
    'serviços elétricos no Acre',
    'manutenção elétrica no Acre',
    'instalação elétrica no Acre',
    'manutenção de geradores no Acre',
    'energia solar no Acre',
    'sistema fotovoltaico no Acre',
    'sistemas de combate a incêndio no Acre',
  ],
  openGraph: {
    title: 'Projeto Pro Galvão | Soluções Elétricas e Manutenção no Acre',
    description:
      'Serviços elétricos, manutenção, geradores, sistemas de combate a incêndio e energia solar, com atendimento personalizado em todo o estado do Acre.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
