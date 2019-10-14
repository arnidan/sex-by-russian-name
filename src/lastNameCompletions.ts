import {Gender} from './Gender';

export const lastNameCompletions = <{[gender in Gender]: string[]}> {
  [Gender.FEMALE]: ['ова', 'ева', 'ина', 'ая', 'яя', 'екая', 'цкая'],
  [Gender.MALE]: ['ов', 'ев' ,'ин' ,'ын', 'ой', 'цкий', 'ский', 'цкой', 'ской']
};
