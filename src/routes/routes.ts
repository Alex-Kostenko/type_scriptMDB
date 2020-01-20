import { lazy } from 'react'
import { rout } from '../models/interfaces'
const Home = lazy(() => import('../pages/home'));
const MovieList = lazy(() => import('../pages/moviePage'));

const routs: rout[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
    _showOnHeader: true
  },
  {
    path: '/movie/:id',
    component: MovieList,
    exact: false,
    name: 'Movie',
    _showOnHeader: false
  },
];

export default routs;
