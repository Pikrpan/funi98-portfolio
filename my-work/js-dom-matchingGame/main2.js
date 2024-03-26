var cardsArray = [
    {    'name': 'CSS',    'img': 'https://i.pinimg.com/originals/eb/74/63/eb74630fcdd15f4f969df97a2312f756.jpg',  },
    {    'name': 'HTML',    'img': 'https://c8.alamy.com/comp/2AP9JA2/cartoon-funny-unicorn-horse-with-rainbows-fart-2AP9JA2.jpg',  },
    {    'name': 'jQuery',    'img': 'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/f1/aa/e1/f1aae182-0cbe-729c-4c80-4e3e79c02dc5/source/512x512bb.jpg',  },
    {    'name': 'JS',    'img': 'https://i.pinimg.com/474x/61/a1/27/61a127f1316904abb97320096ccf95ec.jpg',  },
    {    'name': 'Node',    'img': 'https://images-na.ssl-images-amazon.com/images/I/51f7rofepmL.jpg',  },
    {    'name': 'Photo Shop',    'img': 'https://edsurge.imgix.net/uploads/post/image/12857/guild-1573610501.jpg?auto=compress%2Cformat&w=1024&h=512&fit=crop',  },
    {    'name': 'PHP',    'img': 'https://images-na.ssl-images-amazon.com/images/I/91CqnxyxJbL.jpg',  },
    {    'name': 'Python',    'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhu7_LozHZcT31SJvyjNKfOlnFh3Umqm5kxmEhnZIVWPBX6QCOq2OAltILYK12aU7zKy0&usqp=CAU',  },
    {    'name': 'Ruby',    'img': 'https://www.ixxiyourworld.com/media/2398480/ixxi-paul-fuentes-alpaca-unicorn.jpg?mode=crop&width=275&height=275',  },
    {    'name': 'Sass',    'img': 'https://media.istockphoto.com/vectors/cute-cartoon-unicorn-vector-id1325338919?b=1&k=6&m=1325338919&s=170667a&w=0&h=EJYt4ZuJXtBIY4Nzf4XUG2LHS7rq42ceexJo2WNG9Uk=',  },
    {    'name': 'Sublime',    'img': 'https://i.pinimg.com/originals/02/22/6a/02226a1fbd01b414bdb3f49f46fa06e3.jpg',  },
    {    'name': 'Wordpress',    'img': 'https://i.pinimg.com/236x/f6/05/35/f60535dabae8290a423391f99e102c9b.jpg',  },
  ];
  var gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(function(){
      return 0.5 - Math.random();
  })

  var game = document.getElementById("game-board");
  var grid = document.createElement("section");
  grid.setAttribute("class", "grid");
  game.appendChild(grid);

  for(var i = 0; i < gameGrid.length; i++){
      var card = document.createElement("div");
      card.classList.add("card");
      card.dataset.name = gameGrid[i].name;
      var front = document.createElement("div");
      front.classList.add("front");
      
      var back = document.createElement("div");
      back.classList.add("back");
      back.style.backgroundImage = `url(${gameGrid[i].img})`;

      grid.appendChild(card);
      card.appendChild(front);
      card.appendChild(back);
  }

  var firstGuess = "";
  var secondGuess = "";

  var count = 0;
  var previousTarget = null;
  var delay = 1200;

  var match = function(){
      var selected = document.querySelectorAll(".selected");
      for(var i = 0; i < selected.length; i++){
          selected[i].classList.add("match");
      }
  }

  var resetGuesses = function(){
      firstGuess = "";
      secondGuess = "";
      count = 0;
      previousTarget = null;

      var selected = document.querySelectorAll(".selected");
      for(var i = 0; i < selected.length; i++){
          selected[i].classList.remove("selected");
      }
  }

  grid.addEventListener("click", function(event){
      var clicked = event.target;
      if(clicked.nodeName == "SECTION" || clicked === previousTarget || clicked.parentNode.classList.contains("match") || clicked.parentNode.classList.contains("selected")){
          return;
      }
      if(count < 2){
          count++;
          if(count == 1){
              firstGuess = clicked.parentNode.dataset.name;
              clicked.parentNode.classList.add("selected");
          } else{
              secondGuess = clicked.parentNode.dataset.name;
              clicked.parentNode.classList.add("selected");
          }
          if(firstGuess !== "" && secondGuess !== ""){
              if(firstGuess === secondGuess){
                  setTimeout(match, delay);
                  setTimeout(resetGuesses, delay);
              }else{
                setTimeout(resetGuesses, delay);
              }
          }
          previousTarget = clicked;
      }
  });

