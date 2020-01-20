import axios from 'axios';
import {searchRes} from '../models/interfaces'
import API_KEY, {domen} from '../API_KEY';

export const searchMovie = (value: string, setState: Function, page: number = 1, currentData?: searchRes , setPage?: Function) => {
  const authAxios = axios.create();
  

  authAxios.get(`${domen}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query="${value}"`)
    .then(res => {
      if( res.status === 200 ) {
        if (setPage !== undefined && currentData !== undefined) {
          setPage(page + 1)
          currentData.results = currentData.results.concat(res.data.results)
          return setState(currentData)
        }
        return setState(res.data)
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

export const getMovieById = (id: number) => {
  const authAxios = axios.create();

  return authAxios.get(`${domen}/3/movie/${id}?language=en-US&api_key=${API_KEY}`)
    .then(res => {
      if( res.status === 200 ) {
        return Promise.all([res.data])
      }
    })
    .catch(() => alert('Error fetch'))
}
