import sum from './sum';

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

