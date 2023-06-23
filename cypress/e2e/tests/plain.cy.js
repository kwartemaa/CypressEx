/// <reference types="cypress" />
//this file is just for trying stuff out before I put them in the scripts when unsure.
beforeEach(()=>{
    cy.viewport("iphone-8")
})


it("sample test", ()=>{
    cy.visit("https://automationteststore.com/")
    cy.get('button[class="navbar-toggle collapsed"]').click()
    cy.get('select[class="form-control"]').first().select("Login")
})
