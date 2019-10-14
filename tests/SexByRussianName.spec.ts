import {SexByRussianName} from '../src/SexByRussianName';
import {Gender} from '../src/Gender';

describe('SexByRussianName#gender', function() {
  describe('undefined', function() {
    it('returns undefined on empty', function() {
      const sexByRussianName = new SexByRussianName('', '', '');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male surname and female first_name, patronymic', function() {
      const sexByRussianName = new SexByRussianName('Иванов', 'Людмила', 'Ивановна');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male first_name and female surname, patronymic', function() {
      const sexByRussianName = new SexByRussianName('Иванова', 'Игорь', 'Ивановна');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male patronymic and female surname, first_name', function() {
      const sexByRussianName = new SexByRussianName('Иванова', 'Людмила', 'Иванович');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female surname and male first_name, patronymic', function() {
      const sexByRussianName = new SexByRussianName('Михайлова', 'Олег', 'Николаевич');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female first_name and male surname, patronymic', function() {
      const sexByRussianName = new SexByRussianName('Сидоров', 'Ольга', 'Петрович');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female patronymic and male surname, first_name', function() {
      const sexByRussianName = new SexByRussianName('Петров', 'Василий', 'Владимировна');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female surname and male first_name, empty patronymic', function() {
      const sexByRussianName = new SexByRussianName('Косова', 'Николай', '');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female surname and male patronymic, empty first_name', function() {
      const sexByRussianName = new SexByRussianName('Светланова', '', 'Ремович');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female first_name and male surname, empty patronymic', function() {
      const sexByRussianName = new SexByRussianName('Петров', 'Ирина', '');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female first_name and male patronymic, empty surname', function() {
      const sexByRussianName = new SexByRussianName('', 'Наталья', 'Святославович');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female patronymic and male surname, empty first_name', function() {
      const sexByRussianName = new SexByRussianName('Кондратьев', '', 'Викторовна');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on female patronymic and male first_name, empty surname', function() {
      const sexByRussianName = new SexByRussianName('', 'Потап', 'Ремовна');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male surname and female first_name, empty patronymic', function() {
      const sexByRussianName = new SexByRussianName('Храпков', 'Светлана', '');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male surname and female patronymic, empty first_name', function() {
      const sexByRussianName = new SexByRussianName('Галкин', '', 'Вадимовна');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male first_name and female surname, empty patronymic', function() {
      const sexByRussianName = new SexByRussianName('Гончарова', 'Александр', '');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male first_name and female patronymic, empty surname', function() {
      const sexByRussianName = new SexByRussianName('', 'Вадим', 'Олеговна');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male patronymic and female surname, empty first_name', function() {
      const sexByRussianName = new SexByRussianName('Короткова', '', 'Борисович');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });

    it('returns undefined on male patronymic and female first_name, empty surname', function() {
      const sexByRussianName = new SexByRussianName('', 'Вита', 'Сергеевич');
      expect(sexByRussianName.getGender()).toBeUndefined();
    });
  });

  describe('female', function() {
    describe('3 correct names', function() {
      it(('returns 0 for full name'), function() {
        const sexByRussianName = new SexByRussianName('Михайлова', 'Аглая', 'Витальевна');
        expect(sexByRussianName.getGender()).toBe(Gender.FEMALE);
      });
    });

    describe('2 correct names and empty surname', function() {
      it(('returns 0 for full name'), function() {
        const sexByRussianName = new SexByRussianName('', 'Виталия', 'Мухтаровна');
        expect(sexByRussianName.getGender()).toBe(Gender.FEMALE);
      });
    });

    describe('2 correct names and empty first_name', function() {
      it(('returns 0 for full name'), function() {
        const sexByRussianName = new SexByRussianName('Козлова', '', 'Лимоновна');
        expect(sexByRussianName.getGender()).toBe(Gender.FEMALE);
      });
    });

    describe('2 correct names and empty patronymic', function() {
      it(('returns 0 for full name'), function() {
        const sexByRussianName = new SexByRussianName('Паравозова', 'Марина', '');
        expect(sexByRussianName.getGender()).toBe(Gender.FEMALE);
      });
    });

    describe('patronymic', function() {
      const femalePatronymicCompletion = ['овна', 'евна', 'ична'];
      const femalePatronymic = ['Ивановна', 'Витальевна', 'Лукична'];

      const specWithPatronymic = function(patronymic: string, completion: string) {
        it(('returns 0 «' + completion + '»'), function() {
          const sexByRussianName = new SexByRussianName('', '', patronymic);
          expect(sexByRussianName.getGender()).toBe(Gender.FEMALE);
        });
      };

      for (var i=0; i < femalePatronymicCompletion.length; i++) {
        specWithPatronymic(femalePatronymic[i], femalePatronymicCompletion[i]);
      }
    });

    describe('lastName', function() {
      const femaleSurnameCompletion = ['ова', 'ева', 'ина', 'ая', 'яя', 'екая', 'цкая'];
      const femaleSurname = ['Петрова', 'Елисеева', 'Коренина', 'Троцкая', 'Нижняя', 'Калекая', 'Блавацкая'];

      const spec_with_surname = function(surname: string, completion: string)  {
        it(('returns 0 «' + completion + '»'), function() {
          let sexByRussianName = new SexByRussianName(surname, '', '');
          expect(sexByRussianName.getGender()).toBe(Gender.FEMALE);
        });
      };

      for (var i=0; i < femaleSurnameCompletion.length; i++) {
        spec_with_surname(femaleSurname[i], femaleSurnameCompletion[i]);
      }
    });

    describe('first_name', function() {
      var femaleNames = ['авдотья', 'аврора', 'агата', 'агния', 'агриппина', 'ада', 'аксинья', 'алевтина', 'александра', 'алёна', 'алина', 'алиса', 'алла', 'альбина', 'амалия', 'анастасия', 'ангелина', 'анжела', 'анжелика', 'анна', 'антонина', 'анфиса', 'арина', 'белла', 'божена', 'валентина', 'валерия', 'ванда', 'варвара', 'василина', 'василиса', 'вера', 'вероника', 'виктория', 'виола', 'виолетта', 'вита', 'виталия', 'владислава', 'власта', 'галина', 'глафира', 'дарья', 'диана', 'дина', 'ева', 'евгения', 'евдокия', 'евлампия', 'екатерина', 'елена', 'елизавета', 'ефросиния', 'ефросинья', 'жанна', 'зиновия', 'злата', 'зоя', 'ивонна', 'изольда', 'илона', 'инга', 'инесса', 'инна', 'ирина', 'ия', 'капитолина', 'карина', 'каролина', 'кира', 'клавдия', 'клара', 'клеопатра', 'кристина', 'ксения', 'лада', 'лариса', 'лиана', 'лидия', 'лилия', 'лина', 'лия', 'лора', 'любава', 'любовь', 'людмила', 'майя', 'маргарита', 'марианна', 'мариетта', 'марина', 'мария', 'марья', 'марта', 'марфа', 'марьяна', 'матрёна', 'матрена', 'матрона', 'милена', 'милослава', 'мирослава', 'муза', 'надежда', 'настасия', 'настасья', 'наталия', 'наталья', 'нелли', 'ника', 'нина', 'нинель', 'нонна', 'оксана', 'олимпиада', 'ольга', 'пелагея', 'полина', 'прасковья', 'раиса', 'рената', 'римма', 'роза', 'роксана', 'руфь', 'сарра', 'светлана', 'серафима', 'снежана', 'софья', 'софия', 'стелла', 'степанида', 'стефания', 'таисия', 'таисья', 'тамара', 'татьяна', 'ульяна', 'устиния', 'устинья', 'фаина', 'фёкла', 'феодора', 'хаврония', 'христина', 'эвелина', 'эдита', 'элеонора', 'элла', 'эльвира', 'эмилия', 'эмма', 'юдифь', 'юлиана', 'юлия', 'ядвига', 'яна', 'ярослава'],
        spec_with_name = function(firstName: string) {
          it(('returns 0 «' + firstName + '»'), function() {
            const sexByRussianName = new SexByRussianName('', firstName, '');
            expect(sexByRussianName.getGender()).toBe(Gender.FEMALE);
          });
        };

      for (var i=0; i < femaleNames.length; i++) {
        spec_with_name(femaleNames[i]);
      }
    });
  });

  describe('male', function() {
    describe('3 correct names', function() {
      it(('returns 1 for full name'), function() {
        const sexByRussianName = new SexByRussianName('Фомин', 'Владимир', 'Кузьмич');
        expect(sexByRussianName.getGender()).toBe(Gender.MALE);
      });
    });

    describe('2 correct names and empty surname', function() {
      it(('returns 1 for full name'), function() {
        const sexByRussianName = new SexByRussianName('', 'Александр', 'Сергеевич');
        expect(sexByRussianName.getGender()).toBe(Gender.MALE);
      });
    });

    describe('2 correct names and empty first_name', function() {
      it(('returns 1 for full name'), function() {
        const sexByRussianName = new SexByRussianName('Медведев', '', 'Анатольевич');
        expect(sexByRussianName.getGender()).toBe(Gender.MALE);
      });
    });

    describe('2 correct names and empty patronymic', function() {
      it(('returns 1 for full name'), function() {
        const sexByRussianName = new SexByRussianName('Толстой', 'Лев', '');
        expect(sexByRussianName.getGender()).toBe(Gender.MALE);
      });
    });

    describe('patronymic', function() {
      var malePatronymicCompletion = ['ович', 'евич', 'ич'],
        malePatronymic = ['Витайлевич', 'Михайлович', 'Лукич'],
        specWithPatronymic = function(patronymic: string, completion: string) {
          it(('returns 1 «' + completion + '»'), function() {
            const sexByRussianName = new SexByRussianName('', '', patronymic);
            expect(sexByRussianName.getGender()).toBe(Gender.MALE);
          });
        };

      for (var i=0; i < malePatronymicCompletion.length; i++) {
        specWithPatronymic(malePatronymic[i], malePatronymicCompletion[i]);
      }
    });

    describe('lastName', function() {

      var maleSurnameCompletion = ['ов', 'ев' ,'ин' ,'ын', 'ой', 'цкий', 'ский', 'цкой', 'ской'],
        male_surname = ['Петров', 'Григорьев', 'Фомин', 'Мартын', 'Лихой', 'Чацкий', 'Спасский', 'Трубецкой', 'Городской'],
        spec_with_surname = function(surname: string, completion: string) {
          it(('returns 1 «' + completion + '»'), function() {
            const sexByRussianName = new SexByRussianName(surname, '', '');
            expect(sexByRussianName.getGender()).toBe(Gender.MALE);
          });
        };

      for (var i=0; i < maleSurnameCompletion.length; i++) {
        spec_with_surname(male_surname[i], maleSurnameCompletion[i]);
      }

    });

    describe('first_name', function() {
      var male_names = ['абрам', 'аверьян', 'авраам', 'агафон', 'адам', 'азар', 'акакий', 'аким', 'аксён', 'александр', 'алексей', 'альберт', 'анатолий', 'андрей', 'андрон', 'антип', 'антон', 'аполлон', 'аристарх', 'аркадий', 'арнольд', 'арсений', 'арсентий', 'артём', 'артемий', 'артур', 'аскольд', 'афанасий', 'богдан', 'борис', 'борислав', 'бронислав', 'вадим', 'валентин', 'валерий', 'варлам', 'василий', 'венедикт', 'вениамин', 'веньямин', 'венцеслав', 'виктор', 'вилен', 'виталий', 'владилен', 'владимир', 'владислав', 'владлен', 'всеволод', 'всеслав', 'вячеслав', 'гавриил', 'геннадий', 'георгий', 'герман', 'глеб', 'григорий', 'давид', 'даниил', 'данил', 'данила', 'демьян', 'денис', 'димитрий', 'дмитрий', 'добрыня', 'евгений', 'евдоким', 'евсей', 'егор', 'емельян', 'еремей', 'ермолай', 'ерофей', 'ефим', 'захар', 'иван', 'игнат', 'игорь', 'илларион', 'иларион', 'илья', 'иосиф', 'казимир', 'касьян', 'кирилл', 'кондрат', 'константин', 'кузьма', 'лавр', 'лаврентий', 'лазарь', 'ларион', 'лев', 'леонард', 'леонид', 'лука', 'максим', 'марат', 'мартын', 'матвей', 'мефодий', 'мирон', 'михаил', 'моисей', 'назар', 'никита', 'николай', 'олег', 'осип', 'остап', 'павел', 'панкрат', 'пантелей', 'парамон', 'пётр', 'петр', 'платон', 'потап', 'прохор', 'роберт', 'ростислав', 'савва', 'савелий', 'семён', 'семен', 'сергей', 'сидор', 'спартак', 'тарас', 'терентий', 'тимофей', 'тимур', 'тихон', 'ульян', 'фёдор', 'федор', 'федот', 'феликс', 'фирс', 'фома', 'харитон', 'харлам', 'эдуард', 'эммануил', 'эраст', 'юлиан', 'юлий', 'юрий', 'яков', 'ян', 'ярослав'],
        spec_with_name = function(name: string) {
          it(('returns 1 «' + name + '»'), function() {
            const sexByRussianName = new SexByRussianName('', name, '');
            expect(sexByRussianName.getGender()).toBe(Gender.MALE);
          });

        };

      for (var i=0; i < male_names.length; i++) {
        spec_with_name(male_names[i]);
      }
    });
  });
});
