export class Display{
    constructor(){}
    DisplayG(gameData){
        let GameContainer = ``
        
        for(let i = 0 ; i<gameData.length ;i++){
             let x= gameData[i].platform.split(" ").slice(0,2)
             let y= gameData[i].short_description.split(" ").slice(0,4)
             let z = gameData[i].title.split(" ").slice(0,2)
            GameContainer += `<div class="col-lg-3 col-md-4 ">
                    <div data-id = ${gameData[i].id} class="border border-1 h-auto border-dark card-me rounded-2">
                        <div class="p-3">
                            <img class="w-100 rounded-2" src="${gameData[i].thumbnail}" alt="">
                            <div class="d-flex justify-content-between py-2">
                                <p class="text-white ">${z}</p>
                                <button class="btn btn-primary w-me">free</button>
                            </div>
                            <p class=" text-center py-1 dis">${y}...</p>
                        </div>
                        <div class=" d-flex align-items-center border-dark px-2  border-top  justify-content-between">
                            <p class="text-white bg-card px-1 my-1">${gameData[i].genre}</p>
                            <p class="text-white bg-card overflow-hidden px-1 my-1">${x}</p>


                        </div>
                    </div>
                </div>`

        }
        document.getElementById("myDis").innerHTML=GameContainer;
    }
    DisplayDita(data){
        let detaContainer=` <div class="col-lg-4">
                    <img class="w-100" src="${data.thumbnail}"">
                </div>
                <div class="col-lg-8">
                    <div class="text-white">
                        <h2>Titel: Tarisland</h2>
                    <h5>Category: <span class="de-text">${data.genre}</span></h5>
                    <h5>Platform: <span class="de-text">${data.platform}</span></h5>
                    <h5>Status: <span class="de-text">${data.status}</span></h5>
                    <p>${data.description}</p>
                        <a href="${data.game_url}"  class="btn btn-outline-warning text-white">Show Game</a>
                    </div>
                </div>`
        document.getElementById("detaCon").innerHTML= detaContainer

    }

}