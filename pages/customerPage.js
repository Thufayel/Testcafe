import {Selector,t} from "testcafe";

class customerPage{
    constructor(){
        this.ordersLink = Selector('a').withText("Orders")
        this.noOrdersLabel = Selector(".no-data").withText("No orders");
    }
    
}
export default new customerPage();