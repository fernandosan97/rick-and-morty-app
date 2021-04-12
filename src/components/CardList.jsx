import React from 'react';
import Card from './Card';

const CardList = ({characters}) => {
    return (
        <div className="card__container">
            { 
                characters ?
                    characters.map(character => <Card character={character} key={character.id} />)
                :
                    <h1>No hay resultados</h1>
            }
        </div>
    )
}

export default CardList;