# Plataforma Web para ONGs — ONG Cruzeiro do Sul

Entrega I (HTML5) concluída, Entrega II (CSS3) implementada e Entrega III (JS) adicionada: design system modular, leiautes responsivos (Grid/Flex), navegação com dropdown e menu hambúrguer, componentes de interface (cards, botões, formulários com feedback, alerts, toasts e modal) e SPA básica em JavaScript com templates, validação e armazenamento local.

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
     │  ├─ main.js            # máscaras, menu mobile, toast e modal
     │  ├─ router.js          # roteador por hash (SPA)
     │  ├─ templates.js       # templates HTML em strings
     │  ├─ forms.js           # máscaras e verificação de consistência (CPF, e-mail, tel, CEP, data)
     │  ├─ storage.js         # rascunho de formulário em localStorage
     │  └─ app.js             # bootstrap da SPA (montagem e pós-render)
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

## Entrega III — Destaques (JavaScript)
- SPA básica via hash com rotas: `#/`, `#/projetos`, `#/cadastro`.
- Templates JavaScript para render dinâmico de seções.
- Verificação de consistência em formulários (CPF com dígitos verificadores, e-mail, telefone, CEP, data plausível) com feedback visual e mensagens ao usuário.
- Salvamento automático de rascunho do formulário em `localStorage` e restauração ao retornar.

## Como testar
1. Abra `index.html` no navegador.
2. Teste a SPA: use os links `#/...` (Home, Projetos, Cadastro). O conteúdo do `<main>` é atualizado sem recarregar a página.
3. Reduza a largura da janela para ver o menu hambúrguer e clique em “☰ Menu”.
4. No desktop, passe o mouse (ou use TAB) sobre “Projetos” para abrir o dropdown.
5. Na home, clique em “Mostrar toast” e “Abrir modal de novidades”.
6. Em `#/cadastro`, digite dados inválidos para ver os avisos; o rascunho é salvo e reaplicado ao voltar.

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
- Alto contraste: botão "Alto contraste" no cabeçalho ativa `html[data-contrast="high"]` (persistência em `localStorage`). Navegação por teclado em dropdown (Enter/Espaço alterna `aria-expanded`).

## Entrega IV — Versionamento, Acessibilidade e Deploy

### Versionamento (Git/GitHub)
- GitFlow sugerido: `main` (prod), `develop` (integração), `feature/*`, `release/*`, `hotfix/*`.
- Commits semânticos (Conventional Commits): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`.
- Releases com versionamento semântico (SemVer): `vX.Y.Z` e changelog por versão.

### Acessibilidade (WCAG 2.1 AA)
- Teclado: dropdown acessível por `:focus-within` e tecla Enter/Espaço para alternar `aria-expanded`.
- Leitores de tela: uso de landmarks e `aria-*` nos componentes (menu, submenu, modal, toasts com `aria-live`).
- Contraste: tema base escuro com razão ≥ 4.5:1; modo de alto contraste disponível.

### Otimização/Deploy
- Minificação recomendada: HTML/CSS/JS (pode-se usar ferramentas locais como esbuild/terser/csso). Opcional: gerar pasta `dist/` com arquivos minificados para deploy.
- Imagens: usar SVG/WEBP otimizados.
- Deploy sugerido: GitHub Pages (Configurar Pages em `main`/`/root`).


## Imagens
- SVGs otimizados como placeholders (substitua por fotos reais quando disponível).
- Para fotos, prefira formatos `webp`/`avif` com versões responsivas.

## Licença
Uso educacional.


