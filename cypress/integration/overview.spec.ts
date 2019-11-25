context('overview', () => {
    it('visit Home', () => {
        cy.visit('');
        cy.get('[cy-data=home]').click();
        cy.url().should('include', '/mitfahrzentrale');
    });
    it('visit Export', () => {
        cy.visit('');
        cy.get('[cy-data=export]').click();
        cy.url().should('include', '/export');
    });
});
