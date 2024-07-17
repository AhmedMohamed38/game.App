import { Deta } from "./deta.module.js"
import { Display } from "./dis.module.js"

export class Home {
    constructor() {
        document.querySelectorAll(".nav-link").forEach((linkActive => {

            linkActive.addEventListener("click", () => {

                this.changeActive(linkActive)
                let cat = linkActive.getAttribute("data-cat")
                console.log(cat)
                this.ApiGame(cat)

            })
        }))

        this.spin = document.getElementById("spin")
        this.display = new Display
        this.ApiGame("mmorpg")
        this.homeApi = document.getElementById("homeApi")
        this.displayDe = document.getElementById("displayDe")


    };
    async changeActive(linkActive) {
        document.querySelector(".nav-item .active").classList.remove("active")
        linkActive.classList.add("active")






    }


    async ApiGame(cat) {
        this.spin.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4ceebbec4emshf38d45e9c9d0c6bp1c4dc4jsnd2441decb766',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const Api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        const response = await Api.json()
        


        this.display.DisplayG(response)
        this.spin.classList.add("d-none")
        console.log(response)
        document.querySelectorAll(".card-me").forEach((card)=>{
            card.addEventListener("click",()=>{
                this.displayDe.classList.remove("d-none");
                this.homeApi.classList.add("d-none")
                new Deta(card.dataset.id)

            })
        

        })
        

    }
   
    
    
}