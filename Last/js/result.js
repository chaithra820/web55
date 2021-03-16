window.addEventListener('load',()=>{

    const name = localStorage.getItem('USER');
    const movie_name = localStorage.getItem('MOVIE');
    const commentbox = localStorage.getItem('COMMENT');


    document.getElementById("username").innerHTML = name;
    document.getElementById("result-movie-name").innerHTML = movie_name;
    document.getElementById("result-comment").innerHTML = commentbox;
})