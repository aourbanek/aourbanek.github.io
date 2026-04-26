/*
 * Using localStorage instead of a real database due to GitHub Pages limitations
 * Effectively, now a personal movie review... viewer, using local movies added
 */
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// Render movies on page load
renderMovies();

// Handle form submission
document.getElementById("movie-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("filmname").value.trim();
    const genre = document.getElementById("filmgenre").value.trim();
    const rating = document.getElementById("filmrating").value;

    const newMovie = {
        id: Date.now(),
        name,
        genre,
        rating: rating ? Number(rating) : null
    };

    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));

    renderMovies();

    // Reset form
    this.reset();
});

// Render function
function renderMovies() {
    const container = document.getElementById("movie-grid-container");

    movies.slice().reverse().forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("movie-card");

        div.innerHTML = `
            <h4>${movie.name}</h4>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating !== null ? movie.rating + "/10" : "N/A"}</p>
        `;

        container.appendChild(div);
    });
}

// Top bar navigation buttons
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToSubmit() {
    document.getElementById("submit-movie").scrollIntoView({ behavior: "smooth" });
}
