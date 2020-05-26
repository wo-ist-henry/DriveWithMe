import {startRide} from '../../support/functions/carpool.po';

describe('carpool', () => {
    context('1080p resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
        });
        it('start Ride on Desktop', () => {
            startRide();
        });
    });
    context('iphone-x', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        });
        it('start Ride on Mobile', () => {
            startRide();
        });
    });
});
