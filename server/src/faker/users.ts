import { faker } from '@faker-js/faker';

export function createRandomEmployee():any {
  return [
    faker.image.avatar(),
    faker.person.fullName(),
    faker.internet.email(),
    faker.internet.password(),
    faker.date.recent(),
    faker.word.words(),
    faker.phone.number(),
    faker.helpers.arrayElement(['inactive', 'active'])
  ];
}
/*
export const employeeFaker = faker.helpers.multiple(createRandomEmployee, {
  count: 10,
});*/