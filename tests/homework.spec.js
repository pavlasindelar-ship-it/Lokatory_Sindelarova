import { test, expect } from '@playwright/test';
 
test("homework", async ({ page }) => {
    // place for your homework code
    await page.goto("https://team8-2022brno.herokuapp.com/registrace");
    //CSS Jméno a Příjmení
    await page.locator("input#name").fill("Pavla Šindelářová");
    await page.locator("input#name").screenshot({ path : "jmeno_css.png"});
    //Xpath Jméno a Příjmení
    await page.locator("//input[@id='name']").fill("Pavla Šindelářová");
    await page.locator("//input[@id='name']").screenshot({ path : "jmeno_xpath.png"});
    //Playwright Jméno a Příjmení
    await page.getByLabel("Jméno a příjmení").fill("Pavla Šindelářová");
    await page.getByLabel("Jméno a příjmení").screenshot({ path : "jmeno_pw.png"});

    //CSS Email
    await page.locator("input#email").fill("pavla.sindelar@gmail.com");
    await page.locator("input#email").screenshot({ path : "email_css.png"});
    //Xpath Email
    await page.locator("//input[@id='email']").fill("pavla.sindelar@gmail.com");
    await page.locator("//input[@id='email']").screenshot({ path : "email_xpath.png"});
    //Playwright Email
    await page.getByLabel("Email").fill("pavla.sindelar@gmail.com");
    await page.getByLabel("Email").screenshot({ path : "email_pw.png"});

    //CSS Heslo
    await page.locator("input#password").fill("12345");
    await page.locator("input#password").screenshot({ path : "heslo_css.png"});
    //Xpath Heslo
    await page.locator("//input[@id='password']").fill("12345");
    await page.locator("//input[@id='password']").screenshot({ path : "heslo_xpath.png"});
    //Playwright Heslo
    await page.getByLabel("Heslo").fill("12345");
    await page.getByLabel("Heslo").screenshot({ path : "heslo_pw.png"});

    //CSS Kontrola hesla
    await page.locator("input#password-confirm").fill("12345");
    await page.locator("input#password-confirm").screenshot({ path : "kontrola_css.png"});
    //Xpath Kontrola hesla
    await page.locator("//input[@id='password-confirm']").fill("12345");
    await page.locator("//input[@id='password-confirm']").screenshot({ path : "kontrola_xpath.png"});
    //Playwright Kontrola hesla
    await page.getByLabel("Kontrola hesla").fill("12345");
    await page.getByLabel("Kontrola hesla").screenshot({ path : "kontrola_pw.png"});

    //CSS Registrace
    await page.locator(".btn-primary").click();
    await page.locator(".btn-primary").screenshot({ path : "registrace.png"});
    //Xpath Registrace
    await page.locator("//button[@type='submit']").click();
    await page.locator("//button[@type='submit']").screenshot({ path : "registrace_xpath.png"});
    //Playwright Registrace
    await page.getByText("Zaregistrovat").click();
    await page.getByText("Zaregistrovat").screenshot({ path : "registrace_pw.png"});
    console.log(await page.title());
});
