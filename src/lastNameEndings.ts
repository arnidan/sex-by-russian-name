import {Sex} from './Sex';

export const lastNameEndings = <{[index in Sex]: string[]}> {
  [Sex.FEMALE]: ['ова', 'ева', 'ина', 'ая', 'яя', 'екая', 'цкая'],
  [Sex.MALE]: ['ов', 'ев' ,'ин' ,'ын', 'ой', 'цкий', 'ский', 'цкой', 'ской']
};
