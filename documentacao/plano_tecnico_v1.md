# Plano de Implementação: App Seletor de Afiliados (V1.0)

Este plano descreve o desenvolvimento de uma aplicação web para conectar produtores a afiliados. O app será gratuito, monetizado via anúncios, e terá um design premium e dinâmico.

## User Review Required
> [!NOTE]
> O app será construído utilizando **Next.js** e **Vanilla CSS** para garantir performance e personalização visual total, conforme as diretrizes de design premium.
> A monetização será representada por placeholders visuais de anúncios.

## Proposed Changes

### Setup Inicial
#### [NEW] [package.json](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/package.json)
- Configuração do projeto Next.js.

### Estilização Core (Design System)
#### [NEW] [globals.css](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/styles/globals.css)
- Definição de variáveis CSS para paleta de cores premium (Dark mode, gradients, neon accents).
- Reset CSS e tipografia (Inter/Roboto).

### Componentes UI
#### [NEW] [Button.js](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/components/Button.js)
- Componente de botão com efeitos de hover e variantes.
#### [NEW] [Card.js](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/components/Card.js)
- Container com efeito de glassmorphism para listagens.
#### [NEW] [AdBanner.js](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/components/AdBanner.js)
- Componente para exibir anúncios.

### Páginas (Rotas - App Router)
#### [MODIFY] [app/page.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/app/page.tsx)
- Landing page com "Call to Action" e seleção de perfil (Produtor/Afiliado).
#### [NEW] [app/producer/page.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/app/producer/page.tsx)
- Dashboard do produtor para anunciar produtos.
#### [NEW] [app/affiliate/page.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/app/affiliate/page.tsx)
- Feed de produtos disponíveis para afiliação.

## Iteration 2: Advanced Features

### Authentication (LocalStorage)
#### [NEW] [context/AuthContext.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/context/AuthContext.tsx)
- Gerencia estado do usuário (Produtor/Afiliado) e persiste em `localStorage`.
#### [NEW] [app/login/page.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/app/login/page.tsx)
- Tela de login simples com seleção de tipo de conta.

### Product Details
#### [NEW] [services/productService.ts](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/services/productService.ts)
- Simula um banco de dados de produtos (CRUD) persistido no `localStorage`.
#### [NEW] [app/product/page.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/app/product/page.tsx)
- Página de detalhes do produto. Usará Query Params (`?id=1`) para compatibilidade total com Static Export sem rebuilds.

### Mobile Optimization
- Revisão de todos os arquivos CSS/Styles para garantir que grids se tornem colunas únicas em telas < 768px.

## Iteration 3: Final Polish

### Dashboard & Profile
#### [NEW] [app/affiliate/my-products/page.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/app/affiliate/my-products/page.tsx)
- Lista de produtos que o afiliado já solicitou afiliação.
#### [NEW] [app/profile/page.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/app/profile/page.tsx)
- Edição de perfil (Nome, Bio, Email).

### UX Components
#### [NEW] [components/Toast.tsx](file:///c:/Users/renan/Desktop/seletor%20de%20afiliados/seletor-app/components/Toast.tsx)
- Sistema simples de notificação para substituir `alert()`.

## Verification Plan

### Automated Tests
- Verificar build do Next.js (`npm run build`).

### Manual Verification
- Navegar entre Landing Page -> Produtor.
- Navegar entre Landing Page -> Afiliado.
- Testar responsividade e efeitos visuais.
