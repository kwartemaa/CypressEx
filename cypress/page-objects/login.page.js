import { defaultDevices as devices } from "../e2e/__helpers/default-devices";
class loginPage{
    elements = {
        loginNameField : () => cy.get('input[id="loginFrm_loginname"]'), 
        loginPasswordField: () => cy.get('input[id="loginFrm_password"]'),
        loginBtn: () => cy.get('button[title="Login"]'),  
        navigateToSignup: () => cy.get('button[title="Continue"]') ,

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