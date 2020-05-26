import {addCarpool, checkRequiredFields} from '../../support/functions/home.po';

describe('Home', () => {
    context('1080p Resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
        });
        it('check required Fields on Desktop', () => {
            checkRequiredFields();
        });
        it('add a Carpool on Desktop', () => {
            addCarpool();
        });
    });
    context('iphone-x', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        });
        it('check required Fields on Mobile', () => {
            checkRequiredFields();
        });
        it('add a Carpool on Mobile', () => {
           addCarpool();
        });
    });
});
