import { Grid } from "@carbon/react";
import { Column } from "@carbon/react";
import { Button } from "@carbon/react";
//import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { Link } from "react-router-dom";
import { OrderedList, ListItem } from "@carbon/react";


import { useEffect } from "react";
import React, { useState } from "react";

import { fe_getMilvusCollection, fe_getMilvusIds } from "../../js/aiCalls";
import { Loading } from '@carbon/react';


import "./_milvus.scss";

const Milvus = () => {
  // sm={4} md={8} lg={16}
  // sm = {1 to 4},  for small screen device, column span will be from 1 to 4.
  // for sm, 4 is full width and 1 is most small width for small screen device.
  // md = {1 to 8} form medium screen device, clumns span will be from 1 to 8.
  // for md, 8 is full width and 1 is most small width for small screen device.
  // lg = {16}, for small screen device, column span will be from 1 to 16.
  // for lg, 16 is full width and 1 is most small width for small screen device.
  //let tdisplay="inline-block";

  
  
  const [milvusCollection, setMilvusCollection] = useState("");
  const [airesponse2, setAiresponse2] = useState("");
  const [loadingShowHide1, setLoadingShowHide1] = useState('none')
  const [mid,setMid] = useState("")
  



  

//getMilvusCollection()

  useEffect(() => {
    console.log("Sid => inside useeffect : Use effect **********");
    getMilvusCollection()
    getMilvusIds()

    
  async function getMilvusCollection() {    
        setLoadingShowHide1('block')
      let getServiceResult = await fe_getMilvusCollection().catch((e) => {
        console.log("Sid => Exception in gerResponseFromAIBackend " + e);      
        setMilvusCollection(null);
        setLoadingShowHide1('none')
        return;
      });
      if (getServiceResult) {
        console.log("getServiceResult:" + JSON.stringify(getServiceResult));
        console.log("getServiceResult: " + getServiceResult['apiresponse']);
        
        //setMilvusCollection(getServiceResult['apiresponse']);
        setMilvusCollection(JSON.stringify(getServiceResult['apiresponse']));
        setLoadingShowHide1('none')
      } else {      
        setMilvusCollection(null);
      }
    }

      async function getMilvusIds() {    
        setLoadingShowHide1('block')
      let getServiceResult1 = await fe_getMilvusIds().catch((e) => {
        console.log("Sid => Exception in gerResponseFromAIBackend " + e);      
        setMid(null);
        setLoadingShowHide1('none')
        return;
      });
      if (getServiceResult1) {
        //console.log("getServiceResult:" + JSON.stringify(getServiceResult));
        console.log("getServiceResult:" + getServiceResult1);
        //console.log("getServiceResult:" + type(getServiceResult));
        console.log("getServiceResult: " + getServiceResult1['apiresponse']);
        
        //setMid(getServiceResult['apiresponse']);
        setMid(JSON.stringify(getServiceResult1['apiresponse']));
        setLoadingShowHide1('none')
      } else {      
        setMilvusCollection(null);
      }
    }

      
    
  }, []);

    useEffect(() => {
    console.log("Sid => inside useeffect loadingShowHide1: Use effect **********"+ loadingShowHide1);
    

      
    
  }, [loadingShowHide1]);



    function processing1() {
    return (
      <div>
        <Loading
          description="Loading values" withOverlay={true}
        />
      </div>
    );
  }

  

  window.history.pushState(null, null, document.URL);
  window.addEventListener("popstate", function () {
    window.history.pushState(null, null, document.URL);
  });

  return (
    <div>
      <Grid fullWidth className="portal-top-grid ">
        <Column sm={4} md={8} lg={16} className="portal-top-grid-column">
          <Breadcrumb>
            <BreadcrumbItem to="/">
              <div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </div>
            </BreadcrumbItem>{" "}
            &nbsp;Milvus
          </Breadcrumb>
        </Column>
        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div style={{ fontWeight: "bold" }}>Milvus</div>
        </Column>

        <Column sm={4} md={8} lg={16}>
        <br></br>
          <OrderedList style={{textAlign:'left', paddingTop:'0px', paddingLeft:'5%'}}>
            <ListItem>Milvus Host: b3625f46-c57c-4132-8501-47793ca7e063.cpm2q1vw08lmp6umpdj0.lakehouse.appdomain.cloud</ListItem>
            <ListItem>Milvus Port: 31344</ListItem>
            <ListItem>Milvus User: ibmlhapikey</ListItem>    
          </OrderedList>
        </Column>

        <Column sm={4} md={8} lg={16}>
        <br></br>
        <div style={{ fontWeight: "bold" }}>Milvus Collection: {milvusCollection}</div> 
          
        </Column>

        <Column sm={4} md={8} lg={16} >
        <br></br><br></br>
        <div style={{ fontWeight: "bold" }}>Milvus Ids: {mid}</div> 
          
        </Column>

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>
          
          
          
          
        </Column> 

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          
        </Column>
        <span style={{ display: loadingShowHide1 }}>{processing1()}</span>
      </Grid>
    </div>
  );
};

export default Milvus;
