import { defaultDevices as devices} from "../__helpers/default-devices"
import homepage from "../../page-objects/home.page"


    const home_page = new homepage();
    const the_search = "fragrance"

devices.forEach((device)=>{
    describe(`Search -${device.name}`, ()=>{
        const [w,h] = device.viewport

        before(()=>{
            cy.viewport(w,h)
            cy.intercept({
                method: "GET",
                path: "https://automationteststore.com/index.php?rt=product/search&keyword=fragrance&category_id=0"
            }).as('search')
            cy.clearAllCookies()
        })
        beforeEach(()=>{
            cy.viewport(w,h)
            cy.visit('/')
              })

    
        it("should trigger search via enter", ()=>{
            if(device.isMobile){
                home_page.searchMobile(`${the_search}, {enter}`)
            }else{
                home_page.search(`${the_search}, {enter}`)
            }
            // cy.wait('@search')
            cy.get('h4[class="heading4"]').last().should("be.visible")
        })

    })

})