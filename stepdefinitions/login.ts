import { browser, protractor } from "protractor";
import { LoginPageObject } from "../pages/loginPage";
const { When, Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const login: LoginPageObject = new LoginPageObject();

Given(/^I Am On Duck Creek Login Page$/, async () => {
    expect(browser.getTitle()).to.eventually.equal("Duck Creek Technologies");
});

When(/^I Enter Username "(.*?)"$/, async (username) => {
    await login.usernameTextBox.sendKeys(username);
});

When(/^I Enter Password "(.*?)"$/, async (password) => {
    await login.passwordTextBox.sendKeys(password);
});

When(/^I Click On Login Button$/, async () => {
    await login.loginButton.click();
});
