# Plataforma Web para ONGs — ONG Cruzeiro do Sul

Entrega I (HTML5) concluída e Entrega II (CSS3) implementada: design system modular, leiautes responsivos (Grid/Flex), navegação com dropdown e menu hambúrguer, e componentes de interface (cards, botões, formulários com feedback, alerts, toasts e modal).

## Estrutura de Pastas

```
projeto ong/
  ├─ index.html
  ├─ projetos.html
  ├─ cadastro.html
  └─ assets/
     ├─ css/
     │  ├─ style.css          # ponto único que importa os módulos abaixo
     │  ├─ tokens.css         # cores, tipografia, spacing, breakpoints
     │  ├─ layout.css         # grid 12 colunas, container, helpers flex
     │  ├─ components.css     # header/nav, hero, cards, botões, formulário, feedback
     │  └─ utilities.css      # utilitários (sr-only, skip-link, espaçamentos)
     ├─ js/
     │  └─ main.js            # máscaras, menu mobile, toast e modal
     └─ images/
        ├─ logo.svg
        ├─ hero.svg
        └─ projeto1.svg
```

## Entrega II — Destaques (CSS3)
- Design System com variáveis CSS: paleta (≥8 cores), tipografia (≥5 tamanhos), espaçamentos modulares (8/16/24/32/48/64).
- Grid customizado de 12 colunas com 5 breakpoints (xs 360, sm 480, md 720, lg 960, xl 1200) e helpers flex.
- Navegação responsiva: menu principal com submenu dropdown (hover/focus) e menu hambúrguer no mobile.
- Componentes: cards responsivos, botões com estados hover/focus/active/disabled, formulário com feedback visual (valid/invalid), alerts, toasts e modal.

## Como testar
1. Abra `index.html` no navegador.
2. Reduza a largura da janela para ver o menu hambúrguer e clique em “☰ Menu”.
3. No desktop, passe o mouse (ou use TAB) sobre “Projetos” para abrir o dropdown.
4. Na seção de Feedback da home, clique em “Mostrar toast” e “Abrir modal de novidades”.
5. Em `cadastro.html`, valide os estados do formulário e as máscaras (CPF, telefone, CEP).

## Validação (W3C)
- Valide os arquivos HTML: https://validator.w3.org/
- Valide o CSS: https://jigsaw.w3.org/css-validator/

## Como testar localmente
1. Abra `index.html` no navegador.
2. Use o menu para acessar `projetos.html` e `cadastro.html`.
3. Em `cadastro.html`, teste a validação nativa e as máscaras (CPF, telefone, CEP).

## Acessibilidade e SEO
- Tags semânticas (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Link de "Pular para o conteúdo" e foco visível.
- Contrast ratio adequado; meta tags de SEO e Open Graph.

## Imagens
- SVGs otimizados como placeholders (substitua por fotos reais quando disponível).
- Para fotos, prefira formatos `webp`/`avif` com versões responsivas.

## Licença
Uso educacional.


