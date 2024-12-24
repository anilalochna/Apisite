function searchCatalog() {
    const query = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('searchResults');
    
    if (query === '') {
        resultsContainer.innerHTML = 'Please enter a search query.';
        return;
    }
    
    // Example of YTS URL for searching
    const ytsURL = `https://yts.mx/api/v2/list_movies.json?query_term=query`;

    // Fetching data from YTS API
    fetch(ytsURL)
        .then(response => response.json())
        .then(data => 
            const movies = data.data.movies;
            if (movies.length > 0) 
                resultsContainer.innerHTML = ”;
                movies.forEach(movie => 
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');
                    movieElement.innerHTML = `
                        <h3>{movie.title}</h3>
                        <p>movie.year</p>
                        <a href="https://yts.mx/movies/{movie.slug}-${movie.id}" target="_blank">View Movie</a>
                    `;
                    resultsContainer.appendChild(movieElement);
                });
            } else {
                resultsContainer.innerHTML = 'No results found.';
            }
        })
.catch(error => {
            resultsContainer.innerHTML = 'Error fetching data.';
            console.error('Error:', error);
        });
}
