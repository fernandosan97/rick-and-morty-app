import { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom';
import Character from '../components/Character';
import Loader from '../components/Loader';

const CharacterDetail = () => {
    let { id } = useParams();
    
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getCharacter = async () => {
      let url = `https://rickandmortyapi.com/api/character/${id}`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        
        setCharacter(data);
      } catch (error) {
        console.log("Error: " + error);
      }
  
      setLoading(false);
    }
    
    getCharacter();
  }, [id]);

    return (
        <div className="container container--modifier">
            {
              loading ? 
                <Loader /> 
              : 
                <Character character={character} />
            }
        </div>
    )  
}


export default CharacterDetail;