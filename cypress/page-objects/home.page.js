/// <reference types="cypress" />
import { defaultDevices as devices } from "../e2e/__helpers/default-devices";
const device = devices.device
class homepage{
    elements = {
        usernameInput : () => cy.get('input[name="userName"]'),
        navMenu : () => cy.get('button[class="navbar-toggle collapsed"]'),
        loginRegisterButtonMobile: ()=> cy.get('select[class="form-control"]').first(),
        loginRegisterButtonDesktop: () => cy.get('a[href*="account/login"]').first()

        
    }

    navigateToLoginPageDesktop(){
        this.elements.loginRegisterButtonMobile().click()
    }

    navigateToLoginPageMobile(){
        this.elements.navMenu().click()
        this.elements.loginRegisterButtonMobile.select("Login")

    }

}

export default homepage;