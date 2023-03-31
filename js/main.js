let body = document.querySelector(`body`);
let script = document.createElement(`script`);
let carouselSlides = document.getElementsByClassName(`carousel-slides`)[0];
let nav = document.getElementsByTagName(`nav`)[0];

let imgLeft = nav.children[0];
let imgRight = nav.children[1];

imgLeft.setAttribute(`id`, `img-left`);
imgRight.setAttribute(`id`, `img-right`);

function cards(data) {

    let i = 1;
    let slide = -660;

    for (let index = 0; index < data.music.length; index++) {

        let music = document.createElement(`div`);
        music.setAttribute(`id`, `music`);
        carouselSlides.appendChild(music);

        let artist = document.createElement(`p`);
        artist.textContent = data.music[index].artist;
        artist.setAttribute(`id`, `artist`);

        let album = document.createElement(`p`);
        album.textContent = data.music[index].album;
        album.setAttribute(`id`, `album`);

        let image = document.createElement(`img`);
        image.setAttribute(`id`, `cover`);
        image.setAttribute(`src`, data.music[index].cover_image.path);
        image.setAttribute(`width`, data.music[index].cover_image.width);
        image.setAttribute(`height`, data.music[index].cover_image.height);
        image.setAttribute(`alt`, data.music[index].cover_image.alt_content);
        image.setAttribute(`url`, data.music[index].cover_image.url);
        image.setAttribute(`credit`, data.music[index].cover_image.credit);

        let review = document.createElement(`p`);
        review.textContent = data.music[index].review.content;
        review.setAttribute(`id`, `review-content`);

        let reviewInfo = document.createElement(`i`);
        reviewInfo.setAttribute(`credit`, data.music[index].review.source);
        reviewInfo.setAttribute(`url`, data.music[index].review.url);
        review.appendChild(reviewInfo);

        music.appendChild(artist);
        music.appendChild(album);
        music.appendChild(image);
        music.appendChild(review);
        carouselSlides.appendChild(music);
    }

    const music = document.getElementById(`music`);
    const arrowLeft = document.getElementById(`img-left`);
    const arrowRight = document.getElementById(`img-right`);

    imgLeft.addEventListener(`click`, () => {
        if (i === data.music.length - 1) {
            arrowLeft.style.zIndex = 3;
        }
        if (i < data.music.length) {
            arrowRight.style.zIndex = 3;
            i++;
            music.style.marginLeft = slide * i + `px`;
        }
    });

    imgRight.addEventListener(`click`, () => {
        if (i === 0) {
            arrowRight.style.zIndex = 3;
        }
        if (i > 0) {
            arrowLeft.style.zIndex = 1;
            i--;
            music.style.marginLeft = slide * -i + `px`;
        }
    });

    document.addEventListener(`keydown`, (s) => {
        if(s.code == `ArrowLeft`){
            if (i < data.music.length - 1) {
                arrowRight.style.zIndex = 1;
                i++;
                music.style.marginLeft = slide * i + `px`;
            }
            if (i === data.music.length - 1) {
                arrowLeft.style.zindex = -1;
            }
        }
    });

    document.addEventListener(`keydown`, (s) => {
        if(s.code == `ArrowRight`) {
            if (i === 0) {
                arrowRight.style.zindex = -1;
            }
            if (i > 0) {
                arrowLeft.style.zIndex = 1;
                i++;
                music.style.marginLeft = slide * i + `px`;
            }
        }
    });
}


script.setAttribute(`src`, `json/data.json`);

body.appendChild(script);
