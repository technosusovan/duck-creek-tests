import { by, ElementFinder, element } from "protractor";

export class LoginPageObject {
    public usernameTextBox: ElementFinder;
    public passwordTextBox: ElementFinder;
    public loginButton: ElementFinder;

    constructor() {
        this.usernameTextBox = element(by.id('username-inputEl'));
        this.passwordTextBox = element(by.id('password-inputEl'));
        this.loginButton = element(by.xpath('//a[@name=\'home\']/span'));
    }
}
