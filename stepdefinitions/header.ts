import { browser, protractor } from "protractor";
import { HeaderPageObject } from "../pages/headerPage";
const { When} = require("cucumber");

const header: HeaderPageObject = new HeaderPageObject();

When(/^I Click On New Quote Link$/, async () => {
    await browser.sleep(2000);
    await header.newQuoteLink.click();
});

When(/^I Click On Logout Link$/, async () => {
    await browser.sleep(2000);
    await header.logoutLink.click();
    await browser.sleep(2000);
});