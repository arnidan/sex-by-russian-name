"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lastNameEndings_1 = require("./lastNameEndings");
var patronymicEndings_1 = require("./patronymicEndings");
var names_1 = require("./names");
var Sex_1 = require("./Sex");
var SexByRussianName = (function () {
    function SexByRussianName() {
    }
    SexByRussianName.prototype.getSex = function (_a) {
        var firstName = _a.firstName, lastName = _a.lastName, patronymic = _a.patronymic;
        var results = [];
        if (firstName) {
            results.push(this.sexByFirstName(this.normalize(firstName)));
        }
        if (lastName) {
            results.push(this.sexByLastName(this.normalize(lastName)));
        }
        if (patronymic) {
            results.push(this.sexByPatronymic(this.normalize(patronymic)));
        }
        return this.determineSex(results);
    };
    SexByRussianName.prototype.determineSex = function (sexes) {
        var male = false;
        var female = false;
        for (var _i = 0, sexes_1 = sexes; _i < sexes_1.length; _i++) {
            var sex = sexes_1[_i];
            if (sex === Sex_1.Sex.MALE) {
                male = true;
            }
            if (sex === Sex_1.Sex.FEMALE) {
                female = true;
            }
        }
        if (male && !female) {
            return Sex_1.Sex.MALE;
        }
        if (!male && female) {
            return Sex_1.Sex.FEMALE;
        }
    };
    SexByRussianName.prototype.sexByFirstName = function (firstName) {
        for (var sex in names_1.names) {
            for (var _i = 0, _a = names_1.names[sex]; _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (firstName === name_1) {
                    return sex;
                }
            }
        }
    };
    SexByRussianName.prototype.sexByLastName = function (lastName) {
        for (var sex in lastNameEndings_1.lastNameEndings) {
            var endings = lastNameEndings_1.lastNameEndings[sex];
            if (this.isEndingEquals(lastName, endings)) {
                return sex;
            }
        }
    };
    SexByRussianName.prototype.sexByPatronymic = function (patronymic) {
        for (var sex in patronymicEndings_1.patronymicEndings) {
            var endings = patronymicEndings_1.patronymicEndings[sex];
            if (this.isEndingEquals(patronymic, endings)) {
                return sex;
            }
        }
    };
    SexByRussianName.prototype.isEndingEquals = function (string, completions) {
        for (var _i = 0, completions_1 = completions; _i < completions_1.length; _i++) {
            var completion = completions_1[_i];
            var nameCompletion = this.getEndOfWord(string, completion.length);
            if (nameCompletion === completion) {
                return true;
            }
        }
        return false;
    };
    SexByRussianName.prototype.getEndOfWord = function (string, count) {
        return string.substr((string.length - count), (string.length - 1));
    };
    SexByRussianName.prototype.normalize = function (string) {
        return string
            .toLowerCase()
            .replace(/\s/g, '');
    };
    return SexByRussianName;
}());
exports.SexByRussianName = SexByRussianName;
//# sourceMappingURL=SexByRussianName.js.map