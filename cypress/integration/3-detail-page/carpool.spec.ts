import { openCarpoolPage, resetCosts } from "../helpfer.func";

describe('carpool', () => {
    it('open Carpoolpage', () => {
        openCarpoolPage();
    });
    it('start Ride ', () => {
        openCarpoolPage();
        resetCosts();
        cy.wait(500);
        cy.get('[cy-data=startRide]')
        .first()
            .click()
            .click();
        cy.get('.price').should('have.text','Aktuell belaufen sich deine Spritkosten auf 10€');
    });
});
