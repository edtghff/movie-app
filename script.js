const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=00a7b43ab71ba27a8ff307feaffa2f3f&page=1'
const IMG_PATH = 'https://image.tmbd.org/t/p/w1280'
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=00a7b43ab71ba27a8ff307feaffa2f3f&query="

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url)
{
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            const div_row = document.createElement('div');
            div_card.setAttribute('class', 'row');
            const div_column = document.createElement('div');
            div_card.setAttribute('class', 'column');
            const image = document.createElement('img');
            div_card.setAttribute('class', 'thumbnail');
            div_card.setAttribute('id', 'image');
            const title = document.createElement('h3');
            div_card.setAttribute('id', 'title');

            title.innerHTMl = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            div_card.appendChild(image);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row)
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '' 

    const searchItem = search.value;

    if (searchItem)
    {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
})