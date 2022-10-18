require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função.', () => {
    expect(fetchItem).toBeInstanceOf(Function);
  });

  it('Verifica se ao chamar a função fetchItem com o argumento "MLB1615760527" a função "fetch" é chamada.', async () => {
    expect.assertions(1);
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se ao chamar a função fetchItem com o argumento "MLB1615760527" a função "fetch" utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527".', async () => {
    expect.assertions(1);
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Verifica se o retorno da função "fetchItem" com o argumento "MLB1615760527" e uma estrutura de dados igual ao objeto item.', async () => {
    expect.assertions(1);
    const result = await fetchItem("MLB1615760527");
    expect(result).toEqual(item);
  });

  it('Verifica se ao chamar a função fetchItem sem argumento, um erro com a mensagem "You must provide an url" é retornado.', () => {
    expect(fetchItem()).rejects.toThrow('You must provide an url');
    expect(fetch).not.toHaveBeenCalled();
  });
});
