// Fonte ÚNICA de branding/tenant do Shelf (marketplace de apps white-label).
// Tenant NEUTRO — não representa nenhum cliente final, é a própria loja.
import { defineTenant, type TokenMap } from '@mr/tenant-kernel';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? 'http://localhost:4321';

export const tenant = defineTenant<null>({
  brand: {
    name: 'Shelf',
    tagline: {
      pt: 'Apps prontas a usar, com a tua marca.',
      en: 'Ready-to-use apps, with your brand.',
    },
    logo: { kind: 'text', text: 'Shelf', alt: 'Shelf' },
    siteUrl: SITE_URL,
  },
  theme: {
    // valores canónicos — o emitCssVars injeta-os em :root e sobrepõe-se ao global.css
    tokens: {
      bg: '#FFFFFF',
      surface: '#F6F7F9',
      fg: '#0F172A',
      muted: '#64748B',
      border: '#E2E8F0',
      accent: '#111827',
      accentHover: '#000000',
      onAccent: '#FFFFFF',
      danger: '#DC2626',
      success: '#16A34A',
      highlight: '#F59E0B',
    },
    font: { display: 'Inter', body: 'Inter' },
  },
  contact: {
    email: import.meta.env.PUBLIC_CONTACT_EMAIL ?? 'ola@shelf.io',
  },
  locale: {
    default: 'pt',
    supported: ['pt'],
    timezone: 'Europe/Lisbon',
    currency: 'EUR',
    currencySymbol: '€',
  },
  copy: {},
  features: {},
  module: null,
});

/** Atalho para o nome da marca (usado nos componentes/SEO). */
export const SITE_NAME = tenant.brand.name;

/** Email de contacto (para os CTAs "Quero personalizado"). */
export const CONTACT_EMAIL = tenant.contact.email ?? 'ola@shelf.io';

/**
 * Canónico → nome real de CSS var (Tailwind v4 `@theme` em src/styles/global.css).
 * O kernel usa este mapa para escrever as vars certas em :root.
 */
export const TOKEN_MAP: TokenMap = {
  bg: '--color-brand-bg',
  surface: '--color-brand-surface',
  fg: '--color-brand-fg',
  muted: '--color-brand-muted',
  border: '--color-brand-border',
  accent: '--color-brand-accent',
  accentHover: '--color-brand-accent-hover',
  onAccent: '--color-brand-on-accent',
  highlight: '--color-brand-highlight',
};
