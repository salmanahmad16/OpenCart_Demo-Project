import { LoginPage } from "../pages/login_page";

const login = new LoginPage()

describe("Login Page Functionality", function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it("Go to Login Page and Attempt Login", function(){
        login.goToLoginPage()
        login.validLogin(this.data.email, this.data.password)
    })








})