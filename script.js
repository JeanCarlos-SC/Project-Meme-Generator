const input = document.getElementById('text-input');
const preview = document.getElementById('meme-text');
const inputFile = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');

const showText = () => {
  input.addEventListener('keyup', () => {
    const text = input.value;
    preview.innerText = text;
  });
};

const showImage = () => {
  const file = new FileReader();
  if (inputFile.files.length !== 0) {
    file.onload = (event) => {
      document.getElementById('meme-image').src = event.target.result;
    };
    file.readAsDataURL(inputFile.files[0]);
  }
};
showText();
inputFile.addEventListener('change', showImage);

const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const defaultBoerder = '1px solid black';

btnFire.addEventListener('click', () => {
  if (container.style.border === '3px dashed red') {
    container.style.border = defaultBoerder;
  } else {
    container.style.border = '3px dashed red';
  }
});

btnWater.addEventListener('click', () => {
  if (container.style.border === '5px double blue') {
    container.style.border = defaultBoerder;
  } else {
    container.style.border = '5px double blue';
  }
});

btnEarth.addEventListener('click', () => {
  if (container.style.border === '6px groove green') {
    container.style.border = defaultBoerder;
  } else {
    container.style.border = '6px groove green';
  }
});

const imgs = document.querySelector('#meme-container');
imgs.addEventListener('click', (event) => {
  const image = event.target.src;
  document.getElementById('meme-image').src = image;
});
