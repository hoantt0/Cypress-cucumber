class commonPage{

    clickButtonByText(text){
        cy.xpath(`//button[./span[text()='${text}']]`).click();
    }

}

module.exports = new commonPage();
