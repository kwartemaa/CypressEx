import { defaultDevices as devices} from "../__helpers/default-devices"
import loginPage from "../../page-objects/login.page"
import homepage from "../../page-objects/home.page"

import { users } from "../../fixtures/userdata"
// const name = "Leila"
// const password = "123456aA_"

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

    
        it("should log in with valid credentials", ()=>{
            const home_page = new homepage();
            const login_page = new loginPage();
            if(device.isMobile){
                home_page.navigateToLogingPageMobile();
            }else{
                home_page.navigateToLoginPageDesktop();
            }
            login_page.enterUserName(users.name);
            login_page.enterPassword(users.password);
            login_page.submitLoginForm();



        })

    })

})