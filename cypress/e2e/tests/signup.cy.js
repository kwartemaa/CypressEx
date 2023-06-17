import { defaultDevices as devices} from "../__helpers/default-devices"
import signUpPage from "../../page-objects/signup.page"
import loginPage from "../../page-objects/login.page"
import homepage from "../../page-objects/home.page"
import { users } from "../../fixtures/userdata"

    const home_page = new homepage();
    const login_page = new loginPage();
    const signup_page = new signUpPage();

devices.forEach((device)=>{
    describe(`A practice test -${device.name}`, ()=>{
        const [w,h] = device.viewport

        before(()=>{
            cy.viewport(w,h)
            cy.clearAllCookies()
        })
        beforeEach(()=>{
            cy.viewport(w,h)
            cy.intercept({
                method: "GET",
                path: "/index.php?rt=account/create"
            }).as('register')
            cy.intercept({
                method: "POST",
                path: "/index.php?rt=account/create"
            }).as('submitRegForm')
            cy.visit('/')
              })

    
        it("should register with valid credentials", ()=>{
            if(device.isMobile){
                home_page.navigateToLogingPageMobile();
            }else{
                home_page.navigateToLoginPageDesktop();
            }
            login_page.navigateToSignUpForm();
            cy.wait('@register')
            signup_page.enterFirstName(users.firstName)
            signup_page.enterLastName(users.lastName)
            if(device.isMobile){
                signup_page.enterEmail(users.emailMobile)
            }else{
                signup_page.enterEmail(users.emailDesktop)
            }
            signup_page.enterTelephone(users.telephone)
            signup_page.enterFax(users.fax)
            signup_page.enterCompany(users.company)
            signup_page.enterAddressOne(users.addressOne)
            signup_page.enterAddressTwo(users.addressTwo)
            signup_page.enterCityName(users.city)
            signup_page.enterZipCode(users.zipCode)
            signup_page.selectCountry(users.country)
            signup_page.selectRegion(users.region)
            if(device.isMobile){
                signup_page.enterLoginName(users.loginNameMobile)
            }else{
                signup_page.enterLoginName(users.loginNameDesktop)
            }
            signup_page.enterPassword(Cypress.env("password"))
            signup_page.enterPasswordAgain(Cypress.env("password"))
            signup_page.noSubscriptionStatus()
            signup_page.agreeToPrivPolicy()
            signup_page.submitSignUpForm() 
            cy.wait('@submitRegForm').then(({response}) => {
                expect(response.statusCode).to.eq(302)
            })
            //there seems to be an issue with the FE redirecting first time users to the page in desktop view
            cy.get('section[class="mb40"]').should('be.visible')  

            
        })


    })

})

