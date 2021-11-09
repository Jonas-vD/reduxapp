const LIKE = "LIKE";
const UNLIKE = "UNLIKE";
const REMOVE = "REMOVE";

export const like = (id) => ({
  type: LIKE,
  payload: id,
});

export const unLike = (id) => ({
  type: UNLIKE,
  payload: id,
});

export const remove = (id) => ({
  type: REMOVE,
  payload: id,
});
