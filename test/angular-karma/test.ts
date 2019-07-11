// you need unlinked npm-s!!!

import {TestBed} from '@angular/core/testing';

import * as test from '../../src/index';

describe('Material', () => {
    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                declarations: [
                    test
                ]
            }
        );
    });
    it('should work', () => {
//        let fixture = TestBed.createComponent(Page);
//        expect(fixture.componentInstance instanceof Page).toBe(true, 'should create a Page');
    });
});
