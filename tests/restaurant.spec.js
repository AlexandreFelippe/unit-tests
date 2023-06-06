const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
    expect(createMenu()).toMatch(fetchMenu());
    });

it('verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função', () => {
  expect(typeof fetchMenu()).toBe('function');
  });
it('verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()', () => {
  expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toBe(fetchMenu.value.key);
})
it('verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()', () => {
  expect(createMenu()).toEqual(createMenu({ food: {}, drinks: {} }).fetchMenu())
})
it('verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio', () => {
  expect(createMenu({ food: {}, drinks: {} }).consumption).toEqual([]);
})
it
});
