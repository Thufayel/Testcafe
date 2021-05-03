import {Selector,t} from 'testcafe';

class homePage{
    constructor(){
        this.subtitle = Selector('h2').withText("Welcome to our store")
        this.registerLink = Selector(".ico-register")
        this.loginLink = Selector(".ico-login")
        this.cartLink = Selector(".cart-label")
        this.wishListLink = Selector(".wishlist-label")
        this.currencyList = Selector("#customerCurrency")
        //this.searchItem = Selector("#small-searchterms")
        this.myAccount = Selector(".ico-account")
        this.logOut = Selector(".ico-logout");
    }
    get productSearch(){
        return Selector("input#small-searchterms");
    }
    async search(product){
        await t
        .typeText(this.productSearch,product)
        .wait(3000)
        .pressKey('enter');
    }
    async changeCurrency(currency){
        await t
        .click(this.currencyList)
        .click(Selector('option',{text:currency}))
    }
}
export default new homePage();