import {ClientFunction} from 'testcafe';
import homePage from '../../pages/homePage';
import registerPage from '../../pages/registerPage';
import loginPage from '../../pages/loginPage';
import customerPage from '../../pages/customerPage';

//Linking up with the created dataset
const dataSet = require('../../data/data.json');
const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'tanvir'+randomNumber+'@test.com';


fixture("Registration Fixture")
    .page(URL)

    .beforeEach(async t => {
        await t.setTestSpeed(0.5)
        await t.maximizeWindow()
    })
//Verify Homepage URL
test('Assert Home Page Test', async t =>{
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(homePage.subtitle.exists).ok();
});

//Using the data inside the dataset for each test
dataSet.forEach(data => {
test('User Registration and login test', async t =>{
    //Verify Registration functionality
    await t
    .click(homePage.registerLink)
    .expect(getURL()).contains('register')
    .click(registerPage.maleGenderSelection)
    .typeText(registerPage.firstName,data.firstname)
    .typeText(registerPage.lastName,data.lastname);
    await registerPage.selectDay(data.birthday);
    await registerPage.selectMonth(data.birthmonth);
    await registerPage.selectYear(data.birthyear);
    await t
    .typeText(registerPage.email,data.email+randomNumber+'@test.com')
    .typeText(registerPage.password,data.password)
    .typeText(registerPage.confirmPassword,data.password)
    .click(registerPage.registerButton)
    .expect(registerPage.successfullmsg.exists).ok()
    //Verify Logout functionality
    .click(homePage.logOut)
    //Login with registered account
    .click(homePage.loginLink)
    .expect(loginPage.accountHeader.exists).ok()
    .typeText(loginPage.emailInput,data.email+randomNumber+'@test.com')
    .typeText(loginPage.passwordInput,data.password)
    .click(loginPage.logInButton)
    //Go to my account
    .click(homePage.myAccount)
    //check orders is displayed
    .expect(customerPage.ordersLink.exists).ok()
    .click(customerPage.ordersLink)
    .expect(customerPage.noOrdersLabel.exists).ok()
    .takeScreenshot();
})
});