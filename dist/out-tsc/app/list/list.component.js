"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
var ListComponent = /** @class */ (function () {
    function ListComponent(http) {
        var _this = this;
        this.http = http;
        this.documentUrl = '/api/documents'; // URL to web API
        this.query = new forms_1.FormControl();
        this.getDocuments = function () {
            return _this.http.get(_this.documentUrl)
                .map(function (res) {
                var doc = res.json();
                return doc;
            })
                .toPromise()
                .then(function (documents) {
                _this.allDocuments = documents;
                _this.documents = documents;
            });
        };
        this.initSearch = function () {
            _this.query.valueChanges
                .debounceTime(200)
                .subscribe(function (newValue) {
                _this.documents = _this.allDocuments.filter(function (d) {
                    return d.Name.toLowerCase().trim().includes(newValue.toLowerCase().trim());
                });
            });
        };
        this.documents = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getDocuments();
        this.initSearch();
    };
    ListComponent = __decorate([
        core_1.Component({
            templateUrl: './list.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map