
var movies = [
  
    {
      name: "The Shawshank Redemption",
      type: "Drama",
      rating: 9.3,
      image: "https://m.media-amazon.com/images/I/51KjbtEkoeL._AC_UF894,1000_QL80_.jpg",
      description: "The movie is set in Shawshank State Penitentiary and tells the story of a man serving a life sentence for murder, as he struggles for hope and freedom."
    },
    {
      name: "The Godfather",
      type: "Crime",
      rating: 9.9,
      image: "https://m.media-amazon.com/images/I/61PVruxbwnL._AC_UF894,1000_QL80_.jpg",
      description: "This movie is regarded as one of the greatest gangster films of all time, depicting the story of the Italian-American Corleone family and their rise in the organized crime world in America."
    },
    {
      name: "The Dark Knight",
      type: "Action",
      rating: 9.8,
      image: "https://m.media-amazon.com/images/I/71dwS9phhCL._AC_UF894,1000_QL80_.jpg",
      description: "This film is part of Christopher Nolan's Batman trilogy and continues the story of the superhero Batman as he faces off against the villainous Joker in Gotham City."
    },
    {
      name: "Pulp Fiction",
      type: "Crime",
      rating: 8.9,
      image: "https://m.media-amazon.com/images/I/61w0wMweB2L._AC_UF894,1000_QL80_.jpg",
      description: "Pulp Fiction follows several interconnected storylines in the world of crime, violence, and thrill."
    },
    {
      name: "Fight Club",
      type: "Drama",
      rating: 8.8,
      image: "https://m.media-amazon.com/images/I/81Luju2cHuL.jpg",
      description: "The film portrays the story of a man suffering from dissociative identity disorder who joins an underground fight club under the guidance of a mysterious figure, leading to a series of thrilling events."
    },
    {
      name: "Forrest Gump",
      type: "Drama",
      rating: 8.7,
      image: "https://m.media-amazon.com/images/I/61SESEtA1NL.jpg",
      description: "Forrest Gump tells the life story of Forrest Gump, a man with a low IQ, who witnesses and participates in important historical events in the United States."
    },
    {
      name: "Inception",
      type: "Sci-Fi",
      rating: 8.7,
      image: "https://m.media-amazon.com/images/I/71ZoAHU+byL._AC_UF894,1000_QL80_.jpg",
      description: "The film explores the concept of stealing information and secrets from people's dreams, as a team of thieves enter their targets' dreams."
    },
    {
      name: "The Matrix",
      type: "Sci-Fi",
      rating: 8.7,
      image: "https://m.media-amazon.com/images/I/51DUmDryAvL._AC_UF894,1000_QL80_.jpg",
      description: "The Matrix delves into a dystopian future where humanity is trapped inside a simulated reality, and a computer hacker becomes the key to their liberation."
    },
    {
      name: "Goodfellas",
      type: "Crime",
      rating: 9.7,
      image: "https://m.media-amazon.com/images/I/51Ji4g5raiL._AC_.jpg",
      description: "Goodfellas is based on the true story of Henry Hill and his involvement with the Italian-American mob in New York City."
    },
    {
      name: "The Silence of the Lambs",
      type: "Thriller",
      rating: 8.6,
      image: "https://m.media-amazon.com/images/I/81SVDO6WcrL._AC_UF894,1000_QL80_.jpg",
      description: "The Silence of the Lambs follows the story of a young FBI trainee who seeks the help of a manipulative cannibalistic serial killer to catch another serial killer."
    },
    {
    name: "The Departed",
    type: "Crime",
    rating: 8.5,
    image: "https://m.media-amazon.com/images/I/510gCMld+uL._AC_UF894,1000_QL80_.jpg",
    description: "The Departed follows the story of an undercover cop and a mole in the police force, each trying to uncover the other's identity."
  },
  {
    name: "Avatar",
    type: "Sci-Fi",
    rating: 7.8,
    image: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_UF894,1000_QL80_.jpg",
    description: "Avatar is set in the mid-22nd century on the moon Pandora, where a paraplegic former Marine is sent on a unique mission."
  }

  ];
  // return movies;
  var fav=[];

  
  for (var i = 0; i < movies.length; i++) {
    draw(movies[i]);
  }

  function draw(movie) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var h1 = document.createElement("h2");
    var p1 = document.createElement('h3');
    var p2 = document.createElement('p');
    var des = document.createElement('p');
    var but = document.createElement('button');
    
    img.src = movie.image;
    img.style.width = "100%";
    img.style.height = "200px";
    h1.innerText = movie.name;
    p1.innerText = 'type: ' + movie.type;
    p2.innerText ="rating: "+ movie. rating ;
    des.innerText = movie. description ;
    des.setAttribute("class", "description");
    p2.setAttribute("class", "rating");
    p1.setAttribute("id", "myid");
    but.innerText = "Add To favorites";
    div.classList.add("card");
    div.append(img, h1, p1, p2,des, but);
    document.getElementById('movi').appendChild(div);
    
    
    but.onclick=function(){
    if(localStorage.getItem("fav")!=undefined){
      fav=JSON.parse(localStorage.getItem('fav'));
      fav.push(movie);
  
    }
    else{
      fav.push(movie);
      localStorage.setItem("fav",JSON.stringify(fav));
    }
  }
}
function search() {
    document.getElementById('movi').innerText = "";
    var moviename = document.getElementById('search').value;
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].name.toLowerCase().includes(moviename.toLowerCase()) == true ||movies[i].type.toLowerCase().includes(moviename.toLowerCase()))
            draw(movies[i]);
    }
}
function toprat() {
    document.getElementById('movi').innerText = "";
    var arrr = movies.sort(compare);

    for (var i = 0; i < arrr.length; i++) {
        draw(arrr[i]);
    }
}
function compare(a, b) {
    return b.rating - a.rating;}

    function Select() {
        document.getElementById('movi').innerText = "";
        var moviename = document.getElementById('').value;

    }
  var chooses=[];
function get(){
  fav=JSON.parse(localStorage.getItem('fav'));
  for(var i=0; i<fav.length; i++){
   chooses.push( movies.find((fav)=>fav.name==fav[i]))
  
  }
  addtofav( chooses);
}
   
function addtofav() {

  for (var i = 0; i < movies.length; i++) {
    draw(movies[i]);
  }

  function draw(_favmovie) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var h1 = document.createElement("h2");
    var p1 = document.createElement('h3');
    var p2 = document.createElement('p');
    var des = document.createElement('p');
    img.src = _favmovie.image;
    img.style.width = "100%";
    img.style.height = "200px";
    h1.innerText = _favmovie.name;
    p1.innerText = 'type: ' + _favmovie.type;
    p2.innerText ="rating: "+ _favmovie. rating ;
    des.innerText = _favmovie. description ;
    des.setAttribute("class", "description");
    p2.setAttribute("class", "rating");
    p1.setAttribute("id", "myid");
    div.classList.add("card");
    div.append(img, h1, p1, p2,des, but);
    document.getElementById('_favmovie').appendChild(div);
    
    
  }
}
 
      
    