const arr = JSON.parse(localStorage.getItem("listGame"));
let arrFav = arr.filter((listGame) => listGame.fav);

// Rinder fav
const rinderFav = () => {
  for (let i = 0; i < arrFav.length; i++) {
    $(".ulGamesFav").append(
      `<div class='favPage'>
       <div class='favItem'> <div class='favImg' onclick=secP2(${i}) style= cursor:pointer><img src="${arrFav[i].imgUrl}" alt="Game Logo"> </div>
          <div class='favH2'> <p onclick=secP2(${i}) style= cursor:pointer>${arrFav[i].Name}</p> </div>
          <br><br><form action=fav.html> <button value="no" class='btnFav btn btn-danger'id='btnFavSecPage' onclick=addToFav1(${i})  > Remove  </button> </form>
           </div> 
           </div>`
    );
  }
};

rinderFav();

// Second page description
const secP2 = (i) => {
  $(".ul2").hide();
  $(".favWelcoming").hide();

  $(".descP2").append(
    `<div class = 'divDescPage'>
        <div class="descImg"> <img class='favPageDescImg' src="${arrFav[i].imgUrl}" alt="Game Logo"/> </div>
          <div class='newPage'> <h2>${arrFav[i].Name}</h2><p>${arrFav[i].info}</div>
         </div>
         <br><br><div class='extraImages'> </div>`
  );
  for (let c = 0; c < 4; c++) {
    $(".extraImages").append(
      `<div class='imgs4'><img  id='secondImages' src='${arrFav[i].images[c]}' alt='test'></div>`
    );
  }
  rinderFav();
};

// Remove from fav
const addToFav1 = (i) => {
  arrFav[i].fav = false;
  alert("Removed from Favorite");
  localStorage.setItem("listGame", JSON.stringify(arr));
};
