import {Selector} from "testcafe";

class searchResultPage{
    constructor(){
        this.productItem = Selector(".product-item")
        this.productTitle = Selector("a[href='/apple-macbook-pro-13-inch']")
    }
}
export default new searchResultPage(); 