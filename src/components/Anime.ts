import { IAnime } from "../../interface";

export const Anime = (animeItems: IAnime[]) => {
  return /*html*/ `
       ${animeItems.map((animeObj: IAnime) => {
         return /*html*/ `
         <div class="m-4">
        <div class="font-bold text-red-800">Title: ${animeObj.name}</div>
        <div>Genre: ${animeObj.genre}</div>
        <div>Release Year: ${animeObj.release_year}</div>
        <div>Rating: ${animeObj.rating}</div>
    </div>
    `;
       })}  
    `;
};
