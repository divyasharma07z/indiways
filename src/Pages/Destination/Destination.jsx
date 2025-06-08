import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import First from "../../Components/Destination/First";
import Firstcards from '../../Components/Destination/Firstcards'
import Secondimg from '../../Components/Destination/Secondimg'
import Third from '../../Components/Destination/Third'
import Fourth from '../../Components/Destination/Fourth'
import "./destination.css";

const Destination = () => {
  return (
    <div>
      <Navbar />
       <First/>
       <Firstcards/>
       <Secondimg/>
       { <Third/>}
       <Fourth/>
       <Footer />
    </div>
  )
}

export default Destination
