import axios from 'axios';
import API_KEY, {domen} from '../API_KEY';

export const searchMovie = (value: string, setState: Function) => {
  const authAxios = axios.create();

  authAxios.get(`${domen}/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query="${value}"`)
    .then(res => {
      if( res.status === 200 ) {
        return setState(res.data.results)
      }
      alert('Error fetch');
    })
}


export const getGenre = (setState: Function) => {
  const authAxios = axios.create();

  authAxios.get(`${domen}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(res => {
      if( res.status === 200 ) {
        return setState(res.data["genres"])
      }
      alert('Error fetch');
    })
}
