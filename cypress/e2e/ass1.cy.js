
describe("URL Launching",()=>{

    //Approch 1
    Cypress.on('uncaught:exception', (err, runnable) => {        
          return false
      })

    //Approach 2
    //   Cypress.on('uncaught:exception', (err, runnable) => {
    //     // Return false to prevent Cypress from failing the test
    //     if (err.message.includes('Script error.')) {
    //       return false
    //     }
    //   });
      

    // it('start.asuonline.asu.edu',()=>{
    //     cy.visit('https://start.asuonline.asu.edu');
    //     cy.get('.h1-medium > :nth-child(1)').contains('Same mission, same faculty');
    // })

    it('getyouredge.org',()=>{
        cy.visit('https://getyouredge.org/');
        // cy.get('.highlight_Bg.font48.mx-auto.text-center.align-self-center.col-md-9.col-10').contains('Creating a sustainable future through innovative partnerships');
        cy.get("div[class='d-flex justify-content-center set'] h2").contains('SET YOURSELF APART');

    })

    it('future.asuonline.asu.edu',()=>{
        cy.visit('https://future.asuonline.asu.edu/');
        cy.get('.h1-medium').contains('Future students | ASU Online');
    })

    it('idnm.asu.edu',()=>{
        cy.visit('https://idnm.asu.edu');
    })

    it('edplus.asu.edu',()=>{
        cy.visit('https://edplus.asu.edu/');
        cy.get('.h1-medium.text-white.text-left').contains('The power of EdPlus at ASU');
    })

    it('pff.asu.edu',()=>{
        cy.visit('https://pff.asu.edu/');
        cy.get("span[class='highlight-text']").contains('Pathways for the Future');
    })

    it('asulocal.asu.edu',()=>{
        cy.visit('https://asulocal.asu.edu/');
        cy.get(".h1-large.text-white").contains('ASU Local');
    })

    it('currentstudent.asuonline.asu.edu',()=>{
        cy.visit('https://currentstudent.asuonline.asu.edu/');
        cy.get(".h1-large.text-white").contains('Current students');
    })

    it('dreamscapelearn.asu.edu/',()=>{
        cy.visit('https://dreamscapelearn.asu.edu/');
        cy.get(".highlight-title.px-space-xs.py-space-xxs").contains('Dreamscape Learn');
    })


    it('plusalliance.org',()=>{
        cy.visit('https://plusalliance.org/');
        cy.get(".font56").contains('PLuS Alliance: Global solutions with impact');
    })

    it('starbucks',()=>{
        cy.visit('https://starbucks.asu.edu/starbucks-asu-degree-list');
        cy.get('.content.col-md-8.pl-0').should('be.visible');
        cy.get('.content.col-md-8.pl-0').contains('Explore ASU degrees for Starbucks partners');
    })


    // it('uber',()=>{
    //     cy.visit('https://uber.asu.edu/');
    //     cy.get('.display-4.regular_text.m-0.text-left.text-lg-center').and('contain','A partnership between Uber and Arizona State University that helps drivers or a family member reach their goals, in life and on the road with 100% tuition coverage.')
    // })

})
