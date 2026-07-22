
# Plano: WordPress (.wpress) → site estático

## O que você precisa me enviar

1. **O arquivo `.wpress`** (arraste aqui no chat — limite 20 MB por arquivo; se for maior, me avisa que ajusto a estratégia).
2. **Referência visual do tema atual**, pra eu reproduzir fielmente. Melhor caso: a URL do site no ar (eu tiro screenshots das páginas). Se estiver fora do ar, mande 3–6 screenshots (home, interna, cabeçalho/rodapé, mobile se possível).
3. **Para onde o formulário de contato deve enviar** (um email de destino).

## Etapas

### 1. Extração do .wpress
- Extraio o `.wpress` no sandbox usando o utilitário `wpress-extractor`.
- Isso gera: `database.sql` (todo o conteúdo do WP), `uploads/` (mídia), `plugins/`, `themes/`.
- Uso só `database.sql` + `uploads/`; PHP do tema fica só como referência visual.

### 2. Extração de conteúdo do banco
- Faço parse do `database.sql` (SQLite/duckdb ou regex) pra ler:
  - `wp_posts` filtrando `post_type IN ('page','post')` e `post_status='publish'` → título, slug, HTML do conteúdo, ordem no menu.
  - `wp_options` pra pegar nome do site, tagline, estrutura do menu.
  - `wp_postmeta` pra imagem destacada de cada página.
- Salvo o resultado como JSON em `src/content/pages.json` (conteúdo já limpo, com caminhos de imagem reescritos).

### 3. Mídia
- Copio `wp-content/uploads/**` extraído do .wpress para o projeto.
- Arquivos grandes (>100 KB, imagens/PDF/fontes) vão pro CDN da Lovable via `lovable-assets` — mantém o repo leve.
- Reescrevo todos os `src="/wp-content/uploads/..."` no HTML dos posts pros novos URLs.

### 4. Reprodução do visual
- Analiso as screenshots / site no ar pra extrair: paleta, tipografia, espaçamentos, layout do header/footer, estilo de botão/card.
- Registro tudo como tokens em `src/styles.css` (variáveis `--background`, `--primary`, fontes carregadas via `<link>` no `__root.tsx`).
- Recrio header, footer e componentes de seção em React/Tailwind seguindo o mesmo visual.

### 5. Rotas TanStack (uma por página)
- Uma rota por página do WP em `src/routes/`: ex. `index.tsx` (home), `sobre.tsx`, `servicos.tsx`, `contato.tsx`, etc. — os slugs vêm do próprio WP.
- Cada rota renderiza o HTML da página via `dangerouslySetInnerHTML` sanitizado com **DOMPurify** (impede XSS caso o HTML original tenha script).
- Cada rota com seu próprio `head()`: title, description, og:title, og:description tirados do `<title>`/meta description do WP; og:image = imagem destacada quando existir.
- `sitemap.xml` e `robots.txt` gerados com todas as rotas.

### 6. Formulário de contato
- Ativo **Lovable Cloud** (necessário pra enviar email).
- Uso **Lovable Emails** (built-in, zero config) — envia direto pro email de destino que você indicar.
- Formulário React com validação Zod (nome, email, mensagem — trim + limites de tamanho).
- `createServerFn({ method: 'POST' })` valida no servidor e dispara o email; retorna sucesso/erro pro cliente com toast.
- Sem tabela: o envio é fire-and-forget. (Se quiser salvar histórico também, é só falar — adiciono uma tabela `contact_submissions` com RLS.)

## Detalhes técnicos

- **Sanitização**: `isomorphic-dompurify` em todo HTML importado do WP antes de renderizar, com allowlist mínima de tags.
- **Shortcodes do WP** (`[gallery]`, `[embed]`, etc.) no HTML dos posts serão detectados e listados após extração — decidimos caso a caso (deixar como está / converter pra componente / remover).
- **Formulários do WP** (Contact Form 7, WPForms) no conteúdo são ignorados; substituo pelo formulário novo na rota `/contato`.
- **Plugins interativos** (sliders, popups, JS custom do tema) não são portados automaticamente — se você depender de algum, me diga qual e vejo caso a caso.
- **Comentários, autores, categorias/tags**: fora do escopo confirmado (você marcou só Páginas + Mídia + Contato). Posso adicionar depois.

## O que fica fora deste plano

- Blog / posts individuais (não foi marcado no escopo). Digo antes de extrair se o dump tiver posts relevantes — decidimos se inclui.
- Área logada / e-commerce / qualquer coisa que dependa de PHP em runtime.

## Próximo passo

Assim que aprovar o plano, me envie o `.wpress` + a referência visual (URL ou screenshots) + o email de destino do formulário, e eu começo a extração.
