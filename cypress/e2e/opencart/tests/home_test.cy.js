import { LoginPage } from "../pages/login_page";
import { HomePage } from "../pages/home_page";

const login = new LoginPage()
const home = new HomePage()

describe("Home Page", function(){

    it("Should Perform Login, Verify Home Page, Change Currency", function(){
        login.goToLoginPage()
        login.validLogin("sulmanmansha@gmail.com", "Salman123456")
        // home.selectCurrency("GBP")
        home.searchProduct("mac")
    })
    it("Should add quantity of product and add to cart", function(){
        home.addQuantity(5)
        home.addToCart()
        home.scrollToFeatureSelectProduct("iPhone")
        home.wishlist()
    })
})