import { test, expect } from '@playwright/test';
 
test("homework", async ({ page }) => {
    // place for your homework code
    await page.goto("https://team8-2022brno.herokuapp.com/registrace");
    //CSS Jméno a Příjmení
    await page.locator("input#name").fill("Pavla Šindelářová").screenshot({ path : "jmeno_css.png"});
    //Xpath Jméno a Příjmení
    await page.locator("//input[@id='name']").fill("Pavla Šindelářová").screenshot({ path : "jmeno_xpath.png"});
    //Playwright Jméno a Příjmení
    await page.getByLabel("Jméno a příjmení").fill("Pavla Šindelářová").screenshot({ path : "jmeno_pw.png"});

    //CSS Email
    await page.locator("input#email").fill("pavla.sindelar@gmail.com").screenshot({ path : "email_css.png"});
    //Xpath Email
    await page.locator("//input[@id='email']").fill("pavla.sindelar@gmail.com").screenshot({ path : "email_xpath.png"});
    //Playwright Email
    await page.getByLabel("Email").fill("pavla.sindelar@gmail.com").screenshot({ path : "email_pw.png"});

    //CSS Heslo
    await page.locator("input#password").fill("12345").screenshot({ path : "heslo_css.png"});
    //Xpath Heslo
    await page.locator("//input[@id='password']").fill("12345").screenshot({ path : "heslo_xpath.png"});
    //Playwright Heslo
    await page.getByLabel("Heslo").fill("12345").screenshot({ path : "heslo_pw.png"});

    //CSS Kontrola hesla
    await page.locator("input#password-confirm").fill("12345").screenshot({ path : "kontrola_css.png"});
    //Xpath Kontrola hesla
    await page.locator("//input[@id='password-confirm']").fill("12345").screenshot({ path : "kontrola_xpath.png"});
    //Playwright Kontrola hesla
    await page.getByLabel("Kontrola hesla").fill("12345").screenshot({ path : "kontrola_pw.png"});

    //CSS Registrace
    await page.locator(".btn-primary").click();
    await page.screenshot({ path : "registrace.png"});
    //Xpath Registrace
    await page.locator("//button[@type='submit']").click();
    await page.screenshot({ path : "registrace_xpath.png"});
    //Playwright Registrace
    await page.getByText("Zaregistrovat").click();
    await page.screenshot({ path : "registrace_pw.png"});
    console.log(await page.title());
});