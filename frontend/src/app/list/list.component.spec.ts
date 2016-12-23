import { TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [ListComponent]});
    });

    it ('should work', () => {
        let fixture = TestBed.createComponent(ListComponent);

        expect(fixture.componentInstance instanceof ListComponent).toBe(true, 'should create AppComponent');
    });
});
