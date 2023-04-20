import { defaultDevices as devices } from "../e2e/__helpers/default-devices";
const device = devices.device
class loginPage{
    elements = {
        firstNameField : () => cy.get('input[name="firstname"]'), 
        lastNameField : () => cy.get('input[name="lastname"]'),
        emailField : () => cy.get('input[name="email"]'),
        telephoneField : () => cy.get('input[name="telephone"]'),
        faxField : () => cy.get('input[name="fax"]'),
        companyField : () => cy.get('input[name="company"]'),
        addressOneField : () => cy.get('input[name="address_1"]'),
        addressTwoField : () => cy.get('input[name="address_2"]'),
        cityField : () => cy.get('input[name="city"]'),
        countryOptions: () => cy.get('select[name="country_id"]'),
        loginNameField: () => cy.get('input[name="loginname"]'),
        loginPassword: () => cy.get('input[name="password"]'),
        passwordConfirm: () => cy.get('input[name="confirm"]'),
        agreeToPrivPolicy: () => cy.get('input[id="AccountFrm_agree"]'),
        signUpButton: () => cy.get('button[type="submit"]'),



     }

     enterUserName(username){
        this.elements.loginNameField().clear();
        this.elements.loginNameField().type(username)

     }

     enterPassword(password){
        this.elements.loginPasswordField().clear();
        this.elements.loginPasswordField().type(password)
     }

     submitLoginForm(){
        this.elements.loginBtn().click();
     }

     navigateToSignUpForm(){
      this.elements.navigateToSignup().click();
     }










}

export default loginPage;