import { faker } from '@faker-js/faker';

export function createRandomBooking(){
  return [
    faker.person.fullName(),
    faker.date.recent(),
    faker.date.past(),
    faker.date.anytime(),
    faker.date.future(),
    faker.date.anytime(),
    faker.date.anytime(),
    faker.word.words(),
    faker.helpers.arrayElement(['Suite', 'Double Superior', 'Double Bed', 'Single Bed']),
    faker.helpers.arrayElement(['In Progress', 'Check Out', 'Check In'])
   // faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10']),
  ];
}
/*
export const bookingFaker = faker.helpers.multiple(createRandomBooking, {
  count: 10,
});*/