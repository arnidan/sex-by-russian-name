import { Gender } from './Gender';
declare enum NameType {
    LAST_NAME = 0,
    PATRONYMIC = 1,
    FIRST_NAME = 2
}
declare type GenderResult = Gender | undefined;
export declare class SexByRussianName {
    protected readonly lastName?: string;
    protected readonly firstName?: string;
    protected readonly patronymic?: string;
    constructor(lastName?: string, firstName?: string, patronymic?: string);
    getGender(): GenderResult;
    protected determineGender(genders: GenderResult[]): GenderResult;
    protected genderByFirstName(): GenderResult;
    protected genderBy(nameType: NameType, name: string): GenderResult;
    protected isCorrect(string: string, type: NameType, gender: Gender): boolean;
    protected isPopularName(gender: Gender): boolean;
    protected getEndOfWord(string: string, count: number): string;
    protected normalize(string: string): string;
}
export {};
