# igorcruz.com.br

Portfólio de Igor Cruz. Next.js 14 (App Router), TypeScript e CSS Modules.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Como está organizado

```
src/
  content/site.ts          fonte única de conteúdo (tipada)
  app/
    page.tsx               home
    trabalho/[slug]/       cases curtos
    trabalho/studytrack/   case longo
  components/
    ui/                    primitivas (Reveal, Lines, SectionHead, Icons)
    layout/                Nav, Footer
    home/                  seções da home
    trabalho/              peças compartilhadas pelos cases
public/media/              imagens e vídeo servidos
media-fontes/              originais, fora do que é servido
```

### `src/content/site.ts`

Todo o texto e todo o número da página saem daqui — nenhum componente tem
conteúdo escrito dentro. Cada número carrega um campo `fonte` dizendo de onde
ele veio (repositório, site no ar, perfil público). Se uma afirmação não tem
origem verificável, ela não entra no arquivo.

Mudar um texto do site é editar este arquivo, não caçar JSX.

## Decisões que não são óbvias

**Não existe alternador de tema.** As seções alternam entre grafite e papel de
propósito; deixar o visitante inverter isso quebraria o ritmo da página. As
cores são absolutas, não pares claro/escuro.

**Sem biblioteca de animação.** As revelações são CSS (`.reveal`, `.line-mask`)
ligadas por um `IntersectionObserver` de ~40 linhas. A paralaxe do hero escreve
duas custom properties e deixa o CSS transformar — sem re-render do React. O
resultado é a home em ~108 kB de JS.

**Movimento reduzido é tratado de verdade.** Com `prefers-reduced-motion`, o
vídeo do hero é substituído pelo pôster (não só "sem transição"), e as
revelações entregam o conteúdo direto.

**Mídia pesada mora fora de `public/`.** Ver `media-fontes/LEIAME.md` para como
regerar o que é servido.

## Verificações feitas

- Contraste AA em todas as combinações de cor das páginas
- Um `<h1>` por página, hierarquia de títulos sem salto, `lang="pt-BR"`
- Toda imagem com `alt`, todo link com nome acessível, foco visível em tudo
- Sem rolagem horizontal em 390 / 768 / 1440
- `sitemap.xml`, `robots.txt`, Open Graph e JSON-LD (`Person`)
