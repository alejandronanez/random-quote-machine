import { assert } from 'chai';
import { sum } from '../my-module';

describe('My Module', () => {

    describe('#sum()', () => {

        it('should return the sum of 2 numbers', () => {
            const expectedResult = 4;
            const result = sum(2, 2);

            assert.equal(result, expectedResult);
        });

    });

});
