import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Grid, Column } from '@carbon/react';
//import { GoogleLogin } from '@react-oauth/google';
//import { GoogleLogin, useGoogleLogin, googleLogout } from '@react-oauth/google';
import {  useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
//import * as jwt_decode from 'jwt-decode';
import { Button } from "@carbon/react";
import { Login } from "@carbon/icons-react";

import './_portal-banner.scss'

let ibm_description = "";
let user = "ibmer"

const renderDescription = () => {
  if (user === "ibmer") {
    ibm_description = "";
  } else if (user === "kyndryl") {
    ibm_description = "";
  }
}

const PortalBanner = () => {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => {
      //console.log('Login Failed:', error)
    }
});


useEffect(
  () => {
    
      if (user.access_token) {
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((res) => {
                  setProfile(res.data);
              })
              .catch((err) => {
                //console.log(err)
              }
            );
      }
  },
  [ user ]
);

  const dispalyUser = () =>{
    if(profile.given_name){
      return(
        <div>
        <p>Welcome {profile.given_name} </p>
        </div>
      )
    }
  }
  

  return (
    <Grid  fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <h1 className="landing-page__heading ">
          Welcome to React Starter Kit 2025
        </h1>
        {renderDescription()}
        
        
        
        <Button
            kind="primary"
            renderIcon={Login}
            onClick={login}
          >
            Sign in with Google
          </Button>
           
        
                
        {dispalyUser()}
                    
                   
                    
                
            
        <h5>{ibm_description}</h5>      
      </Column>               
    </Grid>
  )
}


export default PortalBanner;