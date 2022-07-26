import { sum, div, sub, mul } from './calculator';

describe('Tests for sum() function', () => {
    test('adds 1 + 2 to equal 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    test('adds 3 + 2 to equal 5', () => {
        const result = sum(3, 2);
        expect(result).toBe(5);
    });
});

describe('Tests for div() function', () => {
    test('divide 4/4 is equal to 1', () => {
        const result = div(4, 4);
        expect(result).toBe(1);
    });

    test('divide 1/10 is equal to 0.1', () => {
        const result = div(1, 10);
        expect(result).toBe(0.1);
    });
});

describe('Tests for sub() function', () => {
    test('subtract 20 - 9 is equal 11', () => {
        const result = sub(20, 9);
        expect(result).toBe(11);
    });

    test('subtract 17 - 87 is equal -70', () => {
        const result = sub(17, 87);
        expect(result).toBe(-70);
    });
});

describe('Tests for mul() function', () => {
    test('multiplying 4 * 6 is equal 24', () => {
        const result = mul(4, 6);
        expect(result).toBe(24);
    });
});