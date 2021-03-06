import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({character}) => {
    if(character.error) {
        return <div className="error">There are not results!</div>;
    }
    const { id, name, status, species, gender, image } = character;

    return (
        <div className="card border">
            <div className="card__image">
                <img src={ image } alt={name} loading="lazy" />
            </div>
            <div className="card__body">
            <Link to={`/character/detail/${id}`}> <h2>Name: { name }</h2></Link>
                <p>Status: { status }</p>
                <p>Species: { species }</p>
                <p>Gender: { gender }</p>
            </div>
        </div>
    )
}

export default Card;