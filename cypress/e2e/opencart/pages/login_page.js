export class LoginPage{

    goToLoginPage(){
        cy.visit("https://opencart.abstracta.us/index.php")
        cy.get('[title="My Account"]').click()
        cy.wait(2000)
        cy.get('.dropdown-menu-right>li:nth-child(2)>a').click()

    }

    inValidLogin(email, pass){
        // wrong email and wrong password - handled all negative cases
        cy.wait(2000)
        cy.get('#input-email').should("be.visible").type(email)
        cy.get('#input-password').should("be.visible").type(pass)
        cy.get('input[value="Login"]').should("be.visible").click()
        cy.wait(2000)
        cy.get('#account-login>div:nth-child(2)').contains(" Warning: No match for E-Mail Address and/or Password.")
        cy.wait(2000)

    }
    validLogin(email, pass){
        // valid email and password
        cy.wait(2000)
        cy.get('#input-email').should("be.visible").type(email)
        cy.get('#input-password').should("be.visible").type(pass)
        cy.get('input[value="Login"]').should("be.visible").click()
        cy.wait(2000)
        cy.title().should("eq","My Account")

    }


}