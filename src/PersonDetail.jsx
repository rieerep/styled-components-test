import React from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


// infon om vald persons genres ligger i data. Det är en array ac genre-objekt
// börja med att skriv en map. Titta i PersonList hur det görs.
// Som steg ett vill du skriva ut alla genre-namn som hör till personen
// Tänk på att din data ser ut såhär:
/*

[
    {
        "genre": {
            "id": 2,
            "genreName": "Horror",
            "description": "Scary",
            "tmdbId": 27,
            "favouriteGenres": []
        }
    },
    {
        "genre": {
            "id": 1,
            "genreName": "Action",
            "description": "Pangpang",
            "tmdbId": 28,
            "favouriteGenres": []
        }
    }
]
*/

// om vi har en data.map(genreObject => genreObject.genre.genreName)

// när du gjort detta, skapa en ny komponent PersonMovies, den ska vara väldigt lik PersonDetails, men den ska anropa PersonMovies i API
// Den ska mappa och skriva ut filmlänkarna, glöm inte ratint
function PersonDetail(props) {
    const [data, setData] = React.useState(false);
    // Object destructuring:
    // let { movieId } = useParams();

    // console.log(URLS.POSTER_PREFIX)

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:5106/persongenres/" + props.id);
            console.log(result.data)
            setData(result.data);
        };

        fetchData();
    }, []);


    // Same result, no destructuring:
    //let params = useParams();
    //let movieId = params.movieId;
    //console.log(params);
    return data ? <>
        {data.map(genre => (<PersonDetail genre={genre.genre.genreName} />))}
        <h1>Alla filmer</h1>
    </> : <h3>Loading</h3>;
}

export default PersonDetail;