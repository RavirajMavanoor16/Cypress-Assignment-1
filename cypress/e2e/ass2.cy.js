describe('RFI',()=>{

    it('RFI',()=>{
        cy.visit('https://asuonline.asu.edu/');
        cy.get('#degree-type_typeahead__combobox > .typeahead__selected-options > .is-placeholder').click();
        cy.get('#degree-type_option_1').click();
        cy.get('#interest-area_typeahead__combobox > .typeahead__selected-options > .is-placeholder').click();
        cy.get('#interest-area_option_4').click();
        cy.get('.is-placeholder').click();
        // cy.get('#program_typeahead__search').click();
        cy.get('#program_option_6').click();
        cy.get("input[value='true']").click();
        cy.get("button[data-cy='rfi-continue-button']").click();
        cy.get('#first-name').type('embtestFN');
        cy.get('#last-name').type('embtestLN');
        cy.get('#email').type('embtestEmail@asu.edu');
        cy.get('#country-selector-asuonline_phone_number').click();
        cy.get('#country-selector-asuonline_phone_number').click();
        cy.get('button:nth-child(10) div:nth-child(1) span:nth-child(2)').click();
        cy.get('#asuonline_phone_number').type('011 1523456789');
        cy.get('[data-cy="rfi-submit-button"]').click();
        cy.wait(7000);
        cy.get('.h2-small.bg-secondary.px-space-xxs.mb-space-lg.w-auto').contains('Thank you for your interest in ASU Online');
        
    })
});