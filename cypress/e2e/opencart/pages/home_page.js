
/// <reference types = "cypress" />

export class HomePage{
    selectCurrency(value){
        const currency = value
        cy.get('[data-toggle="dropdown"]').first().click()
        cy.wait(1000)
        cy.get("[name="+currency+"]").should("be.visible").click()
        cy.wait(3000)
        if(currency=="USD"){
            cy.wait(1000)
            cy.get('[data-toggle="dropdown"]>strong').then(text=>{
                expect(text.text()).to.eq("$")
            })

        }
        else if(currency=="EUR"){
            cy.wait(1000)
            cy.get('[data-toggle="dropdown"]>strong').then(text=>{
                expect(text.text()).to.eq("€")
            })

        }
        else{
            cy.wait(2000)
            cy.get('[data-toggle="dropdown"]>strong').then(text=>{
                expect(text.text()).to.eq("£")
            })
        }
    }


    searchProduct(product){
        cy.wait(1000)
        cy.get('input[name="search"]').should("be.visible").type(product).then(function(){
            cy.get('#search>span>button').should("be.visible").click()
            cy.wait(1000)
        })
        cy.get('.caption>h4>a').each(($ele, index, $list)=>{
            const prod = $ele.text()
            if(prod=="iMac"){
                cy.get('.caption>h4>a').eq(index).click()
            }
        })
        

    }

    addQuantity(numb){
        cy.wait(2000)
        cy.get('input[name="quantity"]').clear().type(numb)
        cy.wait(4000)
    }
    addToCart(){
        // + validate success message, validate cart page
        cy.get('#button-cart').should("be.visible").click()
        cy.wait(5000).then(function(){
            cy.get('.alert-success').contains("Success: You have added ")
        })
        cy.get('.alert-success>a:nth-child(2)').should("be.visible").click()
        cy.wait(2000)
        cy.title().should("eq", "Shopping Cart")
        cy.wait(2000)
        cy.get('#logo>h1>a').should("be.visible").click() // go to back dashboard - with continiue shopping btn
        cy.wait(2000)
        
        cy.title().should("eq", "Your Store")
    }

    scrollToFeatureSelectProduct(prod){
        cy.get('h3').contains("Featured").scrollIntoView({duration:2000})
        cy.get('.caption>h4>a').each(($ele, index, $list)=>{
            const prod = $ele.text()
            if(prod=="iPhone"){
                cy.get('.caption>h4>a').eq(index).click()
            }
        })
        cy.wait(2000)

    }
    wishlist(){
        cy.wait(2000)
        cy.get('[data-original-title="Add to Wish List"]').first().should("be.visible").click() // click on wishlist btn
        cy.wait(4000)
        cy.get('.alert-success').contains("Success: You have added ") // validate success message
        cy.wait(2000)
        cy.get('.alert-success>a:nth-child(3)').should("be.visible").click()  // go to wishlist
        cy.wait(3000)
        cy.get('.breadcrumb>li:nth-child(3)').contains("My Wish List")
        cy.wait(4000)

    }
    
}