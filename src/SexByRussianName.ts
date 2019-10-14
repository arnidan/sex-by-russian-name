import {lastNameCompletions} from './lastNameCompletions';
import {patronymicCompletions} from './patronymicCompletions';
import {names} from './names';
import {Gender} from './Gender';

enum NameType {
  LAST_NAME = 0,
  PATRONYMIC = 1,
  FIRST_NAME = 2,
}

type GenderResult = Gender | undefined;

export class SexByRussianName {
  protected readonly lastName?: string;
  protected readonly firstName?: string;
  protected readonly patronymic?: string;

  constructor(
    lastName?: string,
    firstName?: string,
    patronymic?: string,
  ) {
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

  getGender(): GenderResult {
    let results: GenderResult[] = [];

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
  }

  protected determineGender(genders: GenderResult[]): GenderResult {
    let male: boolean = false;
    let female: boolean = false;

    for (const gender of genders) {
      if (gender === Gender.MALE) {
        male = true;
      }

      if (gender === Gender.FEMALE) {
        female = true;
      }
    }

    if (male && !female) {
      return Gender.MALE;
    }

    if (!male && female) {
      return Gender.FEMALE;
    }
  }

  protected genderByFirstName(): GenderResult {
    if (this.isPopularName(Gender.FEMALE)) {
      return Gender.FEMALE;
    }

    if (this.isPopularName(Gender.MALE)) {
      return  Gender.MALE;
    }
  }

  protected genderBy(nameType: NameType, name: string): GenderResult {
    if (this.isCorrect(name, nameType, Gender.FEMALE)) {
      return Gender.FEMALE;
    }

    if (this.isCorrect(name, nameType, Gender.MALE)) {
      return Gender.MALE;
    }
  }

  /**
   * Возвращает true или false, если окончание соответствует формальным правилам
   * @param {String} string (Например: "Иванова")
   * @param {Number} type, или окончание фамилии (1), или окончание отчества (0) (Например: 1)
   * @param {Number} gender, или мужской род (1), или женский род (0) (Например: 0)
   * @return {Boolean} (Например: true)
   * @private
   */
  protected isCorrect(string: string, type: NameType, gender: Gender): boolean {
    let completions: string[];

    switch (type){
      case NameType.LAST_NAME:
        completions = lastNameCompletions[gender];
        break;
      case NameType.PATRONYMIC:
        completions = patronymicCompletions[gender];
        break;
      default:
        return false;
    }

    for (const completion of completions) {
      let nameCompletion = this.getEndOfWord(string, completion.length);

      if (nameCompletion === completion) {
        return true;
      }
    }

    return false;
  }

  protected isPopularName(gender: Gender): boolean {
    const genderNames = names[gender];

    for (const name of genderNames) {
      if (this.firstName === name) {
        return true;
      }
    }

    return false;
  }

  /**
   * Возвращает окончание слова
   * @param {String} string (Например: "Иванова")
   * @param {Number} count (Например: 4)
   * @return {String} (Например: "нова")
   */
  protected getEndOfWord(string: string, count: number){
    return string.substr(
      (string.length - count),
      (string.length - 1)
    );
  }

  protected normalize(string: string) {
    return string
      .toLowerCase()
      .replace(/\s/g, '');
  }
}
