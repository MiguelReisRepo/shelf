export type Locale = 'pt' | 'en';
/** String simples (usa a default locale) ou mapa parcial por locale. */
export type LocalizedString = string | Partial<Record<Locale, string>>;
export interface LogoSpec {
    kind: 'text' | 'image';
    /** wordmark quando kind==='text' — o componente deve usar currentColor */
    text?: string;
    /** caminho quando kind==='image' */
    src?: string;
    alt?: string;
}
/**
 * Tokens SEMÂNTICOS canónicos. Nomes fixos e pequenos → temas trocam 1:1.
 * Cada app mapeia estes para os SEUS nomes de CSS var via TokenMap (helpers.ts).
 */
export interface ColorTokens {
    bg: string;
    surface: string;
    fg: string;
    muted: string;
    border: string;
    accent: string;
    accentHover: string;
    onAccent: string;
    danger: string;
    success: string;
    highlight?: string;
}
export interface ThemeConfig {
    tokens: ColorTokens;
    /** já é a convenção nos dois repos (--font-display / --font-body) */
    font: {
        display: string;
        body: string;
    };
    radius?: string;
}
export interface ContactConfig {
    /** dígitos E.164 sem '+', ex '351920000000' */
    whatsapp?: string;
    phone?: string;
    email?: string;
    social?: {
        instagram?: string;
        facebook?: string;
        tiktok?: string;
    };
}
export interface LocaleConfig {
    default: Locale;
    supported: Locale[];
    /** IANA, ex 'Europe/Lisbon' */
    timezone: string;
    /** ISO 4217, ex 'EUR' */
    currency: string;
    currencySymbol: string;
}
export interface BrandConfig {
    name: string;
    tagline: LocalizedString;
    logo: LogoSpec;
    /** canónico; pode ser overridden por env no deploy */
    siteUrl: string;
}
/** TModule é o dado específico da app: BookingModule | CatalogModule (modules.ts). */
export interface TenantConfig<TModule = unknown> {
    brand: BrandConfig;
    theme: ThemeConfig;
    contact: ContactConfig;
    locale: LocaleConfig;
    /** chaves planas por convenção de pontos: "home.hero.title" */
    copy: Record<string, LocalizedString>;
    features: Record<string, boolean>;
    module: TModule;
}
