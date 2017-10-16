"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe() {
    }
    TimeAgoPipe.prototype.transform = function (value) {
        var diff = Date.now() - new Date(value);
        var sign = Math.sign(diff);
        var seconds = Math.abs(Math.ceil(diff / 1000));
        var time;
        if (seconds < 60) {
            time = seconds + " seconds";
        }
        else if (seconds < 3600) {
            var minutes = Math.ceil(seconds / 60);
            time = minutes + " minutes";
        }
        else if (seconds < 86400) {
            var hours = Math.ceil(seconds / 3600);
            time = hours + " hours";
        }
        else {
            var days = Math.ceil(seconds / 86400);
            time = days + " days";
        }
        if (sign < 0) {
            return "in " + time;
        }
        else {
            return time + " ago";
        }
    };
    TimeAgoPipe = __decorate([
        core_1.Pipe({
            name: 'timeAgo'
        })
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=time-ago.pipe.js.map