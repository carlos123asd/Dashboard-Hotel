import { faker } from '@faker-js/faker';

export function createRandomMessage() {
  return [
    faker.date.soon(),
    faker.person.firstName(),
    faker.internet.email(),
    faker.phone.number(),
    faker.word.words(),
    faker.word.words(),
    faker.helpers.arrayElement(['none', 'archived', 'published'])
  ];
}
/*
export const messageFaker = faker.helpers.multiple(createRandomMessage, {
  count: 10,
});*/