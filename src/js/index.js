import "../css/style.scss";
import store from "./data";
import Newsarticle from "./components/Newsarticle";
import Song from "./components/Song";
import Photo from "./components/Photo";

const holderNews = document.querySelector(".zoneNews");
const holderMusic = document.querySelector(".zoneMusic");
const holderPhoto = document.querySelector(".zonePhoto");
const holderLikes = document.querySelector(".zoneLiked");

new Newsarticle(holderNews, holderLikes);
new Song(holderMusic, holderLikes);
new Photo(holderPhoto, holderLikes);

const btnMobile = document.querySelector(".mobile__menu");
const mobileMenu = document.querySelector(".mobile__menu__dropdown");
const btnCloseMobile = document.querySelector(".btn__close");

btnMobile.onclick = (e) => {
  mobileMenu.style.display = "block";
};

btnCloseMobile.onclick = (e) => {
  mobileMenu.style.display = "none";
};
