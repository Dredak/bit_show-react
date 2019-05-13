import API_BASE_URL from './../shared/baseUrl';
import Show from './../entities/Show';

const fetchShows = () => {

    const API_SHOWS = `${API_BASE_URL}/shows`;

    return fetch(API_SHOWS)
        .then(shows => shows.json())
        .then(shows =>{
            console.log(shows);
            return shows.slice(0, 50).map((show) => {
                const { id, name, image, rating } = show;
                return new Show(id, name, image.medium, rating.average);
            })}
        )
}
export {
    fetchShows
}