import React from 'react';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    {/* This header element has background-image applied through Header.css */}
   <header class="py-2 pl-0 header">
      <Navbar />

      </header>
    </>
  )
}
export default Header;