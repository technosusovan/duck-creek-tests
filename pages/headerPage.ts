import { by, ElementFinder, element } from "protractor";

export class HeaderPageObject {
    public newQuoteLink: ElementFinder;
    public logoutLink: ElementFinder;


    constructor() {
        this.newQuoteLink = element(by.id('id_New'));
        this.logoutLink = element(by.id('id_LogOut'));
    }
}
