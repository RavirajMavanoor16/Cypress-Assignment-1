const { expect } = require("chai");

describe("Asserestions demo", ()=>{
    it.skip("Implicet asserstion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm');
    })

    //validataion on title
    it.skip("Implicet asserstion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
    })
    //validataion on logo
    it.skip("Implicet asserstion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-branding > img')
        //.should('be.visible')
        .should('be.exist')
    })
    //capture all links present in web page
    it.skip("Implicet asserstion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath('//a').should('have.length',5)
    })
    //values of fields
    it("Implicet asserstion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName ="xyz";
        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actName = x.text();
            //BDD Style
            expect(actName).to.equal(expName);


        })
    })
})