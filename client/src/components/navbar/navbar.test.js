import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Navbar from './navbarok';

configure({adapter: new Adapter()});

describe('<Navbar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Navbar />)
  })

  it('Deberia renderizar Dos <NavLink />', () => {
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
  it('El primer Link debe tener el texto "HOME" y cambiar la ruta hacia "/home"', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/home');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(NavLink).at(0).text()).toEqual('HOME');
  });
  it('El segundo Link debe tener el texto "Create Activity" y cambiar la ruta hacia "/home/create"', () => {
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/home/create');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(NavLink).at(1).text()).toEqual('Create Activity');
  });
 
})