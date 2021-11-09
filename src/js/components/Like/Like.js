import store from "../../data";
import { like, unLike, remove } from "../../data/actions";

class Like {
  constructor(holderLikes) {
    this.holderLikes = holderLikes;
    this.htmlRef = this.init();
    this.renderLikes();
    this.setUpEvents();
  }
  init() {
    this.holderLikes.insertAdjacentHTML(
      "beforeend",
      `
      <div class="likeditems"></div>
      `
    );
    return this.holderLikes.querySelector(".likeditems");
  }
  renderLikes() {
    const { news, songs, photos } = store.getState();
    const arrMyState = news.concat(songs, photos);
    this.htmlRef.innerHTML = arrMyState
      .filter((obj) => obj.liked)
      .map((obj) => {
        if (obj.song) {
          return ` 
        <div data-id="${obj.id}" class="songitem">
        <div class="audio">
        <h3>${obj.titel} - ${obj.artist}</h3>
       
        <div data-id="${obj.id}" class="btn__trash">
      <svg class="icon icon-bin">
        <use href="#icon-bin" />
      </svg>
      </div>
          <audio
            controls class="player">
            <source src="${obj.song}" type="audio/mpeg">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          </div>
        </div>`;
        } else {
          return `
          <div data-id="${obj.id}" class="likeditem">
      
          <h3>${obj.titel}</h3>
          <a href="${obj.url}" target="_blank">
        <span>Lees verder
        <div class="newsitem__icon"><svg class="icon icon-circle-right">
          <use href="#icon-circle-right" />
        </svg>
        </div>
        </span>
      </a>
            <div data-id="${obj.id}" class="btn__trash">
            <svg class="icon icon-bin">
              <use href="#icon-bin" />
            </svg>
            </div>
        </div>`;
        }
      })
      .join("");
  }
  setUpEvents() {
    this.htmlRef.onclick = (e) => {
      if (e.target.classList.contains("btn__trash")) {
        const id = e.target.dataset.id;
        store.dispatch(unLike(e.target.dataset.id));
        const section = document.querySelector("section");
        section.querySelector(`.btn__like[data-id="${id}"]`).click();
      }
    };
  }
}

export default Like;
