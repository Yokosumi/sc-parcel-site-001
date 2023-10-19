import "./style.scss";
import { Header } from "./components/Header";

document.querySelector("#app")!.innerHTML = /*html*/ `
  ${Header()}
`;
