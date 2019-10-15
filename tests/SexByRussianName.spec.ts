import {SexByRussianName} from '../src/SexByRussianName';
import {Sex} from '../src/Sex';

describe('SexByRussianName#getSex', function() {
  const sexByRussianName = new SexByRussianName();

  describe('undefined', function() {
    it('returns undefined on empty', function() {
      expect(sexByRussianName.getSex({})).toBeUndefined();
    });

    it('returns undefined on male last name and female first name, patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Людмила', lastName: 'Иванов', patronymic: 'Ивановна'})).toBeUndefined();
    });

    it('returns undefined on male first name and female last name, patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Игорь', lastName: 'Иванова', patronymic: 'Ивановна'})).toBeUndefined();
    });

    it('returns undefined on male patronymic and female last name, first name', function() {
      expect(sexByRussianName.getSex({firstName: 'Людмила', lastName: 'Иванова', patronymic: 'Иванович'})).toBeUndefined();
    });

    it('returns undefined on female last name and male first name, patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Олег', lastName: 'Михайлова', patronymic: 'Николаевич'})).toBeUndefined();
    });

    it('returns undefined on female first name and male last name, patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Ольга', lastName: 'Сидоров', patronymic: 'Петрович'})).toBeUndefined();
    });

    it('returns undefined on female patronymic and male last name, first name', function() {
      expect(sexByRussianName.getSex({firstName: 'Василий', lastName: 'Петров', patronymic: 'Владимировна'})).toBeUndefined();
    });

    it('returns undefined on female last name and male first name, empty patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Николай', lastName: 'Косова'})).toBeUndefined();
    });

    it('returns undefined on female last name and male patronymic, empty first name', function() {
      expect(sexByRussianName.getSex({lastName: 'Светланова', patronymic: 'Ремович'})).toBeUndefined();
    });

    it('returns undefined on female first name and male last name, empty patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Ирина', lastName: 'Петров'})).toBeUndefined();
    });

    it('returns undefined on female first name and male patronymic, empty last name', function() {
      expect(sexByRussianName.getSex({firstName: 'Наталья', patronymic: 'Святославович'})).toBeUndefined();
    });

    it('returns undefined on female patronymic and male last name, empty first name', function() {
      expect(sexByRussianName.getSex({lastName: 'Кондратьев', patronymic: 'Викторовна'})).toBeUndefined();
    });

    it('returns undefined on female patronymic and male first name, empty last name', function() {
      expect(sexByRussianName.getSex({firstName: 'Потап', patronymic: 'Ремовна'})).toBeUndefined();
    });

    it('returns undefined on male last name and female first name, empty patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Светлана', lastName: 'Храпков'})).toBeUndefined();
    });

    it('returns undefined on male last name and female patronymic, empty first name', function() {
      expect(sexByRussianName.getSex({lastName: 'Галкин', patronymic: 'Вадимовна'})).toBeUndefined();
    });

    it('returns undefined on male first name and female last name, empty patronymic', function() {
      expect(sexByRussianName.getSex({firstName: 'Александр', lastName: 'Гончарова'})).toBeUndefined();
    });

    it('returns undefined on male first name and female patronymic, empty last name', function() {
      expect(sexByRussianName.getSex({firstName: 'Вадим', patronymic: 'Олеговна'})).toBeUndefined();
    });

    it('returns undefined on male patronymic and female last name, empty first name', function() {
      expect(sexByRussianName.getSex({lastName: 'Короткова', patronymic: 'Борисович'})).toBeUndefined();
    });

    it('returns undefined on male patronymic and female first name, empty last name', function() {
      expect(sexByRussianName.getSex({firstName: 'Вита', patronymic: 'Сергеевич'})).toBeUndefined();
    });
  });

  describe('female', function() {
    describe('3 correct names', function() {
      it(('returns female for full name'), function() {
        expect(sexByRussianName.getSex({firstName: 'Аглая', lastName: 'Михайлова', patronymic: 'Витальевна'})).toBe(Sex.FEMALE);
      });
    });

    describe('2 correct names and empty last name', function() {
      it(('returns female for full name'), function() {
        expect(sexByRussianName.getSex({firstName: 'Виталия', patronymic: 'Мухтаровна'})).toBe(Sex.FEMALE);
      });
    });

    describe('2 correct names and empty first name', function() {
      it(('returns female for full name'), function() {
        expect(sexByRussianName.getSex({lastName: 'Козлова', patronymic: 'Лимоновна'})).toBe(Sex.FEMALE);
      });
    });

    describe('2 correct names and empty patronymic', function() {
      it(('returns female for full name'), function() {
        expect(sexByRussianName.getSex({firstName: 'Марина', lastName: 'Паравозова'})).toBe(Sex.FEMALE);
      });
    });

    describe('patronymic', function() {
      const femalePatronymicCompletion = ['овна', 'евна', 'ична'];
      const femalePatronymic = ['Ивановна', 'Витальевна', 'Лукична'];

      const specWithPatronymic = function(patronymic: string, completion: string) {
        it(('returns female «' + completion + '»'), function() {
          expect(sexByRussianName.getSex({patronymic})).toBe(Sex.FEMALE);
        });
      };

      for (var i=0; i < femalePatronymicCompletion.length; i++) {
        specWithPatronymic(femalePatronymic[i], femalePatronymicCompletion[i]);
      }
    });

    describe('last name', function() {
      const femaleLastNameCompletions = ['ова', 'ева', 'ина', 'ая', 'яя', 'екая', 'цкая'];
      const femaleLastNames = ['Петрова', 'Елисеева', 'Коренина', 'Троцкая', 'Нижняя', 'Калекая', 'Блавацкая'];

      const specWithLastName = function(lastName: string, completion: string)  {
        it(('returns female «' + completion + '»'), function() {
          expect(sexByRussianName.getSex({lastName})).toBe(Sex.FEMALE);
        });
      };

      for (var i=0; i < femaleLastNameCompletions.length; i++) {
        specWithLastName(femaleLastNames[i], femaleLastNameCompletions[i]);
      }
    });

    describe('first name', function() {
      const femaleNames = ['авдотья', 'аврора', 'агата', 'агния', 'агриппина', 'ада', 'аксинья', 'алевтина', 'александра', 'алёна', 'алина', 'алиса', 'алла', 'альбина', 'амалия', 'анастасия', 'ангелина', 'анжела', 'анжелика', 'анна', 'антонина', 'анфиса', 'арина', 'белла', 'божена', 'валентина', 'валерия', 'ванда', 'варвара', 'василина', 'василиса', 'вера', 'вероника', 'виктория', 'виола', 'виолетта', 'вита', 'виталия', 'владислава', 'власта', 'галина', 'глафира', 'дарья', 'диана', 'дина', 'ева', 'евгения', 'евдокия', 'евлампия', 'екатерина', 'елена', 'елизавета', 'ефросиния', 'ефросинья', 'жанна', 'зиновия', 'злата', 'зоя', 'ивонна', 'изольда', 'илона', 'инга', 'инесса', 'инна', 'ирина', 'ия', 'капитолина', 'карина', 'каролина', 'кира', 'клавдия', 'клара', 'клеопатра', 'кристина', 'ксения', 'лада', 'лариса', 'лиана', 'лидия', 'лилия', 'лина', 'лия', 'лора', 'любава', 'любовь', 'людмила', 'майя', 'маргарита', 'марианна', 'мариетта', 'марина', 'мария', 'марья', 'марта', 'марфа', 'марьяна', 'матрёна', 'матрена', 'матрона', 'милена', 'милослава', 'мирослава', 'муза', 'надежда', 'настасия', 'настасья', 'наталия', 'наталья', 'нелли', 'ника', 'нина', 'нинель', 'нонна', 'оксана', 'олимпиада', 'ольга', 'пелагея', 'полина', 'прасковья', 'раиса', 'рената', 'римма', 'роза', 'роксана', 'руфь', 'сарра', 'светлана', 'серафима', 'снежана', 'софья', 'софия', 'стелла', 'степанида', 'стефания', 'таисия', 'таисья', 'тамара', 'татьяна', 'ульяна', 'устиния', 'устинья', 'фаина', 'фёкла', 'феодора', 'хаврония', 'христина', 'эвелина', 'эдита', 'элеонора', 'элла', 'эльвира', 'эмилия', 'эмма', 'юдифь', 'юлиана', 'юлия', 'ядвига', 'яна', 'ярослава'];
       const specWithName = function(firstName: string) {
          it(('returns female «' + firstName + '»'), function() {
            expect(sexByRussianName.getSex({firstName})).toBe(Sex.FEMALE);
          });
        };

      for (var i=0; i < femaleNames.length; i++) {
        specWithName(femaleNames[i]);
      }
    });
  });

  describe('male', function() {
    describe('3 correct names', function() {
      it(('returns male for full name'), function() {
        expect(sexByRussianName.getSex({firstName: 'Владимир', lastName: 'Фомин', patronymic: 'Кузьмич'})).toBe(Sex.MALE);
      });
    });

    describe('2 correct names and empty last name', function() {
      it(('returns male for full name'), function() {
        expect(sexByRussianName.getSex({firstName: 'Александр', patronymic: 'Сергеевич'})).toBe(Sex.MALE);
      });
    });

    describe('2 correct names and empty first name', function() {
      it(('returns male for full name'), function() {
        expect(sexByRussianName.getSex({lastName: 'Медведев', patronymic: 'Анатольевич'})).toBe(Sex.MALE);
      });
    });

    describe('2 correct names and empty patronymic', function() {
      it(('returns male for full name'), function() {
        expect(sexByRussianName.getSex({firstName: 'Лев', lastName: 'Толстой'})).toBe(Sex.MALE);
      });
    });

    describe('patronymic', function() {
      var malePatronymicCompletion = ['ович', 'евич', 'ич'],
        malePatronymic = ['Витайлевич', 'Михайлович', 'Лукич'],
        specWithPatronymic = function(patronymic: string, completion: string) {
          it(('returns male «' + completion + '»'), function() {
            expect(sexByRussianName.getSex({patronymic})).toBe(Sex.MALE);
          });
        };

      for (var i=0; i < malePatronymicCompletion.length; i++) {
        specWithPatronymic(malePatronymic[i], malePatronymicCompletion[i]);
      }
    });

    describe('lastName', function() {

      const maleLastNameCompletion = ['ов', 'ев' ,'ин' ,'ын', 'ой', 'цкий', 'ский', 'цкой', 'ской'];
      const maleLastName = ['Петров', 'Григорьев', 'Фомин', 'Мартын', 'Лихой', 'Чацкий', 'Спасский', 'Трубецкой', 'Городской'];
      const specWithLastName = function(lastName: string, completion: string) {
        it(('returns male «' + completion + '»'), function() {
          expect(sexByRussianName.getSex({lastName})).toBe(Sex.MALE);
        });
      };

      for (var i=0; i < maleLastNameCompletion.length; i++) {
        specWithLastName(maleLastName[i], maleLastNameCompletion[i]);
      }

    });

    describe('first name', function() {
      const maleNames = ['абрам', 'аверьян', 'авраам', 'агафон', 'адам', 'азар', 'акакий', 'аким', 'аксён', 'александр', 'алексей', 'альберт', 'анатолий', 'андрей', 'андрон', 'антип', 'антон', 'аполлон', 'аристарх', 'аркадий', 'арнольд', 'арсений', 'арсентий', 'артём', 'артемий', 'артур', 'аскольд', 'афанасий', 'богдан', 'борис', 'борислав', 'бронислав', 'вадим', 'валентин', 'валерий', 'варлам', 'василий', 'венедикт', 'вениамин', 'веньямин', 'венцеслав', 'виктор', 'вилен', 'виталий', 'владилен', 'владимир', 'владислав', 'владлен', 'всеволод', 'всеслав', 'вячеслав', 'гавриил', 'геннадий', 'георгий', 'герман', 'глеб', 'григорий', 'давид', 'даниил', 'данил', 'данила', 'демьян', 'денис', 'димитрий', 'дмитрий', 'добрыня', 'евгений', 'евдоким', 'евсей', 'егор', 'емельян', 'еремей', 'ермолай', 'ерофей', 'ефим', 'захар', 'иван', 'игнат', 'игорь', 'илларион', 'иларион', 'илья', 'иосиф', 'казимир', 'касьян', 'кирилл', 'кондрат', 'константин', 'кузьма', 'лавр', 'лаврентий', 'лазарь', 'ларион', 'лев', 'леонард', 'леонид', 'лука', 'максим', 'марат', 'мартын', 'матвей', 'мефодий', 'мирон', 'михаил', 'моисей', 'назар', 'никита', 'николай', 'олег', 'осип', 'остап', 'павел', 'панкрат', 'пантелей', 'парамон', 'пётр', 'петр', 'платон', 'потап', 'прохор', 'роберт', 'ростислав', 'савва', 'савелий', 'семён', 'семен', 'сергей', 'сидор', 'спартак', 'тарас', 'терентий', 'тимофей', 'тимур', 'тихон', 'ульян', 'фёдор', 'федор', 'федот', 'феликс', 'фирс', 'фома', 'харитон', 'харлам', 'эдуард', 'эммануил', 'эраст', 'юлиан', 'юлий', 'юрий', 'яков', 'ян', 'ярослав'];
      const specWithName = function(firstName: string) {
        it(('returns male «' + firstName + '»'), function() {
          expect(sexByRussianName.getSex({firstName})).toBe(Sex.MALE);
        });
      };

      for (var i=0; i < maleNames.length; i++) {
        specWithName(maleNames[i]);
      }
    });
  });
});
