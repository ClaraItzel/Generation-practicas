const sum = require('./sum');

test('Debe sumar 2 numeros y retornar la suma', () => {
  expect(sum(1, 2)).toBe(3);
});