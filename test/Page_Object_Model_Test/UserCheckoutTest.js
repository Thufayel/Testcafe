import {ClientFunction} from 'testcafe';
import homePage from '../pages/homePage';
import registerPage from '../pages/registerPage';
import loginPage from '../pages/loginPage';
import customerPage from '../pages/customerPage';
import searchResultPage from '../pages/searchResultPage';
import productDetailsPage from '../pages/productDetailsPage';
import cartPage from '../pages/cartPage';
import checkoutGuestPage from '../pages/checkoutGuestPage';

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'tanvir'+randomNumber+'@test.com';


fixture("Registration Fixture")
    .page(URL)

    .beforeEach(async t => {
        await t.setTestSpeed(1.00)
        await t.maximizeWindow()
    })


test('User Registration and login test', async t =>{
    //Verify Registration functionality
    await t
    .click(homePage.registerLink)
    .expect(getURL()).contains('register')
    .click(registerPage.maleGenderSelection)
    .typeText(registerPage.firstName,'Tanvir')
    .typeText(registerPage.lastName,'Hussain');
    await registerPage.selectDay('22');
    await registerPage.selectMonth('April');
    await registerPage.selectYear('1992');
    await t
    .typeText(registerPage.email,userEmail)
    .typeText(registerPage.password,'Dabest@123')
    .typeText(registerPage.confirmPassword,'Dabest@123')
    .click(registerPage.registerButton)
    .expect(registerPage.successfullmsg.exists).ok()
    //Verify Logout functionality
    .click(homePage.logOut)
    //Login with registered account
    .click(homePage.loginLink)
    .expect(loginPage.accountHeader.exists).ok()
    .typeText(loginPage.emailInput,userEmail)
    .typeText(loginPage.passwordInput,'Dabest@123')
    .click(loginPage.logInButton)
    //Searching for an item
    await homePage.search("Apple Macbook Pro 13-inch")
    await t
    //Selecting the searched item
    .setPageLoadTimeout(3000)
    .click(searchResultPage.productTitle)
    .setPageLoadTimeout(3000)
    .expect(getURL()).contains('apple-macbook-pro-13-inch')
    //Adding to shopping cart
    .click(productDetailsPage.productQuantity)
    .pressKey('ctrl+a delete')
    .typeText(productDetailsPage.productQuantity,'3')
    .click(productDetailsPage.addtoCart)
    .expect(productDetailsPage.successMsg.exists).ok()
    .click(homePage.cartLink)
    .click(cartPage.termsLabel)
    .click(cartPage.checkoutButton)
    .expect(getURL()).contains('checkout')
    //Placing the order as an existing user
    await checkoutGuestPage.selectCountry('United States');
    await checkoutGuestPage.selectState('New York')
    await t
    .typeText(checkoutGuestPage.cityTxt,'Brooklyn')
    .typeText(checkoutGuestPage.addressTxt,'Brooklyn')
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
    //Going to My account and checking the order exist in order tab
    .click(homePage.myAccount)
    .click(customerPage.ordersLink)
})