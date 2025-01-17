import {create} from 'zustand';

const initialState = {
  menuData: [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'About', path: '/about'},
    {id: 3, name: 'Search', path: '/#'},
    {id: 4, name: 'Contact Us', path: '/#'}
  ]
};


export const useMenuStore = create(() => ({
  ...initialState,
}));