import { browser, protractor } from "protractor";
import { NewQuotePageObject } from "../pages/newQuotePage";
const { When} = require("cucumber");

const newQuote: NewQuotePageObject = new NewQuotePageObject();

When(/^I Select PartyType "(.*?)"$/, async (partyType) => {
    await browser.sleep(2000);
    await newQuote.partyTypeDropDown.sendKeys(partyType);
});

When(/^I Select SearchType "(.*?)"$/, async (searchType) => {
    await browser.sleep(2000);
    await newQuote.searchTypeDropDown.click();
    await browser.sleep(2000);
    await newQuote.searchTypeDropDownOptions.click();
});

When(/^I Enter First Name "(.*?)"$/, async (firstName) => {
    await browser.sleep(2000);
    await newQuote.firstNameTextBox.sendKeys(firstName);
});

When(/^I Enter Last Name "(.*?)"$/, async (lastName) => {
    await browser.sleep(2000);
    await newQuote.lastNameTextBox.sendKeys(lastName);
});

When(/^I Select Location State "(.*?)"$/, async (state) => {
    await browser.sleep(2000);
    await newQuote.locationStateDropDown.sendKeys((protractor.Key as any).chord(protractor.Key.CONTROL, "a"));
    await browser.sleep(2000);
    await newQuote.locationStateDropDown.sendKeys(state);
});

When(/^I Click On Run Clearance Button$/, async () => {
    await browser.sleep(3000);
    browser.executeScript('arguments[0].scrollIntoView()', newQuote.runClearanceButton.getWebElement());
    await newQuote.runClearanceButton.click();
});

When(/^I Click On New Quote Button$/, async () => {
    await browser.sleep(2000);
    await newQuote.newQuoteButton.click();
});
