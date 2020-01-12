context('carpool', () => {
    const visitHome = () => {
        cy.visit('/mitfahrzentrale');
        cy.url().should('include', '/mitfahrzentrale');
    };
    const openCarpoolPage = () => {
        visitHome();
        cy.get('[cy-data=carpool0]').click();
        cy.url().should('include', 'carpool');
    };
    const resetCosts = () => {
        openCarpoolPage();
        cy.wait(500);
        cy.get('[cy-data=billRide]').click();
        cy.get('[cy-data=payRide]').click();
        cy.get('billingDialog').should('not.exist');
    };
    it('open Carpoolpage', () => {
        openCarpoolPage();
    });
    it('start Ride ', () => {
        openCarpoolPage();
        resetCosts();
        cy.wait(500);
        cy.get('[cy-data=startRide]')
            .click()
            .click();
    });
});
