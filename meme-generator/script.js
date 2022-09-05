const textInput = document.getElementById('text-input');
const containerText = document.getElementById('meme-text');
const photoInput = document.getElementById('meme-insert');
const imagePreview = document.getElementById('meme-image');
const containerImage = document.getElementById('meme-image-container');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function uploadImage() {
  const reader = new FileReader();
  reader.readAsDataURL(photoInput.files[0]);
  reader.onloadend = (e) => {
    imagePreview.src = e.target.result;
  };
}

function previewText() {
  containerText.innerText = textInput.value;
}

function onClickButton(event) {
  const { target } = event;
  const colorClass = target.attributes['data-class'].nodeValue;
  containerImage.className = colorClass;
}

function onClickMiniMeme(event) {
  const { target } = event;
  imagePreview.src = target.src;
}

textInput.addEventListener('input', previewText);
photoInput.addEventListener('input', uploadImage);
buttonFire.addEventListener('click', onClickButton);
buttonWater.addEventListener('click', onClickButton);
buttonEarth.addEventListener('click', onClickButton);
meme1.addEventListener('click', onClickMiniMeme);
meme2.addEventListener('click', onClickMiniMeme);
meme3.addEventListener('click', onClickMiniMeme);
meme4.addEventListener('click', onClickMiniMeme);