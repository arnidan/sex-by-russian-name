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
    function SexByRussianName() {
    }
    SexByRussianName.prototype.getGender = function (firstName, lastName, patronymic) {
        var results = [];
        if (lastName) {
            results.push(this.genderByLastName(lastName));
        }
        if (firstName) {
            results.push(this.genderByFirstName(firstName));
        }
        if (patronymic) {
            results.push(this.genderByPatronymic(patronymic));
        }
        return this.determineGender(results);
    };
    SexByRussianName.prototype.determineSex = function (genders) {
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
    SexByRussianName.prototype.sexByFirstName = function (firstName) {
        if (this.isPopularName(firstName, Gender_1.Gender.FEMALE)) {
            return Gender_1.Gender.FEMALE;
        }
        if (this.isPopularName(firstName, Gender_1.Gender.MALE)) {
            return Gender_1.Gender.MALE;
        }
    };
    SexByRussianName.prototype.sexByLastName = function (lastName) {
        for (var gender in lastNameCompletions_1.lastNameCompletions) {
            var completions = lastNameCompletions_1.lastNameCompletions[gender];
            if (this.isEndingEqualsWithCompletions(lastName, completions)) {
                return gender;
            }
        }
    };
    SexByRussianName.prototype.sexByPatronymic = function (patronymic) {
        for (var gender in patronymicCompletions_1.patronymicCompletions) {
            var completions = patronymicCompletions_1.patronymicCompletions[gender];
            if (this.isEndingEqualsWithCompletions(patronymic, completions)) {
                return gender;
            }
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
    SexByRussianName.prototype.isPopularName = function (firstName, gender) {
        var genderNames = names_1.names[gender];
        for (var _i = 0, genderNames_1 = genderNames; _i < genderNames_1.length; _i++) {
            var name_1 = genderNames_1[_i];
            if (firstName === name_1) {
                return true;
            }
        }
        return false;
    };
    SexByRussianName.prototype.isEndingEqualsWithCompletions = function (string, completions) {
        for (var _i = 0, completions_2 = completions; _i < completions_2.length; _i++) {
            var completion = completions_2[_i];
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
