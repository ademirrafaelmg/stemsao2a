# Recursos de acessibilidade no site

Adicionar as opções de acessibilidade mais comuns em sites institucionais brasileiros, sem alterar o layout ou o conteúdo atual.

## Barra/menu de acessibilidade

Um botão fixo (ícone de acessibilidade, canto inferior direito) abre um painel com:

- **Aumentar / diminuir texto** — três níveis (normal, maior, máximo) aplicados a todo o site.
- **Alto contraste** — versão escura de alto contraste da paleta atual.
- **Modo em escala de cinza** — para sensibilidade a cores.
- **Sublinhar links** — destaca todos os links.
- **Reduzir animações** — desliga transições e o movimento automático dos carrosséis.
- **Restaurar padrões** — volta tudo ao estado original.

As escolhas ficam salvas no navegador da pessoa, valendo nas próximas visitas.

## Melhorias estruturais

- Link "Ir para o conteúdo principal" no topo, visível ao navegar por teclado.
- Contorno de foco visível e consistente em todos os links, botões e campos.
- Rótulos em botões que hoje só têm ícone (setas dos carrosséis, menu, itens das oficinas) e textos alternativos revisados nas imagens/logos.
- Áreas de toque mínimas de 44px nos botões pequenos em celular.
- Respeito automático à preferência do sistema por menos animações.
- Verificação de contraste nos textos sobre fundo roxo e sobre fotos.

## Detalhes técnicos

- Novo `src/components/site/AccessibilityMenu.tsx` (painel + botão flutuante), montado em `src/routes/__root.tsx` para valer em todas as rotas.
- Estado persistido em `localStorage` via um hook próprio; classes utilitárias aplicadas em `document.documentElement` (`a11y-contrast`, `a11y-grayscale`, `a11y-underline`, `a11y-reduce-motion`, `a11y-font-1/2`).
- Tokens e regras dessas classes definidos em `src/styles.css`, sobrescrevendo variáveis semânticas — sem cores literais nos componentes.
- Skip link e `id="conteudo"` no `<main>` já existente em `src/routes/index.tsx`.
- Ajustes de `aria-label`, `aria-expanded`, `alt` e foco em `Header.tsx`, `Footer.tsx`, `Workshops.tsx` e nos carrosséis de `index.tsx`.
- Verificação final com build e captura de tela em desktop e mobile, incluindo navegação por teclado.
