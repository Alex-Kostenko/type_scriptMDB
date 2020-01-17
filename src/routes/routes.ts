import { lazy } from 'react'
import { rout } from '../models/interfaces'
const Home = lazy(() => import('../pages/home'));
const MovieList = lazy(() => import('../pages/movieList'));

const routs: rout[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
    _showOnHeader: true
  },
  {
    path: '/movie',
    component: MovieList,
    exact: true,
    name: 'Movie',
    _showOnHeader: true
  },
];

export default routs;
