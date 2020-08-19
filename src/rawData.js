import faker from 'faker';

const booksArray = [
  {
    id: Math.floor(Math.random() * 99) + 1,
    title: faker.lorem.words(),
    category: 'action',
  },
  {
    id: Math.floor(Math.random() * 99) + 1,
    title: faker.lorem.words(),
    category: 'biography',
  },
  {
    id: Math.floor(Math.random() * 99) + 1,
    title: faker.lorem.words(),
    category: 'history',
  },
];

const initState = {
  books: booksArray,
};

export default initState;
