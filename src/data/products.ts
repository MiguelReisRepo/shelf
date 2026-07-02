// Catálogo da montra — os DOIS produtos (templates white-label).
// Nomes GENÉRICOS de categoria (não marcas de clientes).

export interface CatalogProduct {
  id: string;
  name: string;
  kicker: string;
  description: string;
  audience: string;
  features: string[];
  pricing: {
    template: number;
    done: number;
    doneIncludes: string;
  };
  demoUrl: string;
}

export const PRODUCTS: CatalogProduct[] = [
  {
    id: 'marcacoes',
    name: 'Marcações',
    kicker: 'App de marcações',
    description:
      'Deixa os teus clientes marcarem online, sem trocas de mensagens. Tu controlas horários, serviços e lembretes a partir de um painel simples.',
    audience: 'Para barbearias, salões, estética e clínicas.',
    features: [
      'Marcações online 24/7',
      'Gestão de horários e serviços',
      'Lembretes automáticos por SMS/email',
      'Painel de admin para gerir a agenda',
    ],
    pricing: {
      template: 149,
      done: 499,
      doneIncludes: 'inclui integração Google Calendar',
    },
    // Local dev fallback; em produção define PUBLIC_DEMO_MARCACOES_URL para o demo deployado.
    demoUrl: import.meta.env.PUBLIC_DEMO_MARCACOES_URL ?? 'http://localhost:3005/',
  },
  {
    id: 'loja',
    name: 'Loja',
    kicker: 'Loja online',
    description:
      'Uma montra online rápida e leve para venderes sem complicações. Checkout direto por WhatsApp — sem gateways nem comissões.',
    audience: 'Para pequenos retalhistas.',
    features: [
      'Catálogo de produtos com variantes',
      'Checkout por WhatsApp',
      'Site bilingue PT/EN',
      'Painel de gestão de stock',
    ],
    pricing: {
      template: 99,
      done: 349,
      doneIncludes: 'inclui setup + catálogo inicial',
    },
    // Local dev fallback; em produção define PUBLIC_DEMO_LOJA_URL para o demo deployado.
    demoUrl: import.meta.env.PUBLIC_DEMO_LOJA_URL ?? 'http://localhost:4332/pt',
  },
  {
    id: 'site',
    name: 'Site',
    kicker: 'Site de uma página',
    description:
      'Um site rápido e bonito para o teu negócio numa única página — apresentação, serviços, testemunhos e contacto direto por WhatsApp. Pronto a pôr online em dias.',
    audience: 'Para freelancers e micro-negócios.',
    features: [
      'Uma página com tudo o que precisas',
      'Contacto direto por WhatsApp',
      'Rápido e otimizado para Google (SEO)',
      'Textos e cores fáceis de trocar',
    ],
    pricing: {
      template: 49,
      done: 149,
      doneIncludes: 'inclui setup + textos iniciais',
    },
    // Local dev fallback; em produção define PUBLIC_DEMO_SITE_URL para o demo deployado.
    demoUrl: import.meta.env.PUBLIC_DEMO_SITE_URL ?? 'http://localhost:4334/',
  },
];
