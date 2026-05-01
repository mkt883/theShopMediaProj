function hover(element) {
    element.setAttribute('src', 'homepage_icons/MPI_pricecompprev_orange.png');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'homepage_icons/MPI_pricecompprev_apple.png');
  }
  //

  function closeTitleCard(){
    console.log("title card closed")
    let popUp = document.getElementById("titleCardScreen");
    popUp.remove();

    return null;
    }
    function fadeawayTitleCard(){
        let titleCard = document.getElementById("titleCardScreen")
        titleCard.style.animation = "fadeTitleOut ease 2s";
        titleCard.style.opacity = "0";
        setTimeout(closeTitleCard, 2000);
    }