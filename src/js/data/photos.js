import { nanoid } from "nanoid";

const initState = [
  {
    id: nanoid(),
    author: "max-harlynking",
    discription: "Looking right on the ledge of a treehouse",
    url: new URL(
      "../../images/max-harlynking-QZx7Fs2B62w-unsplash.jpg",
      import.meta.url
    ),
    liked: false,
  },
  {
    id: nanoid(),
    author: "Gerald Schömbs",
    discription: "Diving with sharks in the Bahamas",
    url: new URL("../../images/sharksdiving.jpeg", import.meta.url),
    liked: false,
  },
  {
    id: nanoid(),
    author: "Ehimetalor Akhere Unuabona",
    discription:
      "Protests for the launch of the Climate and Ecological Emergency Bill (CEE Bill) Across The City of London",
    url: new URL("../../images/clown.jpeg", import.meta.url),
    liked: false,
  },
  {
    id: nanoid(),
    author: "max-harlynking",
    discription: "Looking right on the ledge of a treehouse",
    url: new URL(
      "../../images/max-harlynking-QZx7Fs2B62w-unsplash.jpg",
      import.meta.url
    ),
    liked: false,
  },
];

const newsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "LIKE":
      return state.map((obj) =>
        obj.id === payload ? { ...obj, liked: true } : obj
      );
    case "UNLIKE":
      return state.map((obj) =>
        obj.id === payload ? { ...obj, liked: false } : obj
      );
    case "REMOVE":
      return state.filter((obj) => {
        if (obj.id !== payload) {
          return obj;
        }
      });
    default:
      return state;
  }
};

export default newsReducer;
