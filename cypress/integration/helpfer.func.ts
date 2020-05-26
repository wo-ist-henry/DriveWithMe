import {openSidebar} from '../support/functions/overview.po';

export const visitHome = () => {
    cy.visit('/mitfahrzentrale');
    cy.url().should('include', '/mitfahrzentrale');
};

export const openCarpoolPage = () => {
    visitHome();
    cy.wait(500);
    cy.get('[cy-data=carpool0]').click();
    cy.url().should('include', 'carpool');
};

export const resetCosts = () => {
    openCarpoolPage();
    cy.wait(500);
    cy.get('[cy-data=billRide]').click();
    cy.get('[cy-data=payRide]').click();
    cy.get('billingDialog').should('not.exist');
    cy.get('.price').should('have.text', 'Aktuell belaufen sich deine Spritkosten auf 0€');
};

export const checkAddDialogExists = () => {
    cy.get('[cy-data=saveBtn]').click();
    cy.get('[cy-data=AddCarpoolDlg]').should('exist');
    cy.get('.alert-button').click();
};

export const openAddDlg = () => {
    visitHome();
    cy.get('[cy-data=addCarpool]').click();
    cy.get('[cy-data=AddCarpoolDlg]').should('exist');
};

export const visitPage = (page: string, onMobile: boolean = false) => {
    cy.visit('');
    if (onMobile) {
        openSidebar();
    }
    cy.get('[cy-data=' + page + ']').click();
    cy.url().should('include', '/' + page + '');
};
