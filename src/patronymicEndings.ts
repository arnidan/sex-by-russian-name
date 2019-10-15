import {Sex} from './Sex';

export const patronymicEndings = <{[index in Sex]: string[]}> {
  [Sex.FEMALE]: ['овна', 'евна', 'ична'],
  [Sex.MALE]: ['ович', 'евич', 'ич']
};
