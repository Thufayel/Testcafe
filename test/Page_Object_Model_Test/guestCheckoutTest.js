import {ClientFunction} from 'testcafe';
import homePage from '../pages/homePage';
import registerPage from '../pages/registerPage';
import productDetailsPage from '../pages/productDetailsPage';
import cartPage from '../pages/cartPage';
import checkoutGuestPage from '../pages/checkoutGuestPage';
import searchResultPage from '../pages/searchResultPage';

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'tanvir'+randomNumber+'@test.com';

fixture("Guest Checkout Fixture")
    .page(URL)
    .beforeEach(async t => {
        await t.setTestSpeed(0.1)
        await t.maximizeWindow()
    })

test("Check out as guest", async t =>{

    //Product search
    await homePage.search("Apple MacBook Pro 13-inch")
    await t
    //Item selection
    .setPageLoadTimeout(3000)
    .click(searchResultPage.productTitle)
    .setPageLoadTimeout(3000)
    .expect(getURL()).contains('apple-macbook-pro-13-inch')
    //Add to shopping cart
    .expect(productDetailsPage.productPrice.exists).ok()
    .click(productDetailsPage.productQuantity)
    .pressKey('ctrl+a delete')
    .typeText(productDetailsPage.productQuantity,'3')
    .click(productDetailsPage.addtoCart)
    .expect(productDetailsPage.successMsg.exists).ok()
    .wait(3000)
    //Cart Page to checkout
    .click(homePage.cartLink)
    .click(cartPage.termsLabel)
    .click(cartPage.checkoutButton)
    .expect(getURL()).contains('checkout')
    //Placing order as a guest
    .click(checkoutGuestPage.checkoutGuestBtn)
    .typeText(checkoutGuestPage.firstNameInput, 'Tanvir')
    .typeText(checkoutGuestPage.lastNameInput,'Hussain')
    .typeText(checkoutGuestPage.emailAddress,'tt@tt.com')
    await checkoutGuestPage.selectCountry('United States');
    await checkoutGuestPage.selectState('New York')
    await t
    .typeText(checkoutGuestPage.cityTxt,'Brooklyn')
    .typeText(checkoutGuestPage.addressTxt,'4305 snyder ave')
    .typeText(checkoutGuestPage.zipTxt,'11111')
    .typeText(checkoutGuestPage.phoneTxt,'1111111111')
    .click(checkoutGuestPage.continueBtn)
    .click(checkoutGuestPage.nextDayOption)
    .click(checkoutGuestPage.nextDayContinueBtn)
    .click(checkoutGuestPage.CreditCardPaymentContinueBtn)
    .click(checkoutGuestPage.shippingContinueBtn)
    .click(checkoutGuestPage.confirmOrderBtn)
    .expect(checkoutGuestPage.orderConfirmationMsg.exists).ok()
    .click(checkoutGuestPage.viewOrderDetailsLink)
   
    //My account
});