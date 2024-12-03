import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-600 overflow-hidden">
      <ul className="list-none m-0 p-0">
        <li className='float-left'>
          <Link className='block text-white px-3 py-2 text-center hover:bg-gray-50 hover:text-slate-600' to="/">Home</Link>
        </li>
        <li className='float-left'>
          <Link className='block text-white px-3 py-2 text-center hover:bg-gray-50 hover:text-slate-600' to="/about">About</Link>
        </li>
        <li className='float-left'>
          <Link className='block text-white px-3 py-2 text-center hover:bg-gray-50 hover:text-slate-600' to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className='list-none m-0 p-0'>
        <li className='float-right'>
          <Link className='block text-white px-3 py-2 text-center hover:bg-gray-50 hover:text-slate-600' to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
