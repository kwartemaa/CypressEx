/// <reference types="cypress" />
import { defaultDevices as devices} from "../__helpers/default-devices"
import homepage from "../../page-objects/home.page"

devices.forEach((device)=>{
    describe(`A practice test -${device.name}`, ()=>{
        const [w,h] = device.viewport

        before(()=>{
            cy.viewport(w,h)
            cy.clearAllCookies
        })
        beforeEach(()=>{
            cy.visit('/')
        })
    
        it("Navigates to login page", ()=>{
            // cy.visit("https://www.automationteststore.com/")
            // cy.get('a[href*="account/login"]').first().click()
            const login_button = new homepage()
            if (device.isMobile){
                login_button.navigateToLoginPageMobile
            } else
            login_button.navigateToLoginPageDesktop
        })
    })
})
