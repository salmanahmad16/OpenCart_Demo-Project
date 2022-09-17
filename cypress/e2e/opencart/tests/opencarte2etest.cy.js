import { LoginPage } from "../pages/login_page";
import { RegistrationPage } from "../pages/registration_page";
import { HomePage } from "../pages/home_page";


const login = new LoginPage()
const reg = new RegistrationPage()
const home = new HomePage()

describe("Complete end to end test of e-commerce site", function(){

    beforeEach(function(){                                  // used fixture for credentials
        cy.fixture('credentials').then(function(credentials){
            this.credentials = credentials
        })
    })


    it("Create new account", function(){

        reg.goToRegistrationPage() // Nevigate to Registration Page
        reg.validateFieldsAddValues()
        reg.validatePassword_valid("Salman123456","Salman123456")
        reg.privacyPolicy()
        reg.continueToCreateAccount()

    })


    it("Should Login into account", function(){
        cy.wait(5000)
        login.goToLoginPage()   // Nevigate to Login Page
        login.validLogin(this.credentials.email, this.credentials.password)
    })


    it("Should Play with Products", function(){
        login.goToLoginPage()       //Nevigate to Login Page
        login.validLogin(this.credentials.email, this.credentials.password)
        home.searchProduct("mac")   // Search Product
        home.addQuantity(4)     //Add Quantity
        home.addToCart()        // Add to cart
        home.scrollToFeatureSelectProduct("iPhone") // Go back to dashboard and search for another product
        // home.wishlist()     // Added to wishlist
    })
})





