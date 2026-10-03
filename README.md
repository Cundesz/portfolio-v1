# portfolio-v1 — João Facundes

Portfólio pessoal em **Next.js 14 + TypeScript + Tailwind**, com fundo em constelação 3D (three.js via npm) que reage ao mouse e ao scroll.

## Como rodar

```sh
npm install
npm run dev   # http://localhost:3000
```

## Estrutura

```
app/
  layout.tsx      # fontes, metadata
  page.tsx        # monta as seções
  globals.css     # tema grafite + ciano
  icon.svg        # favicon
components/
  Constellation.tsx  # cena 3D (three.js)
  Boot.tsx Hud.tsx Hero.tsx
  Sobre.tsx Skills.tsx Trabalhos.tsx Contato.tsx Footer.tsx
  Reveal.tsx         # reveal on scroll
public/
  cv.pdf        # botão "Baixar CV"
  avatar.jpg    # sua foto (adicione com esse nome p/ ativar o retrato)
```

## Deploy

Pronto para a Vercel: é só importar o repo `Cundesz/portfolio-v1`. O `next build` já foi validado localmente.

Demo do ERP Lite: https://erplite-rho.vercel.app — login `admin@erp.com` / `admin123`
