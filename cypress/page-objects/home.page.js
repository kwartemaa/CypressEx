/// <reference types="cypress" />
// import { defaultDevices as devices } from "../e2e/__helpers/default-devices";
// const device = devices.device
class homepage{
    elements = {
       authBtn : () => cy.get('a[class="top menu_account"]').first(), 
       breadcrumb : () => cy.get('button[class="navbar-toggle collapsed"]'),
       mainMenu : () => cy.get('select[class="form-control"]').first(),
       logoutBtn : () => cy.get('a').contains('Logoff'),
       searchField: ()  => cy.get('input[id="filter_keyword"]'),
       cartIcon: () => cy.get('a[class="productcart"]').first(),
       firstProduct: () => cy.get('div[class="col-md-3 col-sm-6 col-xs-12"]').first()

           
    }


    navigateToLoginPageDesktop(){
        cy.wait(500)
        this.elements.authBtn().click();
    }

    navigateToLogingPageMobile(){
        this.elements.breadcrumb().click();
        this.elements.mainMenu().select("Login");
    }

    search(search_term){
        this.elements.searchField().clear()
        this.elements.searchField().type(search_term)
    }

    searchMobile(search_term){
        this.elements.breadcrumb().click()
        this.elements.searchField().clear()
        this.elements.searchField().type(search_term)
        
    }

    addToCartFromHome(){
        this.elements.cartIcon().click()

    }

    navigateToPDP(){
        this.elements.firstProduct().click()
    }

    
    
     logout(){
        this.elements.logoutBtn().click()
        
     } 

}

export default homepage;