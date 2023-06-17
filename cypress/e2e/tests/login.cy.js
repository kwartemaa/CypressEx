import { defaultDevices as devices} from "../__helpers/default-devices"
import loginPage from "../../page-objects/login.page"
import homepage from "../../page-objects/home.page"


    const home_page = new homepage();
    const login_page = new loginPage();
    const user_name = Cypress.env("name")
    const user_password = Cypress.env("password")
    const user_invalid_password = Cypress.env("invalid_password")

devices.forEach((device)=>{
    describe(`A practice test -${device.name}`, ()=>{
        const [w,h] = device.viewport

        before(()=>{
            cy.viewport(w,h)
            cy.clearAllCookies()
        })
        beforeEach(()=>{
            cy.viewport(w,h)
            cy.visit('/')
              })

    
        it("should log in with valid credentials", ()=>{
            if(device.isMobile){
                home_page.navigateToLogingPageMobile();
            }else{
                home_page.navigateToLoginPageDesktop();
            }
            login_page.enterUserName(user_name);
            login_page.enterPassword(user_password);
            login_page.submitLoginForm();
            // we've added 2 assertions to our test
            if(device.isMobile){
                cy.get('ul[class="nav-dash"]').should('be.visible')

            } else{
                cy.get('div[class="menu_text"]').should('be.visible').and('contain', `Welcome back ${name}`) 
            }           

        })

        it("should log in with invalid credentials", ()=>{
            if(device.isMobile){
                home_page.navigateToLogingPageMobile();
            }else{
                home_page.navigateToLoginPageDesktop();
            }
            login_page.enterUserName(user_name);
            login_page.enterPassword(user_invalid_password);
            login_page.submitLoginForm();
        })

    })

})