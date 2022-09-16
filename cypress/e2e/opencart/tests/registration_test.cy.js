
import {RegistrationPage} from "../pages/registration_page";

const reg = new RegistrationPage()

describe("Registration Page - and Validate Title", function(){

    // before(function(){
    //     cy.fixture("/cypress/fixtures/example").then(function(data){
    //         this.data = data
    //     })
    // })


    // beforeEach(() => {
    //     reg.goToRegistrationPage()
    //   })
    
    it("Go to Registration Page", function(){
        
        reg.goToRegistrationPage()
        cy.title().should("contain", "Register Account")
    })

    it.skip("Negative Test Cases - Not filling any field", function(){
        
        reg.validateErrorMessage() 
    })

    it.skip("Positive Test Cases", function(){
        
        reg.validateDetailsFields("salman","ahmad","sulmanmansha@gmail.com","03314412354", "Salman123456", "Salman123456")
      
    })

    it("ValidateField and Enter Values", function(){

        reg.validateFieldsAddValues() // entered correct values

    })

    it("Validate passwords", function(){
        // reg.validatePassword1_invalid("123","123")  // Same password but limit is less
        // reg.validatePassword2_invalid("123","321")           //password and confirm password are not same and length less then limit
        // reg.validatePassword3_invalid("12345", "54321")             //password and confirm password are not same and length is according to requriment
        reg.validatePassword_valid("Salman123456","Salman123456") //Valid Password
    })

    it("Privacy Policy Check Box", function(){
        reg.privacyPolicy()
    })

    it("Create account Successfully", function(){
        
        reg.continueToCreateAccount()
        
    })
})