/// <reference types="cypress-xpath"/>

describe('Verify Chevron Dates Across All Pages', () => {
    const expectedDate = '08/22/2024'; // Define the expected date
  
    beforeEach(() => {
      // Replace with the URL of your application
      cy.visit('https://start.asuonline.asu.edu/undergraduate/a/');
    });
  
    function verifyDatesOnCurrentPage() {
      // Assuming chevrons have a class 'chevron' and date is within a span with class 'date'
      cy.get(".text-dark-3").click({ multiple: true, force: true });
        cy.get('.row.pt-space-sm').invoke('text').then((dateText) => {
          // Verify the date matches the expected date
          expect(dateText).to.equal(expectedDate);
        });
      ;
    }
  
    function verifyAllPages() {
      // Verify dates on the current page
      verifyDatesOnCurrentPage();
  
      // Check if the "Next Page" button exists and click it if present
      cy.get('body').then(($body) => {
        if ($body.find('#next-page').length > 0) {
          cy.get('#next-page').click();
  
          // Wait for the next page to load
          cy.wait(1000); // Adjust the wait as necessary based on your application
  
          // Verify dates on the next page recursively
          verifyAllPages();
        }
      });
    }
  
    it('should verify that the dates in all chevrons across all pages match the expected date', () => {
      verifyAllPages();
    });
  });