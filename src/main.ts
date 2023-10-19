import "./style.scss";
import { Header } from "./components/Header";
import { Anime } from "./components/Anime";
import anime from "./data/anime.json";

document.querySelector("#app")!.innerHTML = /*html*/ `
  ${Header()}
  ${Anime(anime.animes)}
`;
