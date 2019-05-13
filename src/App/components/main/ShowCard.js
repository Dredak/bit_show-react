import React from 'react';

const ShowCard = (props) => {
    return (
        <div class="card col-3" style="width: 18rem;" data-id="${movie.id}">
            <img src={`${props.show.movie.img}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">${props.show.movie.name}</p>
                </div>
         </div >
            )
        }
        
export default ShowCard;