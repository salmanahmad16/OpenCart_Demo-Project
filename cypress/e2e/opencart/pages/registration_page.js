export class RegistrationPage{

    goToRegistrationPage(){
        cy.visit("https://opencart.abstracta.us/index.php")
        cy.get('[title="My Account"]').click()
        cy.get('.dropdown-menu-right>li>a').first().click()
    }

    validateDetailsFields(fname,lname,email,tele, pass, cpass){
        cy.get('#input-firstname').should("be.visible").type(fname)
        cy.get('#input-lastname').should("be.visible").type(lname)
        cy.get('#input-email').should("be.visible").type(email)
        cy.get('#input-telephone').should("be.visible").type(tele)
        cy.get('#input-password').should("be.visible").type(pass)
        cy.get('#input-confirm').should("be.visible").type(cpass)
    }

    
    validateErrorMessage(){
        cy.get('[type="submit"]').click()
        cy.wait(2000)
        cy.get('.has-error>div').each(($err, index, $list)=>{
            const error = $err.text()
            if(error.includes("First")){
                cy.get('.has-error>div').eq(index).then(function(err1){
                    const error1 = err1.text()
                    cy.wait(2000)
                    expect(error1).contain("First Name must be between 1 and 32 characters!")
                    cy.log(error1)

                }) 
            }
            else if(error.includes("Second")){
                cy.get('.has-error>div').eq(index).then(function(err1){
                    const error1 = err1.text()
                    cy.wait(2000)
                    expect(error1).contain("Last Name must be between 1 and 32 characters!")
                    cy.log(error1)
                }) 
            }
            else if(error.includes("E-Mail")){
                cy.get('.has-error>div').eq(index).then(function(err1){
                    const error1 = err1.text()
                    cy.wait(2000)
                    expect(error1).contain("E-Mail Address does not appear to be valid!")
                    cy.log(error1)
                }) 
            }
            else if(error.includes("Telephone")){
                cy.get('.has-error>div').eq(index).then(function(err1){
                    const error1 = err1.text()
                    cy.wait(2000)
                    expect(error1).contain("Telephone must be between 3 and 32 characters!")
                    cy.log(error1)
                }) 
            }
            else if(error.includes("Password")){
                cy.get('.has-error>div').eq(index).then(function(err1){
                    const error1 = err1.text()
                    cy.wait(2000)
                    expect(error1).contain("Password must be between 4 and 20 characters!")
                    cy.log(error1)
                }) 
            }
            

        })


    }


    validateFieldsAddValues(){
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    
        cy.get('#account > div:nth-child(3) > div > div').should("have.text", "First Name must be between 1 and 32 characters!")
        cy.get('#input-firstname').should("be.visible").type("Salman")
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    
        
        
        cy.get('#account > div:nth-child(4) > div > div').should("have.text", "Last Name must be between 1 and 32 characters!")
        cy.get('#input-lastname').should("be.visible").type("Ahmad")
        cy.get('[type="submit"]').click()
        cy.wait(3000)


        cy.get('#account > div:nth-child(5) > div > div').should("have.text", "E-Mail Address does not appear to be valid!")
        cy.get('#input-email').should("be.visible").type("khuramijaazkhan@gmail.com")
        cy.get('[type="submit"]').click()
        cy.wait(3000)


        cy.get('#account > div:nth-child(6) > div > div').should("have.text", "Telephone must be between 3 and 32 characters!")
        cy.get('#input-telephone').should("be.visible").type("03314412354")
        cy.get('[type="submit"]').click()
        cy.wait(3000)

    }

    validatePassword1_invalid(pass, cpass){
        // if password and confirm password are same but length less then limit
        cy.get('#input-password').should("be.visible").type(pass)
        cy.wait(3000)
        cy.get('#input-confirm').should("be.visible").type(cpass)
        cy.wait(3000)
        cy.get('[type="submit"]').click()
        cy.wait(3000)
        cy.get('#content > form > fieldset:nth-child(2) > div:nth-child(2) > div > div').should("have.text", "Password must be between 4 and 20 characters!")
       
        

    }

    validatePassword2_invalid(pass, cpass){
        // if password and confirm password are not same and length less then limit
        cy.get('#input-password').should("be.visible").type(pass)
        cy.wait(3000)
        cy.get('#input-confirm').should("be.visible").type(cpass)
        cy.wait(3000)
        cy.get('[type="submit"]').click()
        // cy.get('#content > form > fieldset:nth-child(2) > div:nth-child(2) > div > div').should("have.text", "Password must be between 4 and 20 characters!")
        cy.wait(3000)
        cy.get('#content > form > fieldset:nth-child(2) > div:nth-child(3) > div > div').should("have.text", "Password confirmation does not match password!")
        cy.wait(3000)

    }
    validatePassword3_invalid(pass, cpass){
        // if password and confirm password are not same and length is according to requriment
        cy.get('#input-password').should("be.visible").type(pass)
        cy.wait(3000)
        cy.get('#input-confirm').should("be.visible").type(cpass)
        cy.wait(3000)
        cy.get('[type="submit"]').click()
        cy.wait(3000)
        cy.get('#content > form > fieldset:nth-child(2) > div:nth-child(3) > div > div').should("have.text", "Password confirmation does not match password!")
        cy.wait(3000)

    }
    validatePassword_valid(pass, cpass){
        // Valid password 
        cy.get('#input-password').should("be.visible").type(pass)
        cy.wait(3000)
        cy.get('#input-confirm').should("be.visible").type(cpass)
        cy.wait(3000)
        cy.get('[type="submit"]').click()
        cy.wait(3000)

    }

    privacyPolicy(){
        cy.get('[type="checkbox"]').should("be.visible").and("not.be.checked")
        cy.wait(2000)
        cy.get('[type="checkbox"]').should("be.visible").check()
        cy.get('[type="checkbox"]').should("be.visible").and("be.checked")
        cy.wait(2000)



    }

    continueToCreateAccount(){
        cy.wait(5000)
        cy.get('[type="submit"]').should("have.value", "Continue").and("be.visible").click()
        cy.wait(3000)
        cy.get('#content>p:nth-child(2)').then($text=>{
            const textcheck = $text.text()
            cy.wait(2000)
            if (textcheck == "Thank you for registering with Your Store!"){
                cy.wait(2000)
                cy.title().should("eq","Your Account Has Been Created!")
            }
            else{
                cy.wait(8000)
                cy.get('#account-register>div:nth-child(2)').contains(" Warning: E-Mail Address is already registered!")
                cy.log("Validate That Account Already Created")

            }
            
        })
        
       
    }


    
}

