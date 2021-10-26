const arr = JSON.parse(localStorage.getItem("listGame"));
let arrFav = arr.filter((listGame) => listGame.fav);






const secP2 = (i) => {
  $(".ul2").hide();
  $(".favWelcoming").hide();

  $(".descP2").append(
    `<div class = 'divDescPage'>
        <div class="descImg"> <img class='favPageDescImg' src="${arrFav[i].imgUrl}" alt="Game Logo"/> </div>
          <div class='newPage'> <h2>${arrFav[i].Name}</h2><p>${arrFav[i].info}</div>
 
         </div>`
  );
  rinderFav();
};



const addToFav1 = (i) => {    
 arrFav[i].fav = false;
  alert("Removed from Favorite")

  localStorage.setItem("listGame", JSON.stringify(arr));

};


const rinderFav = () => {
  for (let i = 0; i < arrFav.length; i++) {
    $(".ulGamesFav").append(
      `<div class='favPage'>
       <div class='favItem'> <div class='favImg'><img src="${arrFav[i].imgUrl}" alt="Game Logo"> </div>
          <div class='favH2'> <p onclick=secP2(${i}) style= cursor:pointer>${arrFav[i].Name}</p> </div>
          <br><br> <button value="no" class='btnFav btn btn-danger'id='btnFavSecPage' onclick=addToFav1(${i})  > Remove  </button>
           </div> 
           </div>`
    );
  }
};
rinderFav();
