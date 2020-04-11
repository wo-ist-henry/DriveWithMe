import {isNumber} from './add-carpool.func';

describe('add-carpool', () => {
    it('check isNumber with Number', () => {
        expect(isNumber('2')).toBe(true);
    });
    it('check isNumber with String', () => {
        expect(isNumber('s')).toBe(false);
    });
});
