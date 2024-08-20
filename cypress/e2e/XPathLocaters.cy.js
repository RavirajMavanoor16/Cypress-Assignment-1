describe('XPathLoactoers', ()=>{
    it('find no of products', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#search_query_top").type("Dresses");
        cy.get("[name='submit_search']").click();
        cy.xpath('//ul[@class="product_list grid row"]/li').should('have.length', 7);

    })
})