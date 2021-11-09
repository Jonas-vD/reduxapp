import store from "../../data";
import { like, unLike, remove } from "../../data/actions";
import Like from "../../components/Like";

class Song {
  constructor(holderMusic, holderLikes) {
    this.holderMusic = holderMusic;
    this.holderLikes = holderLikes;
    this.htmlRef = this.init();
    this.renderSongs();
    this.setUpEvents();
  }
  init() {
    this.holderMusic.insertAdjacentHTML(
      "beforeend",
      `
      <div class="songitems"></div>
      `
    );
    return this.holderMusic.querySelector(".songitems");
  }
  renderSongs() {
    this.htmlRef.innerHTML = store
      .getState()
      .songs.map((obj, i) => {
        return ` 
        
        <div data-id="${obj.id}" class="songitem">
          <img src="${obj.thumb}" alt="">
        <div class="audio">
        <h3>${i + 1} - ${obj.titel} - ${obj.artist}</h3>
        <div data-id="${obj.id}"class="btn__like">
        <svg class="icon icon-like">
          <use href="#icon-like" />
        </svg>
        </div>
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
      })
      .join("");
  }

  setUpEvents() {
    this.htmlRef.onclick = (e) => {
      // Like & unLike item

      if (e.target.classList.contains("btn__like")) {
        const id = e.target.dataset.id;
        if (e.target.classList.contains("like--active")) {
          e.target.classList.remove("like--active");
          store.dispatch(unLike(e.target.dataset.id));
        } else {
          e.target.classList.add("like--active");
          store.dispatch(like(e.target.dataset.id));
        }
      }

      // remove item form store
      if (e.target.classList.contains("btn__trash")) {
        store.dispatch(remove(e.target.dataset.id));
        this.renderSongs();
      }
      new Like(this.holderLikes);
    };
  }
}

export default Song;
