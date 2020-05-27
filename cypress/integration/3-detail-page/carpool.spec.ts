import {startRide} from '../../support/functions/carpool.po';
import {addCarpool} from '../../support/functions/home.po';

describe('carpool', () => {
    context('1080p resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
        });
        it('start Ride on Desktop', () => {
            addCarpool();
            startRide();
        });
    });
    context('iphone-x', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        });
        it('start Ride on Mobile', () => {
            addCarpool();
            startRide();
        });
    });
});
