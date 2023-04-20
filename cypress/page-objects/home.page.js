/// <reference types="cypress" />
// import { defaultDevices as devices } from "../e2e/__helpers/default-devices";
// const device = devices.device
class homepage{
    elements = {
       authBtn : () => cy.get('a[class="top menu_account"]').first(), 
       breadcrumb : () => cy.get('button[class="navbar-toggle collapsed"]'),
       mainMenu : () => cy.get('select[class="form-control"]').first(),
       logoutBtn : () => cy.get('a').contains('Logoff')
           
    }


    navigateToLoginPageDesktop(){
        cy.wait(500)
        this.elements.authBtn().click();
    }

    navigateToLogingPageMobile(){
        this.elements.breadcrumb().click();
        this.elements.mainMenu().select("Login");
    }

    
    
     logout(){
        this.elements.logoutBtn().click()
        
     } 

}

export default homepage;