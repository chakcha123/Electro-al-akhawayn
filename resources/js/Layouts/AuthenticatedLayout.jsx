import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const AuthenticatedLayout = ({ user , children }) => {
    const isAuth = user !== null ;
    const isAdmin = user && user.role === 'admin' ;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Pass the entire auth object to the Header */}
      
      <Header isauth={isAuth} isadmin={isAdmin}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AuthenticatedLayout;
