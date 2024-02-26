import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const registerPage = require('../../pages/createAccountPage');
const commonPage = require('../../pages/commonPage');

// Before(() => {
//     // reset application
//     cy.request('POST', '/api/reset')
// })

Given("I open the create account page", () => {
    cy.visit("https://www.myer.com.au/join")
})

When("Input {string} for field {string}", (inputText, fieldName) => {
    registerPage.inputTextForField(fieldName, inputText);
})

And ("Click on {string} button", (buttonLabel)=>{
    commonPage.clickButtonByText(buttonLabel);
})

And('Input fields to create new account as below', (dataTable) => {
    var inputText;
    dataTable.hashes().forEach(element => {
        for (var field in element) {
            inputText = element[field];
            cy.log(field);
            cy.log(inputText);
            registerPage.inputTextForField(field, inputText);
        }
    });
})

And('Select text from suggestion for Address as below', (dataTable) => {
    var field = "Address Finder";
    dataTable.hashes().forEach(element => {
        var inputText = element["Input text"];
        var selectedText = element["Select text"];
        registerPage.inputTextForField(field, inputText);
        registerPage.selectTextFromSuggestionForAddress(selectedText);

    });
    
})



