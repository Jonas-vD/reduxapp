import store from "../../data";
import { like, unLike, remove } from "../../data/actions";
import Like from "../../components/Like";

class Newsarticle {
  constructor(holderNews, holderLikes) {
    this.holderNews = holderNews;
    this.holderLikes = holderLikes;
    this.htmlRef = this.init();
    this.renderNews();
    this.setUpEvents();
  }
  init() {
    this.holderNews.insertAdjacentHTML(
      "beforeend",
      `
      <div class="newsitems"></div>
    `
    );
    return this.holderNews.querySelector(".newsitems");
  }
  renderNews() {
    this.htmlRef.innerHTML = store
      .getState()
      .news.map((obj, i) => {
        return `
      <div data-id="${obj.id}" class="newsitem item${i}">
      <p class="newsitem__datum">${obj.datum}</p>
      <div class="newsitem__image">
      <img src="${obj.thumb}" alt="">
      </div>
      <h3>${obj.titel}</h3>
      <p>${obj.introtext}</p>
      <a href="${obj.url}" target="_blank">
        <span>Lees verder
        <div class="newsitem__icon"><svg class="icon icon-circle-right">
          <use href="#icon-circle-right" />
        </svg>
        </div>
        </span>
      </a>
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
    </div>`;
      })
      .join("");
  }

  setUpEvents() {
    this.htmlRef.onclick = (e) => {
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
        this.renderNews();
      }
      new Like(this.holderLikes);
    };
  }
}

export default Newsarticle;
