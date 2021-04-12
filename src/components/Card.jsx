import React from 'react';

const Card = ({character}) => {
    const { name, status, species, gender, image } = character;

    return (
        <div className="card border">
            <div className="card__image">
                <img src={ image } alt={name} loading="lazy" />
            </div>
            <div className="card__body">
                <h2>Name: { name }</h2>
                <p>Status: { status }</p>
                <p>Species: { species }</p>
                <p>Gender: { gender }</p>
            </div>
        </div>
    )
}

export default Card;