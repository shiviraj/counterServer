const sum = (a, b) => a + b;

test('Should calculate the sum', () => {
  expect(sum(5, 3)).toBe(8);
});
