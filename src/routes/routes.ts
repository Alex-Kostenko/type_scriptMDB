import Home from '../pages/home';
import { rout } from '../models/routs'

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
    component: Home,
    exact: true,
    name: 'Movie',
    _showOnHeader: true
  },
];

export default routs;
