import getHealth from '../app';

test('Функция getHealth должна правильно выводить уровень здоровья', () => {
  expect(getHealth({ name: '', health: 14 })).toEqual('critical');
  expect(getHealth({ name: '', health: 15 })).toEqual('wounded');
  expect(getHealth({ name: '', health: 50 })).toEqual('wounded');
  expect(getHealth({ name: '', health: 51 })).toEqual('healthy');
});