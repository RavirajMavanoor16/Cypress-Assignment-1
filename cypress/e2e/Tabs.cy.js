
describe('Handle tabs', ()=>{
    it('Approch 1', ()=>{
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get('.example > a').invoke('removeAttr','target').click();
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    cy.wait(5000);
    cy.go('back');
    })
})