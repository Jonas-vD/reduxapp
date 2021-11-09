import { nanoid } from "nanoid";

const initState = [
  {
    id: nanoid(),
    titel: "Enter Sandman",
    artist: "Metallica",
    thumb: new URL(
      "../../images/Metallica_-_Enter_Sandman_cover.jpeg",
      import.meta.url
    ),
    song: new URL("../../sound/Metallica-EnterSandman.mp3", import.meta.url),
    liked: false,
  },
  {
    id: nanoid(),
    titel: "10000 Luchtballonnen",
    artist: "K3",
    thumb: new URL("../../images/k3.jpeg", import.meta.url),
    song: new URL("../../sound/K3-10.000luchtballonnen.mp3", import.meta.url),
    liked: false,
  },
];

const songsReducer = (state = initState, { type, payload }) => {
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

export default songsReducer;
