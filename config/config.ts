import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const { Authenticator } = require('authenticator-browser-extension/lib');
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://MOWS1270X.eastus2.cloudapp.azure.com/Express_Instance_17R2/default.aspx",

    capabilities: {
        browserName: "MicrosoftEdge",
        elementScrollBehavior: 1,
        nativeEvents: false
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@CucumberScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
