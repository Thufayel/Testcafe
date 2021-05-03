import {Selector,t} from 'testcafe';

class checkoutGuestPage{
    constructor(){
        this.checkoutGuestBtn = Selector(".button-1.checkout-as-guest-button")
        this.firstNameInput = Selector('input#BillingNewAddress_FirstName')
        this.lastNameInput = Selector('input#BillingNewAddress_LastName')
        this.emailAddress = Selector('input#BillingNewAddress_Email')
        this.countryList = Selector("#BillingNewAddress_CountryId")
        this.stateList = Selector("#BillingNewAddress_StateProvinceId")
        this.cityTxt = Selector("#BillingNewAddress_City")
        this.addressTxt = Selector("#BillingNewAddress_Address1")
        this.zipTxt = Selector("#BillingNewAddress_ZipPostalCode")
        this.phoneTxt = Selector("#BillingNewAddress_PhoneNumber")
        this.continueBtn = Selector(".button-1.new-address-next-step-button")
        this.nextDayOption = Selector("#shippingoption_1")
        this.nextDayContinueBtn = Selector(".button-1.shipping-method-next-step-button")
        this.CreditCardPaymentContinueBtn = Selector(".button-1.payment-method-next-step-button")
        this.shippingContinueBtn = Selector(".button-1.payment-info-next-step-button")
        this.confirmOrderBtn = Selector(".button-1.confirm-order-next-step-button")
        this.orderConfirmationMsg = Selector("strong").withText("Your order has been successfully processed!")
        this.viewOrderDetailsLink = Selector("a").withText("Click here for order details.")
    }
    async selectCountry(country){
        const countryOption = this.countryList.find('option');
        await t
            .click(this.countryList)
            .click(countryOption.withText(country))
    }
    async selectState(state){
        const stateOption = this.stateList.find('option')
        await t
            .click(this.stateList)
            .click(stateOption.withText(state))
    }
}
export default new checkoutGuestPage();