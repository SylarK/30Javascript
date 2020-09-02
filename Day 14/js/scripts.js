$(document).ready(() => {

    $('#search').on('submit', (e) => {
        
        let searchText = $('#searchText').val();

        getMovie(searchText);

        e.preventDefault();
       
    })

});


function getMovie(searchText){

    const apikey = 'b983a45';

    axios.get('http://www.omdbapi.com?s='+searchText+'&apikey='+apikey)
    .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        $.each(movies, (index, movie) => {
            output += `
            
                <div class='movie-single'>

                    <img class='img-movie' src='${movie.Poster}'>
                    <div class='well'>
                        
                        <h3>${movie.Title}</h3>
                        
                            <h5><strong>Tipo: </strong>${movie.Type}</h5>
                            <h5><strong>Ano: </strong>${movie.Year}</h5>
                            <h5><strong>imdbID: </strong>${movie.imdbID}</h5>

                    </div>
                
                </div>
            
            `
        })

        $('#movies').html(output);
    })
    .catch((err) => {
        console.log(err);
    })
}