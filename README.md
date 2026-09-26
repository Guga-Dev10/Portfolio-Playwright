# 🚀 Portfólio de Automação de Testes - Playwright

Bem-vindo ao meu portfólio de Engenharia de Qualidade (QA) e Automação de Testes. Este repositório foi construído com foco em arquitetura moderna e testes ponta-a-ponta (E2E) de alta performance utilizando o ecossistema Playwright e TypeScript.

## 🎯 Objetivo
Demonstrar a aplicação prática de engenharia de software na qualidade, desde a configuração inicial até a implementação de testes resilientes, rápidos e escaláveis.

## 🛠️ Tecnologias Utilizadas
- **Linguagem:** TypeScript / Node.js
- **Framework de Teste:** Playwright
- **Ferramental Auxiliar:** tsx (TypeScript Execute)
- **Controle de Versão:** Git / GitHub Actions (CI/CD)

## 🧪 Cenários Cobertos
Os testes são executados contra o site de demonstração [SauceDemo](https://www.saucedemo.com/).

| Arquivo | Cenário |
|---|---|
| `tests/login.spec.ts` | Login com sucesso usando credenciais válidas (`standard_user`) e validação do redirecionamento para a página de produtos |

## 📁 Estrutura do Projeto
```text
📦 Portifolio-Playwright
 ┣ 📂 .github
 ┃ ┗ 📂 workflows
 ┃   ┗ 📜 playwright.yml    # Pipeline de CI: executa os testes a cada push/PR na main
 ┣ 📂 tests                 # Especificações de testes (arquivos .spec.ts)
 ┃ ┗ 📜 login.spec.ts       # Teste E2E de login no SauceDemo
 ┣ 📜 .gitignore            # Arquivo de segurança (ignora node_modules e artefatos)
 ┣ 📜 package.json          # Identidade do projeto e dependências (Playwright, tsx)
 ┣ 📜 playwright.config.ts  # O "cérebro" da automação (configurações, timeouts, browsers)
 ┗ 📜 README.md             # Documentação do projeto (este arquivo)
```

## ▶️ Como Executar

**Pré-requisito:** [Node.js](https://nodejs.org/) (versão LTS)

```bash
# Instalar as dependências
npm ci

# Instalar os navegadores do Playwright
npx playwright install

# Executar todos os testes (Chromium, Firefox e WebKit)
npx playwright test

# Executar com o navegador visível
npx playwright test --headed

# Abrir o relatório HTML da última execução
npx playwright show-report
```

## ⚙️ Integração Contínua
A cada `push` ou `pull request` na branch `main`, o GitHub Actions instala as dependências, executa a suíte de testes e publica o relatório HTML como artefato da execução (retido por 30 dias).
