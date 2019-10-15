import { Gender } from './Gender';
declare enum NameType {
    LAST_NAME = 0,
    PATRONYMIC = 1,
    FIRST_NAME = 2
}
declare type GenderResult = Gender | undefined;
export declare class SexByRussianName {
    getGender(firstName?: string, lastName?: string, patronymic?: string): GenderResult;
    protected determineGender(genders: GenderResult[]): GenderResult;
    protected genderByFirstName(firstName: string): GenderResult;
    protected genderByLastName(lastName: string): GenderResult;
    protected genderByPatronymic(patronymic: string): GenderResult;
    protected isCorrect(string: string, type: NameType, gender: Gender): boolean;
    protected isPopularName(firstName: string, gender: Gender): boolean;
    protected isEndingEqualsWithCompletions(string: string, completions: string[]): boolean;
    protected getEndOfWord(string: string, count: number): string;
    protected normalize(string: string): string;
}
export {};
