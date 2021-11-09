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
