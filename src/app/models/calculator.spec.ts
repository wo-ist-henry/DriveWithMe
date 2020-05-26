import {gasCalculator} from './calculator';

describe('calculator', () => {
    it('should calculate correct with positive Values', () =>  {
        const ergebnis1 = gasCalculator(5, 1);
        const ergebnis2 = gasCalculator(5, 2);
        expect(ergebnis1).toBe(5);
        expect(ergebnis2).toBe(10);
    });
    it('should return null by negativ inputs', () =>  {
        const ergebnis1 = gasCalculator(5, -1);
        const ergebnis2 = gasCalculator(-5, 2);
        const ergebnis3 = gasCalculator(-5, -2);
        expect(ergebnis1).toBe(null);
        expect(ergebnis2).toBe(null);
        expect(ergebnis3).toBe(null);
    });
});
