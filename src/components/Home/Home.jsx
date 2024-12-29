import React from 'react';
//import { useEffect } from "react";
//import { useState } from "react";

import { Grid, Column } from '@carbon/react';
import { Breadcrumb } from '@carbon/react';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import { StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';

//import { jwtDecode } from "jwt-decode";
//import { jwtDecode } from "jwt-decode";
// @ts-ignore  
//import jwt_decode from "jwt-decode";
//let jwtDecode = require('jwt-decode')

//import { jwt } from "jsonwebtoken"
//import jwt from "jsonwebtoken"
//import { Rag } from '@carbon/icons-react';
import './_home.scss'

const Home = () => {
  
  

  window.history.pushState(null, null, document.URL);
  window.addEventListener('popstate', function () {
    window.history.pushState(null, null, document.URL);
  });




  return (
    <Grid fullWidth className="landing-page__r31">

      <Column lg={16} md={8} sm={4} >
        <Breadcrumb>
          <div>
            <Link to="/" style={{ textDecoration: 'none' }} >
              Home
            </Link>
          </div>
        </Breadcrumb>
      </Column>
      <Column sm={4} md={8} lg={16} >
        &nbsp;
      </Column>

      <Column lg={16} md={8} sm={16} >
        <div style={{ fontWeight: 'bold' }} className="">
          React Starter Kit 2025
        </div>
        <br></br>
        <div >
        </div>
      </Column>

      <Column lg={16} md={8} sm={16} >
        &nbsp;
      </Column>


      <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">

        <StructuredListWrapper ariaLabel="Structured list">
          <StructuredListHead>
            <StructuredListRow
              head
              tabIndex={0}
            >

            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell>
                Team Name
              </StructuredListCell>

              <StructuredListCell>
                React Starter Kit Developers
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow tabIndex={0}>
              <StructuredListCell>
                Team Size
              </StructuredListCell>
              <StructuredListCell>
                10
              </StructuredListCell>
            </StructuredListRow>
            
          </StructuredListBody>
        </StructuredListWrapper>
      </Column>
      <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
      <img alt="template" style={{ width: '50%', height:'100%', position: 'relative' }} src='../../img/StarterKitImg.jpeg' />
      
      </Column>
    </Grid>
  )
}
export default Home;