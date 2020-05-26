import {visitPage} from './../helpfer.func';

describe('overview', () => {
    context('1080p resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
        });
        it('visit Home on Desktop', () => {
            visitPage('mitfahrzentrale');
        });
        it('visit Export on Desktop', () => {
            visitPage('export');
        });
    });
    context('iphone-x', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        });
        it('visit Home on Mobile', () => {
            visitPage('mitfahrzentrale', true);
        });
        it('visit Export on Mobile', () => {
            visitPage('export', true);
        });
    });
});
