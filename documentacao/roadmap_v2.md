# Roadmap de Evolução: Seletor de Afiliados (V2.0)

Este documento descreve as funcionalidades planejadas para a próxima grande versão do sistema, focando em profissionalização, backend real e monetização ativa.

## 1. Backend & Infraestrutura
- [ ] **Integração com Supabase**
    - Substituir `localStorage` por banco de dados real PostgreSQL.
    - Tabelas: `users`, `products`, `affiliations`, `transactions`.
- [ ] **Autenticação Segura**
    - Implementar Supabase Auth ou Clerk.
    - Login Social (Google, LinkedIn).
    - Proteção real de rotas no servidor (Middleware).

## 2. Monetização & Pagamentos
- [ ] **Integração Gateway de Pagamento**
    - Stripe ou Mercado Pago.
    - Checkout transparente para compra de produtos.
- [ ] **Split de Pagamentos**
    - Distribuição automática de comissão (Produtor x Afiliado x Plataforma).
- [ ] **Assinatura Premium**
    - Plano para Produtores destacarem produtos.

## 3. Painel Administrativo
- [ ] **Admin Dashboard**
    - Moderação de produtos e usuários.
    - Visão geral de faturamento e métricas.
    - Gestão de banners de publicidade.

## 4. Analytics Avançado
- [ ] **Dashboard de Vendas**
    - Gráficos de conversão para Produtores.
    - Histórico de cliques para Afiliados.
- [ ] **Tracking de Links**
    - Contador de cliques nos links de afiliado.

## Tech Stack Sugerida V2
- **Backend**: Supabase (Postgres + Auth + Edge Functions)
- **Email**: Resend (Emails transacionais)
- **Pagamentos**: Stripe
- **Frontend**: Manter Next.js 15+
