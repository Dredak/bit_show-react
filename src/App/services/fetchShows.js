import API_BASE_URL from './../shared/baseUrl';
import Show from './../entities/Show';

const fetchShows = () => {

    const API_SHOWS = `${API_BASE_URL}/shows`;

    return fetch(API_SHOWS)
        .then(shows => shows.json())
        .then(shows =>{
            return shows.slice(0, 50).map((show) => {
                return new Show(show);
            })
        }
        )
}
export {
    fetchShows
}