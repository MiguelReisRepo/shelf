// Helpers puros. Sem side-effects, sem env, sem framework.
/** Identidade tipada — dá autocomplete + type-check ao definir o tenant. */
export function defineTenant(config) {
    return config;
}
/** Resolve uma LocalizedString para a locale pedida (com fallbacks). */
export function t(value, locale) {
    if (typeof value === 'string')
        return value;
    return value[locale] ?? value.pt ?? Object.values(value)[0] ?? '';
}
/** Formata um número como moeda segundo a LocaleConfig do tenant. */
export function money(value, locale) {
    return new Intl.NumberFormat(locale.default, {
        style: 'currency',
        currency: locale.currency,
    }).format(value);
}
/**
 * Emite a string de CSS vars, traduzindo tokens canónicos para os nomes de
 * CSS var de cada app. Usar em `:root{ ${emitCssVars(...)} }`.
 */
export function emitCssVars(tokens, map) {
    return Object.keys(map)
        .filter((k) => map[k] != null && tokens[k] != null)
        .map((k) => `${map[k]}: ${tokens[k]};`)
        .join(' ');
}
