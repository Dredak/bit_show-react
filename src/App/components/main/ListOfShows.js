import React from 'react';
import ShowCard from './ShowCard';
import { fetchShows } from './../../services/fetchShows';

class ListOfShows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfShows: []
        }
    }

    onLoadShows() {
        fetchShows()
            .then((shows) => {
                this.setState({ listOfShows: shows })
            })
    }

    componentDidMount() {
        this.onLoadShows()
    }

    render() {
        if (!this.state.listOfShows){
            return 'LOADING.........'
        }
        return (
            <div className="row col-10 offset-2">
                {this.state.listOfShows.map((show) => {
                    return <ShowCard show={show} key={`${show.id}`}/>
                })}
            </div>
            )
    }
}

export default ListOfShows;
