import {Selector} from 'testcafe';

class cartPage{
    constructor(){
        this.termsLabel = Selector("#termsofservice")
        this.cartTotal = Selector(".cart-total-right")
        this.checkoutButton = Selector("#checkout")
    }
}
export default new cartPage();
