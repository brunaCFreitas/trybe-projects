const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  beforeEach(() => {
    jest.clearAllMocks();
  })
  it('Retorna array vazio quando não tem items salvos no localstorage', async () => {
    localStorage.getItem.mockReturnValue(null);
    const items = getSavedCartItems();
    expect(items).toEqual([]);
  });
  it('Retorna array vazio quando não tem items salvos no localstorage', async () => {
    const itemsMock = [{ id: '123' }];
    localStorage.getItem.mockReturnValue(JSON.stringify(itemsMock));
    const items = getSavedCartItems();
    expect(items).toEqual(itemsMock);
  });
});
