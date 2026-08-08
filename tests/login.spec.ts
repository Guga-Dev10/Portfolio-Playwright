import { test, expect } from '@playwright/test';

// 'test' é a função principal. Damos um nome claro ao que estamos testando.
test('Deve realizar login com sucesso usando credenciais válidas', async ({ page }) => {
    
    // 1. ARRANGE (Preparar)
    // O 'await' é obrigatório no Playwright. Ele diz ao código: "Espere a página carregar antes de continuar".
    await page.goto('https://www.saucedemo.com/');

    // 2. ACT (Agir)
    // Localizamos os elementos na tela e realizamos as ações de digitar (fill) e clicar (click).
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // 3. ASSERT (Afirmar)
    // O 'expect' é a nossa validação. Se isso for falso, o teste falha. 
    // Aqui verificamos se fomos redirecionados para a página de inventário.
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    // Validamos também se o título da página de produtos está visível
    const tituloProdutos = page.locator('[data-test="title"]');
    await expect(tituloProdutos).toHaveText('Products');
});