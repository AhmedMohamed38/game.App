import { Display } from "./dis.module.js";

export class Deta {
    constructor(id) {
        document.getElementById("i-cloce").addEventListener("click", () => {
            document.getElementById("homeApi").classList.remove("d-none");
            document.getElementById("displayDe").classList.add("d-none");

        });
        this.ApiDetailes(id)

    };
    async ApiDetailes(id) {
        document.getElementById("spin").classList.remove("d-none")
        document.getElementById("displayDe").classList.add("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4ceebbec4emshf38d45e9c9d0c6bp1c4dc4jsnd2441decb766',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const detailes = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await detailes.json();
        new Display().DisplayDita(response)
        document.getElementById("spin").classList.add("d-none")
        document.getElementById("displayDe").classList.remove("d-none");


        console.log(response)

    }
}