import React, { useState } from 'react';
import Navbar from './Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../styles/About.css'

  function Body(){
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div style= {{minHeight:"100vh"}}> 
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      </div>
      <Footer/> 

    </div>
  );
}
export default Body;