import {Selector,t} from "testcafe";

class loginPage{
    constructor(){
        this.emailInput = Selector("#Email")
        this.passwordInput = Selector("#Password")
        //this.logInButton = Selector("body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.buttons > button")
        this.logInButton = Selector('.button-1.login-button')
        this.accountHeader = Selector("strong").withText("Returning Customer");
        
    }
}
export default new loginPage();