import {openCarpoolPage} from '../../integration/helpfer.func';

export function startRide() {
    openCarpoolPage();
    cy.get('[cy-data=startRide]')
        .first()
        .click()
        .click();
}
