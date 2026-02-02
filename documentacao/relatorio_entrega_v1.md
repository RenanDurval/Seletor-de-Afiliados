# Seletor de Afiliados - Relatório de Entrega V1.0

O aplicativo foi desenvolvido com Next.js e um design system premium personalizado (Neon/Dark Mode).

## Estrutura do Projeto
- **Landing Page**: `app/page.tsx` - Apresentação com Call to Action.
- **Produtor**: `app/producer/page.tsx` - Dashboard para gestão de produtos.
- **Afiliado**: `app/affiliate/page.tsx` - Marketplace de produtos.
- **Componentes**: `Card`, `Button`, `AdBanner` reutilizáveis.

## Screenshots
Use o comando `npm run dev` para visualizar o projeto em `http://localhost:3000`.

### Como Rodar (Recomendado)
Para garantir que todos os links funcionem corretamente:
1. Vá até a area de trabalho na pasta `seletor de afiliados`.
2. Execute o script: `python run_server.py`
3. O navegador abrirá automaticamente.

### Landing Page
Design imersivo com gradientes e glassmorphism.

### Autenticação
- **Login**: Acesso via `/login`.
- **Credenciais**: Como é um protótipo, qualquer email/senha funciona. O tipo de conta (Produtor/Afiliado) é salvo no navegador (localStorage).

### Detalhes do Produto
- **Visualização**: Clique em qualquer produto no dashboard de afiliado.
- **Ação**: Botão "Solicitar Afiliação" simula a conversão.
- **Deeplink**: Suporte a links diretos (ex: `http://localhost:3000/product?id=1`).

### Iteration 3: Final Polish (V1.0)
- **My Affiliations**: New dashboard for affiliates to track their selected products.
- **Profile Settings**: Page to manage user details (Name, Bio, PIX Key) with localStorage persistence.
- **UX Enhancements**: Replaced native browser alerts with a custom, high-end `Toast` notification system.
- **Deployment Ready**: Added Vercel deployment guide and optimized build settings.

### Mobile Polish
- Added `responsive-grid` and `touch-target` utilities.
- Implemented Hamburger Menu for mobile navigation.
- Verified layout on simulated iPhone SE and Pixel 5 viewports.

## Verification Results

### Automated Build Verification
- Command: `npm run build`
- Result: **Success**
- Output contains static generation for all routes: ``, `/login`, `/producer`, `/affiliate`, `/product`, `/profile`, `/affiliate/my-products`.

### Manual Testing features
1. **Producer Flow**: Create Product -> Toast Success -> List Update.
2. **Affiliate Flow**: Select Product -> Toast Success -> Redirect to My Products -> Verify List.
3. **Profile Flow**: Edit Bio -> Save -> Toast Success -> Reload -> Persistence Verify.

### Polimento Mobile
- **Responsividade**: Grids se adaptam automaticamente (1 coluna no mobile, multiplas no desktop).
- **Tipografia**: Títulos ajustados para telas pequenas.
- **Touch**: Botões e Cards com áreas de toque otimizadas.

### Dashboards
Interfaces dedicadas para Produtores (Cadastrar produtos) e Afiliados (Escolher produtos). Somente acessíveis após login.

## Próximos Passos
- Implementar autenticação real.
- Conectar com banco de dados.
- Adicionar mais animações interativas.
