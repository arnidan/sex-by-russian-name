"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lastNameCompletions_1 = require("./lastNameCompletions");
var patronymicCompletions_1 = require("./patronymicCompletions");
var names_1 = require("./names");
var Gender_1 = require("./Gender");
var NameType;
(function (NameType) {
    NameType[NameType["LAST_NAME"] = 0] = "LAST_NAME";
    NameType[NameType["PATRONYMIC"] = 1] = "PATRONYMIC";
    NameType[NameType["FIRST_NAME"] = 2] = "FIRST_NAME";
})(NameType || (NameType = {}));
var SexByRussianName = (function () {
    function SexByRussianName(lastName, firstName, patronymic) {
        if (lastName) {
            this.lastName = this.normalize(lastName);
        }
        if (firstName) {
            this.firstName = this.normalize(firstName);
        }
        if (patronymic) {
            this.patronymic = this.normalize(patronymic);
        }
    }
    SexByRussianName.prototype.getGender = function () {
        var results = [];
        if (this.lastName) {
            results.push(this.genderBy(NameType.LAST_NAME, this.lastName));
        }
        if (this.firstName) {
            results.push(this.genderByFirstName());
        }
        if (this.patronymic) {
            results.push(this.genderBy(NameType.PATRONYMIC, this.patronymic));
        }
        return this.determineGender(results);
    };
    SexByRussianName.prototype.determineGender = function (genders) {
        var male = false;
        var female = false;
        for (var _i = 0, genders_1 = genders; _i < genders_1.length; _i++) {
            var gender = genders_1[_i];
            if (gender === Gender_1.Gender.MALE) {
                male = true;
            }
            if (gender === Gender_1.Gender.FEMALE) {
                female = true;
            }
        }
        if (male && !female) {
            return Gender_1.Gender.MALE;
        }
        if (!male && female) {
            return Gender_1.Gender.FEMALE;
        }
    };
    SexByRussianName.prototype.genderByFirstName = function () {
        if (this.isPopularName(Gender_1.Gender.FEMALE)) {
            return Gender_1.Gender.FEMALE;
        }
        if (this.isPopularName(Gender_1.Gender.MALE)) {
            return Gender_1.Gender.MALE;
        }
    };
    SexByRussianName.prototype.genderBy = function (nameType, name) {
        if (this.isCorrect(name, nameType, Gender_1.Gender.FEMALE)) {
            return Gender_1.Gender.FEMALE;
        }
        if (this.isCorrect(name, nameType, Gender_1.Gender.MALE)) {
            return Gender_1.Gender.MALE;
        }
    };
    SexByRussianName.prototype.isCorrect = function (string, type, gender) {
        var completions;
        switch (type) {
            case NameType.LAST_NAME:
                completions = lastNameCompletions_1.lastNameCompletions[gender];
                break;
            case NameType.PATRONYMIC:
                completions = patronymicCompletions_1.patronymicCompletions[gender];
                break;
            default:
                return false;
        }
        for (var _i = 0, completions_1 = completions; _i < completions_1.length; _i++) {
            var completion = completions_1[_i];
            var nameCompletion = this.getEndOfWord(string, completion.length);
            if (nameCompletion === completion) {
                return true;
            }
        }
        return false;
    };
    SexByRussianName.prototype.isPopularName = function (gender) {
        var genderNames = names_1.names[gender];
        for (var _i = 0, genderNames_1 = genderNames; _i < genderNames_1.length; _i++) {
            var name_1 = genderNames_1[_i];
            if (this.firstName === name_1) {
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