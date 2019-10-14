import {Gender} from './Gender';

export const patronymicCompletions = <{[gender in Gender]: string[]}> {
  [Gender.FEMALE]: ['овна', 'евна', 'ична'],
  [Gender.MALE]: ['ович', 'евич', 'ич']
};
