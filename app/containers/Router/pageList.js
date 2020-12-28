import LoginPage from '../LoginPage/Loadable';
import RoomsListPage from '../RoomsListPage/Loadable';
import RoomPage from '../RoomPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import AmenitiesListPage from '../AmenitiesListPage/Loadable';
import AmenitiesPage from '../AmenitiesPage/Loadable';

export const pageList = {
  '': {
    id: '',
    path: '/',
    title: 'Rooms',
    component: RoomsListPage,
    exact: true,
  },
  login: {
    id: 'login',
    path: '/login',
    title: 'Login',
    component: LoginPage,
    exact: true,
  },
  amenity: {
    id: 'amenity',
    path: '/amenities/:id',
    title: 'Amenity',
    component: AmenitiesPage,
  },
  amenities: {
    id: 'amenities',
    path: '/amenities/',
    title: 'Amenities',
    component: AmenitiesListPage,
    exact: false,
  },
  rooms: {
    id: 'rooms',
    path: '/rooms',
    title: 'Rooms',
    component: RoomsListPage,
    exact: true,
  },
  room: {
    id: 'room',
    path: '/rooms/:id',
    title: 'Room',
    component: RoomPage,
    exact: true,
  },
  // tasks: {
  //   id: 'tasks',
  //   path: '/tasks',
  //   title: 'Tasks',
  //   component: TasksPage,
  //   exact: true,
  // },
  // reports: {
  //   id: 'reports',
  //   path: '/reports/',
  //   title: 'Reports',
  //   component: ReportsPage,
  //   exact: false,
  // },
  nf: {
    id: '404',
    title: '404',
    component: NotFoundPage,
  },
};
