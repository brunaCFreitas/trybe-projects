const fetchProducts = async (query) => {
  if (!query || query !== 'computador') {
    throw new Error('You must provide an url');
  }
  
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const request = await fetch(url);
  const json = await request.json();
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
