const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);

    // Teste se o retorno da função é um array.
    const products = productDetails('Alcool gel', 'Mascara');
    expect(products).toBeInstanceOf(Array);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(products.length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    products.forEach(product => {
      expect(product).toBeInstanceOf(Object);
    });

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(products[0]).not.toStrictEqual(products[1]);

    // Teste se os dois productIds terminam com 123.
    const productIds = products.map(product => product.details.productId);
    productIds.forEach(productId => {
      expect(productId.endsWith('123')).toBeTruthy()
    })
  });
});
