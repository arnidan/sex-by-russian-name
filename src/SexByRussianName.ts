import {lastNameEndings} from './lastNameEndings';
import {patronymicEndings} from './patronymicEndings';
import {names} from './names';
import {Sex} from './Sex';

type SexResult = Sex | undefined;

type Name = {
  firstName?: string,
  lastName?: string,
  patronymic?: string,
}

export class SexByRussianName {

  public getSex({firstName, lastName, patronymic}: Name): SexResult {
    let results: SexResult[] = [];

    if (firstName) {
      results.push(
        this.sexByFirstName(this.normalize(firstName))
      );
    }

    if (lastName) {
      results.push(
        this.sexByLastName(this.normalize(lastName))
      );
    }

    if (patronymic) {
      results.push(
        this.sexByPatronymic(this.normalize(patronymic))
      );
    }

    return this.determineSex(results);
  }

  protected determineSex(sexes: SexResult[]): SexResult {
    let male: boolean = false;
    let female: boolean = false;

    for (const sex of sexes) {
      if (sex === Sex.MALE) {
        male = true;
      }

      if (sex === Sex.FEMALE) {
        female = true;
      }
    }

    if (male && !female) {
      return Sex.MALE;
    }

    if (!male && female) {
      return Sex.FEMALE;
    }
  }

  protected sexByFirstName(firstName: string): SexResult {
    for (const sex in names) {
      for (const name of names[sex as Sex]) {
        if (firstName === name) {
          return sex as Sex;
        }
      }
    }
  }

  protected sexByLastName(lastName: string): SexResult {
    for (let sex in lastNameEndings) {
      const endings = lastNameEndings[sex as Sex];

      if (this.isEndingEquals(lastName, endings)) {
        return sex as Sex;
      }
    }
  }

  protected sexByPatronymic(patronymic: string): SexResult {
    for (let sex in patronymicEndings) {
      const endings = patronymicEndings[sex as Sex];

      if (this.isEndingEquals(patronymic, endings)) {
        return sex as Sex;
      }
    }
  }

  protected isEndingEquals(string: string, completions: string[]) {
    for (const completion of completions) {
      let nameCompletion = this.getEndOfWord(string, completion.length);

      if (nameCompletion === completion) {
        return true;
      }
    }

    return false;
  }

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
