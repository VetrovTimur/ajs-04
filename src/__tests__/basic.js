import calcTotal from '../calc';

test('calcTotal sum without discount', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 2,
      price: 400,

    },
    {
      id: 76,
      name: 'JS',
      count: 1,
      price: 1200,
    },
  ];

  const result = calcTotal(list);
  expect(result).toBe(2000);
});

test('calcTotal sum with discount', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 2,
      price: 400,

    },
    {
      id: 76,
      name: 'JS',
      count: 1,
      price: 1200,
    },
  ];

  const result = calcTotal(list, true);
  expect(result).toBe(1000);
});
