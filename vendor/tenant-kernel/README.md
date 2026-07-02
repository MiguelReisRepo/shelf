# @mr/tenant-kernel

Contrato único de branding/tenant para o marketplace de apps white-label.
Só **tipos + helpers puros** — zero imports de framework, por isso instala em Astro (Vite) e Next sem conflito.

Spec completa: [`../kernel-config-spec.md`](../kernel-config-spec.md).

## Uso

```bash
npm install          # instala o typescript
npm run build        # tsc → dist/  (correr após cada alteração aos tipos)
```

Nas apps, linkar localmente:

```jsonc
// package.json da app (KFC / barbershop / marketplace)
"dependencies": { "@mr/tenant-kernel": "file:../tenant-kernel" }
```

```ts
import { defineTenant, emitCssVars, t, money } from '@mr/tenant-kernel';
import type { TenantConfig, CatalogModule, BookingModule } from '@mr/tenant-kernel';
```

## O que exporta

- **types** — `TenantConfig`, `BrandConfig`, `ThemeConfig`, `ColorTokens`, `ContactConfig`, `LocaleConfig`, `LogoSpec`, `Locale`, `LocalizedString`
- **modules** — `BookingModule` (barbershop), `CatalogModule` + `Product` (KFC)
- **helpers** — `defineTenant()`, `t()`, `money()`, `emitCssVars()` + `TokenMap`

## Estado

`v0.1.0` — scaffold. Contrato conforme kernel-config-spec §4–§7. Ainda não publicado em npm (decisão: `file:` local até o contrato maturar).
