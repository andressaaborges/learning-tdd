import { sum, div } from './calculator';

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

