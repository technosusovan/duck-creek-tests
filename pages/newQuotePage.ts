import { by, ElementFinder, element } from "protractor";

export class NewQuotePageObject {
    public partyTypeDropDown: ElementFinder;
    public searchTypeDropDown: ElementFinder;
    public searchTypeDropDownOptions: ElementFinder;
    public firstNameTextBox: ElementFinder;
    public lastNameTextBox: ElementFinder;
    public locationStateDropDown: ElementFinder;
    public locationStateDropDownOptions: ElementFinder;
    public runClearanceButton: ElementFinder;
    public newQuoteButton: ElementFinder;

    constructor() {
        this.partyTypeDropDown = element(by.xpath('//input[@fieldref=\'PartyClearanceInput.PartyType\']'));
        this.searchTypeDropDown = element(by.xpath('//input[@fieldref=\'PartyClearanceInput.SearchType\']'));
        this.searchTypeDropDownOptions = element(by.xpath('//li[@role=\'option\' and text()=\'Name and Address\']'));
        this.firstNameTextBox = element(by.xpath('//input[@fieldref=\'PartyClearanceInput.FirstName\']'));
        this.lastNameTextBox = element(by.xpath('//input[@fieldref=\'PartyClearanceInput.PartyName\']'));
        this.locationStateDropDown = element(by.xpath('//input[@fieldref=\'PartyClearanceInput.LocationState\']'));
        this.locationStateDropDownOptions = element(by.xpath('/li[@role=\'option\' and @data-qtip=\'CT\']'));
        this.runClearanceButton = element(by.linkText('Run Clearance'));
        this.newQuoteButton = element(by.xpath('//span[@class=\'g-btn-text\' and text()=\'New Quote\']'));
    }
}
