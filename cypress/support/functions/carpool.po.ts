import {openCarpoolPage, resetCosts} from '../../integration/helpfer.func';

export function startRide() {
    openCarpoolPage();
    resetCosts();
    cy.wait(500);
    cy.get('[cy-data=startRide]')
        .first()
        .click()
        .click();
}
