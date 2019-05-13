import React from 'react';
import {Link} from 'react-router-dom';


const ShowCard = (props) => {
    return (
        <Link to={`show-details/${props.show.id}`}>
        <div class="card col-3 card-width" data-id={`${props.show.id}`}>
            <img src={`${props.show.img}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">{props.show.name}</p>
                </div>
         </div >
         </Link>
            )
        }
        
export default ShowCard;