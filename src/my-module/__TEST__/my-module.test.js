import { assert } from 'chai';
import { sum, subtract } from '../my-module';

describe('MyModule', () => {

    describe('#sum()', () => {

        it('should return the sum of 2 numbers', () => {
            const expectedResult = 4;
            const result = sum(2, 2);

            assert.equal(result, expectedResult);
        });

        it('should return the sum of 2 numbers', () => {
            const expectedResult = 0;
            const result = subtract(2, 2);

            assert.equal(result, expectedResult);
        });

    });

});
