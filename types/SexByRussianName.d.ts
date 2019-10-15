import { Sex } from './Sex';
declare type SexResult = Sex | undefined;
declare type Name = {
    firstName?: string;
    lastName?: string;
    patronymic?: string;
};
export declare class SexByRussianName {
    getSex({ firstName, lastName, patronymic }: Name): SexResult;
    protected determineSex(sexes: SexResult[]): SexResult;
    protected sexByFirstName(firstName: string): SexResult;
    protected sexByLastName(lastName: string): SexResult;
    protected sexByPatronymic(patronymic: string): SexResult;
    protected isEndingEquals(string: string, completions: string[]): boolean;
    protected getEndOfWord(string: string, count: number): string;
    protected normalize(string: string): string;
}
export {};
