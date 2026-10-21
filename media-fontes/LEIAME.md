# Arquivos originais

Fotos e vídeo em qualidade original, **fora de `public/`** de propósito: nada
aqui é servido pelo site. O que vai para o ar está em `public/media/`, já
redimensionado, convertido para WebP e — no caso do vídeo — recortado e
com correção de cor.

Deixar o MP4 de 11 MB dentro de `public/` significaria publicá-lo inteiro
junto com o site, sem que nenhuma página o usasse.

## Como regerar o que está em `public/media/`

**Sem correção de cor.** Houve uma versão graduada (para neutralizar a luz de
palco magenta), e ela foi descartada: escurecia demais e tirava o natural.
A cor é a da fonte; o que muda é só a compressão.

- `igor-pitch-loop.mp4` — trecho de 20s a 34s, `-crf 18 -preset veryslow`
  (é o trecho em que ele aparece sozinho, centralizado e gesticulando)
- `igor-pitch-full.mp4` — íntegra, `-crf 22 -preset slow`
- `igor-pitch-poster.webp` — quadro em t=26s, `-quality 94`
- `igor-palco.webp` — a foto, `-quality 94`

O vídeo não tem faixa de áudio: `-an` em tudo, e o site o trata como mudo.

Capturas dos projetos: Playwright com o Chrome do sistema
(`/opt/google/chrome/chrome`), viewport 1440×900, `deviceScaleFactor: 2`,
convertidas com `ffmpeg -c:v libwebp -quality 80`.
