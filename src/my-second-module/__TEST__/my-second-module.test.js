import { assert } from 'chai';
import { subtract } from '../my-second-module';

describe('My Second Module', () => {

    describe('#subtract()', () => {

        it('should subtract 2 numbers', () => {
            const expectedResult = 0;
            const result = subtract(2, 2);

            assert.equal(result, expectedResult);
        });

    });

});
