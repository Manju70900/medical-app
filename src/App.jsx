import React from 'react'
import Caurouselcomp from './curousel/Carouselcomp'
import Doctors from './Doctorspage/Doctors';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Sidemenu from './sidemenu/Sidemenu';


const App = () => {
  return (
      < >
         <Navbar/>
      <Caurouselcomp />
      <Sidemenu/>
      
       <Footer />

      <Doctors/>
      

    </>
  );
}

export default App
