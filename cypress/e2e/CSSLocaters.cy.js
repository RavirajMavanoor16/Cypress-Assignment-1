describe('CSSLocaters', ()=>{
    it('CSSLocaters',()=>{
        cy.visit("http://www.automationpractice.pl/index.php");
        //cy.get("#search_query_top").type("Shirt"); //id  tag is optional
        // cy.get(".search_query").type("Shirt"); // class  tag is optional
        //cy.get("[name='search_query']").type("Shirt"); // attribute  tag is optional
        cy.get("input.search_query[name='search_query']").type("Shirt"); //tag class attribute.  tag is optional
        
        cy.get("[name='submit_search']").click();
        cy.get(".lighter").contains("Shirt");
    })
})