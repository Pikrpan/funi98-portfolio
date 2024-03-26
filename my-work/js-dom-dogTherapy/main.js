var image = document.querySelector('.dog-image');


function fetchDog(){
    console.log("click registrated");
    console.log(image);
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            image.src = jsonResponse.message;
        })
}