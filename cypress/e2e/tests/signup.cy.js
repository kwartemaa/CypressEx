import { defaultDevices as devices} from "../__helpers/default-devices"
import loginPage from "../../page-objects/login.page"
import homepage from "../../page-objects/home.page"

import { users } from "../../fixtures/userdata"
// const name = "Leila"
// const password = "123456aA_"
    const home_page = new homepage();
    const login_page = new loginPage();

devices.forEach((device)=>{
    describe(`A practice test -${device.name}`, ()=>{
        const [w,h] = device.viewport

        before(()=>{
            cy.viewport(w,h)
            cy.clearAllCookies
        })
        beforeEach(()=>{
            cy.viewport(w,h)
            cy.visit('/')
              })

    
        it("should register with valid credentials", ()=>{
            if(device.isMobile){
                home_page.navigateToLogingPageMobile();
            }else{
                home_page.navigateToLoginPageDesktop();
            }
            login_page.enterUserName(users.name);
            login_page.enterPassword(users.password);
            login_page.submitLoginForm();
            // we've added 2 assertions to our test
            if(device.isMobile){
                cy.get('ul[class="nav-dash"]').should('be.visible')

            } else{
                cy.get('div[class="menu_text"]').should('be.visible').and('contain', `Welcome back ${users.name}`) 
            }           

        })

        it("should log in with invalid credentials", ()=>{
            if(device.isMobile){
                home_page.navigateToLogingPageMobile();
            }else{
                home_page.navigateToLoginPageDesktop();
            }
            login_page.enterUserName(users.name);
            login_page.enterPassword(users.invalid_password);
            login_page.submitLoginForm();
        })

    })

})

