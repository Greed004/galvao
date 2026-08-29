// Dados oficiais do profissional.
// Substitua os placeholders pelas informações reais do documento "Projeto Pro Galvão".

export const siteConfig = {
  name: 'Projeto Pro Galvão',
  role: 'Soluções Elétricas e de Infraestrutura',

  // Contato — [INSERIR INFORMAÇÃO OFICIAL]
  phoneDisplay: '[INSERIR TELEFONE OFICIAL]',
  whatsappDisplay: '[INSERIR WHATSAPP OFICIAL]',
  email: '[INSERIR E-MAIL OFICIAL]',
  baseCity: '[INSERIR CIDADE BASE]',
  cnpj: '[INSERIR CNPJ OFICIAL]',

  // Número usado no link do WhatsApp (formato internacional, somente dígitos).
  // Ex.: 55 + DDD + número. Substitua pelo número oficial.
  whatsappNumber: '5568000000000',

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
  'Sistemas de combate a incêndio',
  'Sistema fotovoltaico',
  'Outro',
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
