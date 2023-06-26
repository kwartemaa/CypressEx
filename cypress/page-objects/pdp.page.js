class pdp{
    elements = {
        pdpCartIcon : () => cy.get('i[class="fa fa-cart-plus fa-fw"]').first()

    }

    addToCartFromPdp(){
        this.elements.pdpCartIcon().click()
    }

}

export default pdp