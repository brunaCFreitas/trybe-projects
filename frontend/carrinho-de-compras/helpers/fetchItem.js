const fetchItem = async (itemId) => {
  if (!itemId) {
    throw new Error('You must provide an url');
  }
  
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  const request = await fetch(url);
  const json = await request.json();
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
