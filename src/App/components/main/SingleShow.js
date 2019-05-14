import React from 'react';
import { fetchSingleShow } from './../../services/fetchShows';

class SingleShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            singleShow: null
        }
    }

    onLoadSingleShow(id) {
        fetchSingleShow(id)
            .then(show => this.setState({ singleShow: show }))
    }
    componentDidMount() {
        this.onLoadSingleShow(this.props.match.params.id);
    }

    render() {
        if (!this.state.singleShow) {
            return "LOADING...........";
        }
        return <div>
            <img src={`${this.state.singleShow.imgLarge}`} className="col-4" />
            <p>{this.state.singleShow.name} - {this.state.singleShow.seasons[0].endDate}</p>
            </div>;
    }

}

export default SingleShow;