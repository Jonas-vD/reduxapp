import store from "../../data";
import { like, unLike, remove } from "../../data/actions";
import Like from "../../components/Like";

class Photo {
  constructor(holderPhoto, holderLikes) {
    this.holderPhoto = holderPhoto;
    this.holderLikes = holderLikes;
    this.htmlRef = this.init();
    this.renderPhotos();
    this.setUpEvents();
  }

  init() {
    this.holderPhoto.insertAdjacentHTML(
      "beforeend",
      `
        <div class="photoitems"></div>
        `
    );
    return this.holderPhoto.querySelector(".photoitems");
  }
  renderPhotos() {
    this.htmlRef.innerHTML = store
      .getState()
      .photos.map((obj) => {
        return `
          <div data-id="${obj.id}" class="photoitem">
          <div class="container-img">
          <img src="${obj.url}" alt="">
          </div>
          <p class="photo__info">${obj.discription}</p>
          <div data-id="${obj.id}" class="btn__like">
        <svg class="icon icon-like">
          <use href="#icon-like" />
        </svg>
        </div>
        <div data-id="${obj.id}" class="btn__trash">
      <svg class="icon icon-bin">
        <use href="#icon-bin" />
      </svg>
      </div>
        <p class="author">created by :<br> ${obj.author}</p>

          </div>
          `;
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
        this.renderPhotos();
      }
      new Like(this.holderLikes);
    };
  }
}

export default Photo;
