import {getRides} from './carpool.functions';

describe('CarpoolPage', () => {
    it('getRides', () => {
        const carpool = {id: 'f762c7da-f634-414b-004a-9dbf17a77953', driver: 'Henrx', payment: 1, price: 5, currentMonth: []};
        expect(getRides(carpool.currentMonth)).toBe(0);
    });
});
