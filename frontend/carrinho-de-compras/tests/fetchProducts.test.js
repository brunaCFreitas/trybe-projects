require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função.', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });
  
  it('Verifica se a função fetch foi chamada quando a função fetchProducts recebe o parametro "computador".', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se ao chamar a função fetchProducts com o argumento "computador" a função utiliza o endpoint correto.', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verifica se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch.', async () => {
    expect.assertions(1);
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  it('Verifica se ão chamar a função fetchProducts sem argumento, o retorno é uma mensagem de erro.', () => {
    expect.assertions(1);
    expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
});

