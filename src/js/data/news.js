import { nanoid } from "nanoid";

const initState = [
  {
    id: nanoid(),
    datum: "Donderdag 04/11/21",
    thumb: new URL("../../images/canabisplantage.png", import.meta.url),

    titel:
      "Politie vindt cannabisplantage in woning naast school: 30 maanden cel geëist",
    introtext:
      "Willebroek - Het Openbaar Ministerie heeft donderdag 30 maanden gevangenisstraf geëist tegen vier mensen die betrokken zouden zijn geweest bij een cannabisplantage in Willebroek. Bij een inval van de politie werd de professionele plantage met 550 cannabisplantjes ontdekt. Opvallend: de woning stond net naast de speelplaats van een school.",
    url: "https://www.gva.be/cnt/dmf20211104_95714339#:~:text=Politie%20vindt%20cannabisplantage%20in%20woning%20naast%20school%3A%2030%20maanden%20cel%20ge%C3%ABist&text=Het%20Openbaar%20Ministerie%20heeft%20donderdag,bij%20een%20cannabisplantage%20in%20Willebroek.&text=Opvallend%3A%20de%20woning%20stond%20net%20naast%20de%20speelplaats%20van%20een%20school.",
    liked: false,
  },
  {
    id: nanoid(),
    datum: "Vrijdag 29/10/21",
    thumb: new URL("../../images/vaccin_foto.jpeg", import.meta.url),
    titel: "Algemene eerste prik wellicht volgend jaar",
    introtext:
      "Het zorgpersoneel in ons land krijgt een derde inenting met het coronavaccin. Dat hebben de ministers van Volksgezondheid beslist. Een algemene derde prik komt er wellicht pas volgend jaar.",
    url: "https://www.standaard.be/cnt/dmf20211030_93361427",
    liked: false,
  },
  {
    id: nanoid(),
    datum: "Zondag 31/10/21",
    thumb: new URL("../../images/captain_america.png", import.meta.url),

    titel: "Schild van Captain America uit ‘Endgame’ wordt dit weekend geveild",
    introtext:
      "Leuk nieuws voor alle Marvelfans: het schild dat Captain America (Chris Evans) gebruikte in de immens populaire film ‘Avengers: Endgame’ wordt dit weekend geveild.",
    url: "https://www.hln.be/film/schild-van-captain-america-uit-endgame-wordt-dit-weekend-geveild~a6a59d70/",
    liked: false,
  },
  {
    id: nanoid(),
    datum: "Maandag 1/11/21",
    thumb: new URL("../../images/graspop.png", import.meta.url),

    titel: "Stormloop voor Graspop 2022: enkel nog dagtickets verkrijgbaar",
    introtext:
      "De ticketverkoop voor de 25ste editie van Graspop volgend jaar loopt als een trein. Nog geen 24 uur na de start van de verkoop zijn de weekendtickets en de VIP deck tickets allemaal al verkocht. ",
    url: "https://www.hln.be/dessel/stormloop-voor-graspop-2022-enkel-nog-dagtickets-verkrijgbaar~a5b8d94b/#:~:text=DesselDe%20ticketverkoop%20voor%20de,deck%20tickets%20allemaal%20al%20verkocht.",
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
