import {Selector,t} from 'testcafe';

class productDetailsPage{
    constructor(){
        this.productPrice = Selector("#price-value-4").withText("$1,800.00")
        this.productQuantity = Selector('input#product_enteredQuantity_4')
        this.addtoCart = Selector("#add-to-cart-button-4")
        this.successMsg = Selector(".bar-notification.success")

    }
}
export default new productDetailsPage();