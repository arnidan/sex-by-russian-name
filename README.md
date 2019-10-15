# Library to detect sex by russian first name, last name and patronymic

[![Build Status](https://travis-ci.com/arnidan/sex-by-russian-name.svg?branch=master)](https://travis-ci.com/arnidan/sex-by-russian-name)
[![Coverage Status](https://coveralls.io/repos/github/arnidan/sex-by-russian-name/badge.svg?branch=master)](https://coveralls.io/github/arnidan/sex-by-russian-name?branch=master)

## Example

```js
const instance = new SexByRussianName();

instance.getSex({firstName: 'Иван', lastName: 'Иванов', patronymic: 'Иванович'});
// male
instance.getSex({firstName: 'Екатерина', lastName: 'Смирнова'});
// female
instance.getSex({});
// undefined
```

## Algorithm

More information about algorithm you can find in original library [README](https://github.com/vadimiztveri/sex_by_russian_name/blob/master/README.md#%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82) or [wiki](https://github.com/vadimiztveri/sex_by_russian_name/wiki)

## Thanks to

* [Вадим Галкин](https://github.com/vadimiztveri/) – Author of [original library](https://github.com/vadimiztveri/sex_by_russian_name)
* [Александр Борисов](https://github.com/aishek)
* [Кирилл Храпков](https://github.com/cubbiu)
