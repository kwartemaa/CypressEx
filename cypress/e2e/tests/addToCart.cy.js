import { defaultDevices as devices} from "../__helpers/default-devices"
import homepage from "../../page-objects/home.page"
import pdp from "../../page-objects/PDP.page";


    const home_page = new homepage();
    const product_details = new pdp();
    
devices.forEach((device)=>{
    describe(`Add product to cart -${device.name}`, ()=>{
        const [w,h] = device.viewport

        before(()=>{
            cy.viewport(w,h)
            cy.clearAllCookies()
        })
        beforeEach(()=>{
            cy.viewport(w,h)
            cy.intercept({
                method: "GET",
                path: "/index.php?rt=r/product/product/addToCart&product_id=50"
            }).as('addToCart')
            cy.intercept({
                method: "GET",
                path: "/index.php?rt=r/product/product/addToCart"
            }).as('addToCartPDP')
            cy.visit('/')
              })

    
        it("should add to cart from home page", ()=>{
            home_page.addToCartFromHome()                 
            cy.wait('@addToCart').its('response.body')
            .should('have.property', 'item_count', 1 )
            console.log("Hello Annie")
            })

        it("should add to cart form PDP", ()=>{
            home_page.navigateToPDP()
            product_details.addToCartFromPdp()
            cy.wait('@addToCartPDP')
            cy.get('input[id="cart_quantity50"]').should('have.attr', 'value')
            // expect('input[id="cart_quantity50"]').to.have.prop('value', 1)

            // cy.intercept({
            //     method: "GET",
            //     path: "/index.php?rt=r/product/product/addToCart"
            // }).as('addToCartPDP')
            // cy.wait('@addToCartPDP').its('response.body')
            // .should('have.property', 'item_count', 1 )
            
            })
        


        } )
        })

    

