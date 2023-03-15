
describe("Factorial", function () {

    beforeEach(function () {
        cy.visit('/');
        cy.wait(2000);
    })

    it('validate the red highlighted validation is displayed when invalid data is submitted', function () {
        cy.get('#getFactorial').click();
        cy.xpath('//input[contains(@style, "border: 2px solid red;")]').should('be.visible');
    })

    it('validate the console message printed', function () {
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').contains('Please enter an integer');
    })

    it('Validate that 7 is a factorial of 5040', function () {
        cy.get('#number').type('7');
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').contains('The factorial of 7 is: 5040');
    })

})
