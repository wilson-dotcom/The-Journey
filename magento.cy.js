it(`shopping`,()=>{

    cy.visit(`https://magento.softwaretestingboard.com/`)

    cy.get('.home-pants > img'). click()
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('#option-label-size-143-item-171').click()
    cy.get('#option-label-size-143-item-172').click()
    cy.get('#option-label-color-93-item-56').click()
    cy.wait(3000)
    cy.get('#product-addtocart-button').click()
    cy.wait(3000)
    cy.get('.showcart > .counter').click()
    cy.wait(3000)
    cy.get('#top-cart-btn-checkout').click()
    cy.wait(10000)
    cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(`wilson@yahoo.com`)
    cy.get('#IIQG1W3').type(`wilson`)
    cy.get('#D4L9L1O').type(`dickson`)
    cy.get('#CVHM633').type(`5th avenue, festac`)
    cy.get('#CBRPG2R').type(`festac`)
    cy.get('#POK5T99').click()
   
    

    
})