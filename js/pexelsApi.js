const PEXELS_API_KEY = "563492ad6f91700001000001ea91271ede1e4d9689cdbc9ee08a0697";
const auth = { "Authorization": `${PEXELS_API_KEY}` };
//fetch("http://site.com/protected/", { headers : auth });
const page = Math.floor(Math.random() * 24);

const url = `https://api.pexels.com/v1/search?query=korea&orientation=landscape&per_page=10&page=${page}`;

fetch(url, { headers: auth })
  .then((response) => response.json())
  .then((data) => {
    const body = document.querySelector("body");
    const backgroundPhotos = data.photos;
    const backgroundPhoto = backgroundPhotos[Math.floor(Math.random() * backgroundPhotos.length)];
    const backgroundString = `url("${backgroundPhoto.src.landscape}")`;

    body.style.backgroundImage = backgroundString;
    console.dir(document.body);
    console.log(backgroundPhoto.src.landscape);

  });


/*const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
*/