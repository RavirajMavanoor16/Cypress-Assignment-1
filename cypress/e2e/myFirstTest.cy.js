describe('My First Test', () => {
    
    it('test1-verify title: positive', () => {
      cy.visit("https://www.cypress.io/");
      cy.title().should('eq','Testing Frameworks for Javascript | Write, Run, Debug | Cypress');
    })

    it('test2-verify title: negative', () => {
        cy.visit("https://www.cypress.io/");
        cy.title().should('eq','OrangeHRM123');
      })

  })

//   describe('My First Test', function(){
//     it('Does not do much!', function(){
//       expect(true).to.equal(true)
//     })
//   })