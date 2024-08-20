///<reference types="Cypress"/>

describe('Radio and Checkbox', ()=>{
    it('checking radio buttons', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('input#female').check().should('be.checked');
        cy.get('input#male').should('not.be.checked');
    })
})