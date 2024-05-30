// Layout.jsx
import React from 'react';
import { Outlet } from "react-router-dom";
import { useAuth } from './context/AuthContext';
import Navbar from './components/Home/Navbar';
import NavMenu from './components/Home/NavMenu';
import Footer from './components/Home/Footer';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
  const { currentUser } = useAuth(); 

  return (
    <div className="app">
      <Navbar currentUser={currentUser} />
      <NavMenu currentUser={currentUser} />
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;