// import { defaultDevices as devices } from "../e2e/__helpers/default-devices";
// const device = devices.device
class signUpPage{
    elements = {
        firstNameField : () => cy.get('input[name="firstname"]'), 
        lastNameField : () => cy.get('input[name="lastname"]'),
        emailField : () => cy.get('input[id="AccountFrm_email"]'),
        telephoneField : () => cy.get('input[name="telephone"]'),
        faxField : () => cy.get('input[name="fax"]'),
        companyField : () => cy.get('input[name="company"]'),
        addressOneField : () => cy.get('input[name="address_1"]'),
        addressTwoField : () => cy.get('input[name="address_2"]'),
        cityField : () => cy.get('input[name="city"]'),
        countryOptions: () => cy.get('select[name="country_id"]'),
        regionOptions: ()  => cy.get('select[name="zone_id"]'),
        zipCode: () => cy.get('input[name="postcode"]'),
        loginNameField: () => cy.get('input[name="loginname"]'),
        loginPassword: () => cy.get('input[name="password"]'),
        passwordConfirm: () => cy.get('input[name="confirm"]'),
        noSubscription: ()  => cy.get('input[id="AccountFrm_newsletter0"]'),
        agreeToPrivPolicy: () => cy.get('input[id="AccountFrm_agree"]'),
        signUpButton: () => cy.get('button[title="Continue"]'),

     }

     enterFirstName(firstname){
        this.elements.firstNameField().clear();
        this.elements.firstNameField().type(firstname)

     }

     enterLastName(lastname){
        this.elements.lastNameField().clear();
        this.elements.lastNameField().type(lastname)
     }

     enterEmail(email){
      this.elements.emailField().clear();
      this.elements.emailField().type(email)
   }

   enterTelephone(telephone){
      this.elements.telephoneField().clear();
      this.elements.telephoneField().type(telephone)
   }

   enterFax(fax){
      this.elements.faxField().clear();
      this.elements.faxField().type(fax)
   }

   enterCompany(company){
      this.elements.companyField().clear();
      this.elements.companyField().type(company)
   }

   enterAddressOne(address_1){
      this.elements.addressOneField().clear();
      this.elements.addressOneField().type(address_1)
   }

   enterAddressTwo(address_2){
      this.elements.addressTwoField().clear();
      this.elements.addressTwoField().type(address_2)
   }

   enterCityName(city){
      this.elements.cityField().clear();
      this.elements.cityField().type(city)
   }

   selectCountry(country){
      this.elements.countryOptions().select(country)
   }

   selectRegion(region){
      this.elements.regionOptions().select(region)
   }

   enterZipCode(code){
      this.elements.zipCode().clear()
      this.elements.zipCode().type(code)
   }



   enterLoginName(loginName){
      this.elements.loginNameField().clear()
      this.elements.loginNameField().type(loginName)
   }

   enterPassword(password){
      this.elements.loginPassword().clear()
      this.elements.loginPassword().type(password)
     }

     enterPasswordAgain(password){
      this.elements.passwordConfirm().clear()
      this.elements.passwordConfirm().type(password)
     }

     noSubscriptionStatus(){
      this.elements.noSubscription().click()
     }

     agreeToPrivPolicy(){
      this.elements.agreeToPrivPolicy().click()
     }

     submitSignUpForm(){
        this.elements.signUpButton().click();
     }

     










}

export default signUpPage;