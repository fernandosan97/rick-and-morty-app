import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Loader from './components/Loader';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getCharacters();
  }, [search]);
  
  const getCharacters = async () => {
    let url = 'https://rickandmortyapi.com/api/character';

    if(search){
      url = `${url}?name=${search}`;
    }

    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      data.results ? setCharacters(data.results) : setCharacters([]);
      setError(false);
    } catch (error) {
      console.log("Error: " + error);
      setError(true);
    }

    setLoading(false);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
      <Nav />
      <Hero handleSearch={handleSearch} />
      <div className="container">
        {
          error ? 
            <div className="error">There are results!</div>
          :
            (loading ? <Loader /> : <CardList characters={characters} />)
        }
      </div>
    </>
  );
}

export default App;
