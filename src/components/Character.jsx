import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({character}) => {
    if(character.error) {
        return <div className="error">There are not results!</div>;
    }
    const { id, name, status, species, gender, image } = character;

    return (
        <div className="card-detail border">
            <div className="card-detail__image">
                <img src={ image } alt={name} loading="lazy" />
            </div>
            <div className="card-detail__body">
                <h2>Name: { name }</h2>
                <p>Status: { status }</p>
                <p>Species: { species }</p>
                <p>Gender: { gender }</p>
            </div>
        </div>
    )
}

export default Character;