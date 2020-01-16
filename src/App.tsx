import React, {useEffect} from 'react';
import RoutesPage from './routes';
import axios from 'axios';


import API_KEY from './API_KEY';
const authAxios = axios.create();

const App: React.FC = () => {
  useEffect(() => {
    authAxios.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`)
      .then(res => console.log(res))
  }, []);

  return <RoutesPage/>
}

export default App;
