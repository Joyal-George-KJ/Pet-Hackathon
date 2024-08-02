import React from 'react';
import NavElement from './NavElement';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const paths = ['home', 'service', 'donation', 'emergency']
  return (
    <nav className="w-1/6 p-4 pt-8 h-screen sticky top-0">
      <ul className="pl-4 justify-between">
        <div>
          <li className='text-orange-300 text-2xl font-bold cursor-pointer'>PawS</li>
          {
            paths.map((path, ind) => <NavElement path={path} key={ind} /> )
          }
        </div>
        <div className='absolute bottom-8'>
          <li className="pt-4">
            <NavLink className="text-neutral-700 font-medium text-xl capitalize" to={`/profile`}>
              profile
            </NavLink>
          </li>
          <li className="pt-4">
            <NavLink className="text-neutral-700 font-medium text-xl capitalize" to={`/settings`}>
              settings
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;