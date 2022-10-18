const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Salvar items do carrinho no local storage', async () => {
    const items = [{ id: '123' }];
    await saveCartItems(items);
    expect(localStorage.setItem).toHaveBeenCalled();

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(items));
  });
});
