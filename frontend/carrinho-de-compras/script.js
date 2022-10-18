const productsList = document.querySelector('.items');
const cartItens = document.querySelector('.cart__items');
const subTotal = document.querySelector('.total-price');
const cleanCartButton = document.querySelector('.empty-cart');
const html = document.querySelector('html');

const startLoading = () => {
  const div = document.createElement('div');
  div.innerText = 'carregando...';
  div.classList.add('loading');
  html.appendChild(div);
};

const stopLoading = () => {
  document.querySelectorAll('.loading').forEach((loader) => loader.remove());
};

const drawTotal = async () => {
  const items = getSavedCartItems();

  startLoading();
  const responseItems = await Promise.all(items.map(async ({ id }) => fetchItem(id)));
  stopLoading();

  const total = responseItems.reduce((sum, { price }) => sum + price, 0);
  subTotal.innerText = total;
};

const onAddCartItem = async ({ id, title, price, thumbnail }) => {
  const items = getSavedCartItems();
  items.push({ id, title, price, thumbnail });
  saveCartItems(items);
  await drawTotal();
};

const onRemoveCartItem = async ({ id }) => {
  const items = getSavedCartItems();
  saveCartItems(items.filter(({ id: itemId }) => itemId !== id));
  await drawTotal();
};

const createProductImageElement = (imageSource, className = 'item__image') => {
  const img = document.createElement('img');
  img.className = className;
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const createCartItemElement = ({ id, title, price, thumbnail }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  // li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  const description = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', async () => {
    li.remove();
    await onRemoveCartItem({ id });
  });

  const divCartItem = createCustomElement('div', 'cartItem', '');
  const divCartItemImage = createCustomElement('div', 'cartItemImage', '');

  const image = createProductImageElement(thumbnail, '');

  const divCartItemDesc = createCustomElement('div', 'cartItemDescription', description);

  divCartItemImage.appendChild(image);
  divCartItemImage.appendChild(divCartItemDesc);

  // const divCartItemPrice = createCustomElement('div', 'cartItemPrice', `$${price}`);

  divCartItem.appendChild(divCartItemImage);
  // divCartItem.appendChild(divCartItemPrice);
  li.appendChild(divCartItem);
  return li;
};

const loadCartItems = async () => {
  const cartItems = getSavedCartItems();
  cartItems.forEach((item) => {
    const cartItem = createCartItemElement(item);
    cartItens.appendChild(cartItem);
  });
  await drawTotal();
};

const onCleanCart = async () => {
  saveCartItems([]);
  cartItens.innerHTML = '';
  await loadCartItems();
};

window.onload = async () => {
  startLoading();
  const products = await fetchProducts('computador');
  stopLoading();
  const productsAllList = products.results;
  productsAllList.forEach((curr) => {
    const item = createProductItemElement(curr);
    productsList.appendChild(item);

    const button = item.querySelector('.item__add');
    button.addEventListener('click', async (evt) => {
      const itemId = evt.target.parentNode.querySelector('.item_id').innerText;
      const itemDetails = await fetchItem(itemId);
      const cartItem = createCartItemElement(itemDetails);
      await onAddCartItem(itemDetails);
      cartItens.appendChild(cartItem);
    });
  });

  await loadCartItems();

  cleanCartButton.addEventListener('click', onCleanCart);
};
