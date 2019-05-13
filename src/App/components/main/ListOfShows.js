import React from 'react';
import ShowCard from './ShowCard';
import {fetchShows} from './../../services/fetchShows';

class ListOfShows extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listOfShows:[]
        }
    }

    onLoadShows(){
        fetchShows()
        .then((shows) => {
            this.setState({listOfShows: shows})
        })
    }

    componentDidMount(){
        this.onLoadShows()
    }

    render (){
        return ""
        // return this.state.listOfShows.map((show) => {
        //     return<ShowCard show={show}/>
        }
    }


export default ListOfShows;