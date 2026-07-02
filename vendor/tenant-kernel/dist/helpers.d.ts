import type { ColorTokens, Locale, LocaleConfig, LocalizedString, TenantConfig } from './types.js';
/** Identidade tipada — dá autocomplete + type-check ao definir o tenant. */
export declare function defineTenant<T>(config: TenantConfig<T>): TenantConfig<T>;
/** Resolve uma LocalizedString para a locale pedida (com fallbacks). */
export declare function t(value: LocalizedString, locale: Locale): string;
/** Formata um número como moeda segundo a LocaleConfig do tenant. */
export declare function money(value: number, locale: LocaleConfig): string;
/** Canónico → nome de CSS var real da app. Parcial: cada app mapeia só o que usa. */
export type TokenMap = Partial<Record<keyof ColorTokens, string>>;
/**
 * Emite a string de CSS vars, traduzindo tokens canónicos para os nomes de
 * CSS var de cada app. Usar em `:root{ ${emitCssVars(...)} }`.
 */
export declare function emitCssVars(tokens: ColorTokens, map: TokenMap): string;
