import './_welcome.scss';
import React from 'react';
import PortalHeader from '../PortalHeader/PortalHeader';
import { Routes, Route, Navigate } from 'react-router-dom';
//import { useLocation } from 'react-router-dom'
import Home from '../Home/Home';
//import AboutUS from '../AboutUS/AboutUS';
//import ContactUS from '../ContactUS/ContactUS';
import Idea from '../Idea/Idea'
import Backendresponse from '../Backendresponse/Backendresponse';
import PortalBanner from '../PortalBanner';




const Welcome = () => {

  //const location = useLocation();

  window.history.pushState(null, null, document.URL);
  window.addEventListener('popstate', function () {
    window.history.pushState(null, null, document.URL);
  });

  function processing() {
    return (
      <div>
        <PortalHeader />
        <PortalBanner />
        <Routes>
          <Route path="/fe1/StarterKit/" element={<Home />}> </Route>          
          {/* <Route path="/fe1/StarterKit/aboutus" element={<AboutUS />}> </Route> 
          <Route path="/fe1/StarterKit/contactus" element={<ContactUS />}> </Route>*/}
          <Route path="/fe1/StarterKit/idea" element={<Idea />}> </Route>
          <Route path="/fe1/StarterKit/backendresponse" element={<Backendresponse />}> </Route>          
          <Route path="*" element={<Navigate to="/fe1/StarterKit/" />} />
        </Routes>
      </div>
    )
  }

  return (
    <div >
      {processing()}
    </div>
  )
}

export default Welcome;