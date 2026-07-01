# Shelf

White-label app marketplace — a shop-window of ready-to-use business apps that small businesses can try live and buy for their own brand (self-serve template, or done-for-you setup).

Built with **Astro 5** (static) + **Tailwind v4**. Dogfoods the [`@mr/tenant-kernel`](../tenant-kernel) config kernel for theming.

## Products on the shelf

- **Marcações** — booking app (barbershops, salons, aesthetics, clinics)
- **Loja** — online store (small retailers, WhatsApp checkout)

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Note on the kernel dependency

This project depends on `@mr/tenant-kernel` via `file:../tenant-kernel`, which resolves for **local** development only. To build in CI / Vercel, the kernel must first be **published to npm** or **vendored** into this repo.
