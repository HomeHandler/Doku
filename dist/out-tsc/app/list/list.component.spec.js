"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var list_component_1 = require("./list.component");
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [list_component_1.ListComponent] });
    });
    it('should work', function () {
        var fixture = testing_1.TestBed.createComponent(list_component_1.ListComponent);
        expect(fixture.componentInstance instanceof list_component_1.ListComponent).toBe(true, 'should create AppComponent');
    });
});
//# sourceMappingURL=list.component.spec.js.map