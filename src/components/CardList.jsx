import React from 'react';
import Card from './Card';

const CardList = ({characters}) => {
    return (
        <div className="card__container">
            { 
                characters.length > 0 ?
                    characters.map(character => <Card character={character} key={character.id} />)
                :
                    <div className="error">There are not results!</div>
            }
        </div>
    )
}

export default CardList;