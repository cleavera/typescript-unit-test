import {Expect, Suite} from '../dist/index';
import {object} from './object';

let testSuite: Suite = new Suite('Object: object');

testSuite.addTest('it should be equivalent', () => {
    /* tslint:disable object-literal-sort-keys */
    Expect(object).toEqual({
        my: 'fancy',
        nested: {
            num: 1,
            obj: 'rated',
            its: true
        }
    });
    /* tslint:enable object-literal-sort-keys */
});

testSuite.run();
