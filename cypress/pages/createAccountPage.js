class createAccountPage{
    
    inputTextForField(fieldName, inputText) {
        cy.xpath(`//div[./label[text()='${fieldName}']]//input`).type(inputText);
    }
    
    selectTextFromSuggestionForAddress(selectedText) {
       cy.wait(2000);
       cy.xpath(`//ul[@data-automation='address-suggestion']//li[./p[text()='${selectedText}']]`).click();
       cy.wait(2000);
    }
    
}
module.exports = new createAccountPage();