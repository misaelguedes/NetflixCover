import {useEffect, useState} from 'react';
import Tmdb from "./Tmdb";
import MovieRow from './components/MovieRow';
import './App.css'

export default function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key)=> (
          <div>
            <MovieRow key={key} title={item.title} itens={item.itens}/>
          </div>
        ))}
      </section>
    </div>
  )
}