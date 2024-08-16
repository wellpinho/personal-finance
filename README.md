# Rules
Criar um diagrama relacional para um sistema de finanças pessoais envolve identificar as principais entidades e suas relações. Aqui está uma lista das possíveis entidades e suas relações:

um exemplo simples para apoio no desenvolvimento: https://chatgpt.com/c/230a03d0-60e3-4064-b81f-8c1fb9617219

1. Usuário (User)
Atributos: ID_Usuário (PK), Nome, Email, Senha, Data_Cadastro
Relação: Um usuário pode ter várias contas bancárias, transações e orçamentos.

2. Conta Bancária (Bank_Account)
Atributos: ID_Conta (PK), ID_Usuário (FK), Nome_Banco, Tipo_Conta, Saldo, Data_Abertura
Relação: Uma conta bancária pertence a um usuário e pode ter muitas transações.

3. Transação (Transaction)
Atributos: ID_Transação (PK), ID_Conta (FK), Tipo (Receita/Despesa), Valor, Data_Transação, Descrição, Categoria_ID (FK)
Relação: Uma transação pertence a uma conta bancária e pode ter uma categoria.

4. Categoria (Category)
Atributos: ID_Categoria (PK), Nome_Categoria, Tipo (Receita/Despesa)
Relação: Uma categoria pode ser atribuída a muitas transações.

5. Orçamento (Budget)
Atributos: ID_Orçamento (PK), ID_Usuário (FK), Mês, Ano, Valor_Limite, Categoria_ID (FK)
Relação: Um orçamento pertence a um usuário e pode estar associado a uma categoria específica.

6. Meta Financeira (Financial_Goal)
Atributos: ID_Meta (PK), ID_Usuário (FK), Nome_Meta, Valor_Objetivo, Valor_Atual, Data_Início, Data_Fim
Relação: Uma meta financeira pertence a um usuário.

7. Investimento (Investment)
Atributos: ID_Investimento (PK), ID_Usuário (FK), Tipo_Investimento, Valor_Inicial, Valor_Atual, Data_Início, Data_Fim
Relação: Um investimento pertence a um usuário.

8. Lembrete de Pagamento (Payment_Reminder)
Atributos: ID_Lembrete (PK), ID_Usuário (FK), Descrição, Valor, Data_Vencimento
Relação: Um lembrete de pagamento pertence a um usuário.

9. Relatório (Report)
Atributos: ID_Relatório (PK), ID_Usuário (FK), Tipo_Relatório, Data_Início, Data_Fim, Conteúdo
Relação: Um relatório pertence a um usuário.
Relações Entre as Entidades:
Usuário - Conta Bancária: 1
(Um usuário pode ter várias contas bancárias)
Conta Bancária - Transação: 1
(Uma conta bancária pode ter várias transações)
Transação - Categoria: N:1 (Muitas transações podem pertencer a uma categoria)
Usuário - Orçamento: 1
(Um usuário pode definir vários orçamentos)
Usuário - Meta Financeira: 1
(Um usuário pode ter várias metas financeiras)
Usuário - Investimento: 1
(Um usuário pode ter vários investimentos)
Usuário - Lembrete de Pagamento: 1
(Um usuário pode ter vários lembretes de pagamento)
Usuário - Relatório: 1
(Um usuário pode gerar vários relatórios)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
