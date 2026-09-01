// Dados oficiais do profissional.
// Informações da Galvão Elétrica e Manutenção Industrial.

export const siteConfig = {
  name: 'Galvão Elétrica e Manutenção Industrial',
  role: 'Soluções Elétricas e de Infraestrutura',

  // Contato
  phoneDisplay: '(68) 99944-9737',
  whatsappDisplay: '(68) 99944-9737',
  email: 'contato@galvaoeletrica.com.br',
  baseCity: 'Rio Branco - AC',
  cnpj: 'Sob consulta',

  // Número usado no link do WhatsApp (formato internacional, somente dígitos).
  // Ex.: 55 + DDD + número. Substitua pelo número oficial.
  whatsappNumber: '5568999449737',

  serviceArea: 'Todo o estado do Acre',
} as const

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const defaultWhatsappMessage =
  'Olá! Gostaria de solicitar um orçamento para um serviço.'

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Contato', href: '#contato' },
] as const

export const serviceOptions = [
  'Elétrica em geral',
  'Instalação e manutenção predial',
  'Instalação e manutenção comercial',
  'Instalação e manutenção industrial',
  'Manutenção de equipamentos',
  'Manutenção de geradores',
  'Instalação e manutenção de sistemas de combate a incêndio',
  'Sistema fotovoltaico — Energia Solar',
] as const

export const acreCities = [
  'Rio Branco',
  'Cruzeiro do Sul',
  'Sena Madureira',
  'Tarauacá',
  'Feijó',
  'Brasiléia',
  'Epitaciolândia',
  'Xapuri',
  'Plácido de Castro',
  'Senador Guiomard',
  'Acrelândia',
  'Capixaba',
  'Bujari',
  'Porto Acre',
  'Assis Brasil',
  'Mâncio Lima',
  'Rodrigues Alves',
  'Porto Walter',
  'Marechal Thaumaturgo',
  'Jordão',
  'Santa Rosa do Purus',
  'Manoel Urbano',
] as const
