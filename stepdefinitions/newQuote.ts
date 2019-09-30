import { browser, protractor, ElementFinder, element, by } from "protractor";
import { NewQuotePageObject } from "../pages/newQuotePage";
const { When } = require("cucumber");

const newQuote: NewQuotePageObject = new NewQuotePageObject();

When(/^I Select PartyType "(.*?)"$/, async (partyType) => {
    await browser.sleep(2000);
    await newQuote.partyTypeDropDown.click();
    await browser.sleep(2000);
    var partyTypeDropDownOptionsXpath = "//li[@role=\'option\' and text()=\'"+partyType+"\']";
    var partyTypeDropDownOptions  = element(by.xpath(partyTypeDropDownOptionsXpath));
    await partyTypeDropDownOptions.click();
});

When(/^I Select SearchType "(.*?)"$/, async (searchType) => {
    await browser.sleep(2000);
    await newQuote.searchTypeDropDown.click();
    await browser.sleep(2000);
    var searchTypeDropDownOptionsXpath = "//li[@role=\'option\' and text()=\'"+searchType+"\']";
    var searchTypeDropDownOptions  = element(by.xpath(searchTypeDropDownOptionsXpath));
    await searchTypeDropDownOptions.click();
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
    await newQuote.locationStateDropDown.click();
    await browser.sleep(2000);
    var locationStateDropDownOptionsXpath = "//li[@role=\'option\' and text()=\'"+state+"\']";
    var locationStateDropDownOptions  = element(by.xpath(locationStateDropDownOptionsXpath));
    await locationStateDropDownOptions.click();
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
