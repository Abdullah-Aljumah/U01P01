const arr = JSON.parse(localStorage.getItem("listGame"));
let arrFav = arr.filter((listGame) => listGame.fav);





const secP2 = (i) => {
  $(".ul2").hide();
  $(".favWelcoming").hide()

  $(".descP2").append(
    `<div class = 'divDescPage'>
        <div class="descImg"> <img src="${arrFav[i].imgUrl}" alt="Game Logo"/> </div>
          <div class='newPage'> <h2>${arrFav[i].Name}</h2><p>${arrFav[i].info}</div>
 
         </div>`
  );
  rinderFav();
};

const rinderFav = () => {
  for (let i = 0; i < arrFav.length; i++) {
    $(".ulGamesFav").append(
      `<div class='favPage'>
       <div class='favItem'> <div class='favImg'><img src="${arrFav[i].imgUrl}" alt="Game Logo"> </div>
          <div class='favH2'> <p onclick=secP2(${i}) style= cursor:pointer>${arrFav[i].Name}</p> </div>
           </div> 
           </div>`
    );
  }
};
rinderFav();
