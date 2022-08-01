import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // DONT FORGET TO CHANGE THE INITIAL USESTATE TO ABOUT!!!!!!
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <div>Contact</div>;
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}
