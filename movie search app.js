const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


    async function getmovie(url){
      let response = await fetch(url);
      console.log(response);
      let data = await response.json();
    //   console.log(data)
        showmovie(data.results);
    }

    getmovie(APIURL)

    function showmovie(data){
        var clutter = "";
       data.forEach(item => {
        //   console.log(item)

        clutter = clutter + `<div class="box">

        <img src="${IMGPATH + item.poster_path}" alt="" width="280px" id="img">

        <div class="overlay">

            <div class="title">
                <h3>${item.title}</h3>
                <h3>${item.vote_average}</h3>
            </div>

            <p>
                ${item.overview}
            </p>

        </div>
    </div>
`;
});

document.querySelector(".movie-box").innerHTML = clutter;

    }


document.querySelector("#input").addEventListener("keyup" , (evant) => {
      if(evant.target.value != ""){
        getmovie(SEARCHAPI + evant.target.value);
      }
      else{
        getmovie(APIURL);
      }
});