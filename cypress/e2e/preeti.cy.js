// describe('Visit Multiple URLs and Check Page Load', () => {
//     const urls = [
//         'https://www.asu.edu/',
//         'https://asuonline.asu.edu/',
//         'https://comm.engineering.asu.edu/web-services/',
//         'https://asuforyou.asu.edu/',
//         'https://asuengineeringonline.com/'
//     ];
//     urls.forEach((url) => {
//         it(`should load the page at ${url} successfully`, () => {
//             // Visit the URL
//             cy.visit(url);
//             // Verify that the page contains the expected title or a specific element
//             cy.title().should('not.be.empty'); // Ensures that the page title is not empty
//         });
//     });
// });

describe("URL Launching",()=>{

    it.only('asuonline brand/a',()=>{
        cy.visit('https://start.asuonline.asu.edu/brand/a/');
        cy.get('.text-white.h1-medium.mb-space-sm.mb-lg-space-lg.px-lg-space-xxl').should('be.visible');
        cy.get('.text-white.h1-medium.mb-space-sm.mb-lg-space-lg.px-lg-space-xxl').contains('A complete university experience, from anywhere in the world');
        cy.get("input[placeholder='Select a degree type']").click();
        cy.get('#vs1__option-1',{force:true}).click();
        cy.get('#vs2__combobox > .vs__selected-options > .vs__search').click();
        cy.get('#vs2__option-2',{force:true}).click();
        cy.get('#vs3__combobox > .vs__selected-options > .vs__search').click();
        cy.get('vs3__option-0').click();

    })

    it('undergraduate',()=>{
        cy.visit('https://start.asuonline.asu.edu/undergraduate/a/');
        cy.get('.text-white.h1-medium.mb-space-sm.mb-lg-space-lg.px-lg-space-xxl').should('be.visible');
        cy.get('.text-white.h1-medium.mb-space-sm.mb-lg-space-lg.px-lg-space-xxl').contains('Earn a top-ranked bachelor’s degree anytime, anywhere');
    })

    it('graduate',()=>{
        cy.visit('https://start.asuonline.asu.edu/graduate/a/');
        cy.get('.text-white.h1-medium.mb-space-sm.mb-lg-space-lg.px-lg-space-xxl').should('be.visible');
        cy.get('.text-white.h1-medium.mb-space-sm.mb-lg-space-lg.px-lg-space-xxl').contains('Earn a world-class graduate degree, on your time');
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