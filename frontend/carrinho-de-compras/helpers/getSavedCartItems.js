const getSavedCartItems = () => {
  const items = localStorage.getItem('cartItems');
  if (!items) {
    return [];
  }

  return JSON.parse(items);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
