import "./Card.css";
import { useState } from "react";
import heart from "../../assets/heart.svg";
import heartFilled from "../../assets/heart-filled.svg";
import star from "../../assets/star.svg";

export const Card = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Jujutsu Kaisen",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/10853012/42438e54-010a-4c84-82a8-4a74b0d0d887/600x900",
            rating: "9.6/10",
            genres: "Anime, Thriller",
            liked: false
        },
        {
            id: 2,
            title: "Tokyo Revangers",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/5c36df44-a80a-46c4-9ede-d98cd10fe3a9/600x900",
            rating: "9.5/10",
            genres: "Anime, Thriller",
            liked: false
        },
        {
            id: 3,
            title: "Hanako-kun",
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/98c600be-bc28-4bf0-8540-42cb32f87615/600x900",
            rating: "9.5/10",
            genres: "Anime, Comady",
            liked: false
        }
    ]);

    const toggleLike = (id) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, liked: !movie.liked } : movie
        ));
    };

    return (
        <div className="cards-container">
            {movies.map(movie => (

                <div className="card" key={movie.id}>

                    <div className="card-image">
                        <img src={movie.image} alt={movie.title} />
                        <button className="like-button" onClick={() => toggleLike(movie.id)}>
                            <img src={movie.liked ? heartFilled : heart} alt="like" width="24" height="24" />
                        </button>

                        <div className="card-content">
                            <h3 className="card-title">{movie.title}</h3>
                            <p className="card-genres">{movie.genres}</p>

                        </div>

                    </div>

                    <div className="heart-fon"></div>

                    <span className="card-rating">
                        <img src={star} alt="star" width="14" height="14" /> {movie.rating}
                    </span>


                </div>
            ))}
        </div>
    );
};

export default Card;    