import { Grid } from "@carbon/react";
import { Column } from "@carbon/react";
import { Button } from "@carbon/react";
import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { Link } from "react-router-dom";
import { TextInput } from "@carbon/react";
import { useEffect } from "react";
import React, { useState } from "react";
import { ContentView } from "@carbon/icons-react";
//import { IbmWatsonxAssistant } from "@carbon/icons-react";
//import {  fe_getContentFromID } from "../../js/aiCalls";

import {  fe_getRestApiResponse } from "../../js/aiCalls";

import { StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
import { Loading } from '@carbon/react';

import "./_backendresponse.scss";

const Backendresponse = () => {
  // sm={4} md={8} lg={16}
  // sm = {1 to 4},  for small screen device, column span will be from 1 to 4.
  // for sm, 4 is full width and 1 is most small width for small screen device.
  // md = {1 to 8} form medium screen device, clumns span will be from 1 to 8.
  // for md, 8 is full width and 1 is most small width for small screen device.
  // lg = {16}, for small screen device, column span will be from 1 to 16.
  // for lg, 16 is full width and 1 is most small width for small screen device.
  //let tdisplay="inline-block";

  const [query] = useState("");
  const [bdisable, setBdisable] = useState(true);
  const [airesponse] = useState("");
  const [airesponse2] = useState("");
  const [loadingShowHide1, setLoadingShowHide1] = useState('none')
  const [question] = useState("");
  const [answer] = useState("");
  const [id, setId] = useState("");
  const [content, setContent] = useState("");


  

  useEffect(() => {
    //console.log("Sid => inside useeffect id: Use effect **********");
  }, [id]);

  useEffect(() => {
    //console.log("Sid => inside useeffect content: Use effect **********");
  }, [content]);

  useEffect(() => {
    //console.log("Sid => inside useeffect : Use effect query **********" + query);
  }, [query]);

  useEffect(() => {
    //console.log("Sid => inside useeffect : Use effect question **********" + question);
  }, [question]);

    useEffect(() => {
    //console.log("Sid => inside useeffect : Use effect answer **********" + answer);
  }, [answer]);
  

  useEffect(() => {
    //console.log("Sid => inside useeffect loadingShowHide1: Use effect **********"+ loadingShowHide1);    
  }, [loadingShowHide1]);

  useEffect(() => {
    //console.log("Sid => inside useeffect bdisable: Use effect **********" + bdisable);
  }, [bdisable]);

  useEffect(() => {
    //console.log("Sid => inside useeffect airesponse: Use effect **********" + airesponse);
  }, [airesponse]);

  useEffect(() => {
    //console.log("Sid => inside useeffect airesponse: Use effect **********" + airesponse2);
  }, [airesponse2]);

  
  function idChanged(evt) {
    //console.log("ID changed");
    let q = evt.target.value;
    setId(q);
    if (q) {
      setBdisable(false);
    } else {
      setBdisable(true);
    }
  }

  

  async function submitQAFromAI() {
    setBdisable(true);
    setLoadingShowHide1('block')
    let getServiceResult = await fe_getRestApiResponse(id).catch((e) => {
      //console.log("Sid => Exception in gerResponseFromAIBackend " + e);
      setBdisable(false);
      setContent("Something went wrong pls try again.");
      setLoadingShowHide1('none')
      return;
    });
    if (getServiceResult) {
      setLoadingShowHide1('none')
      //console.log("getServiceResult10" + typeof getServiceResult);
      //console.log("getServiceResult11" + JSON.stringify(getServiceResult));
      //console.log("getServiceResult12" + getServiceResult['apiresponse']);
      //console.log("getServiceResult12" + getServiceResult);
      setBdisable(false);
      setContent(getServiceResult['apiresponse']);
      //setContent(getServiceResult);
    } else {
      setBdisable(false);
      setContent("Something went wrong pls try again.");
    }
  }




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
      <Grid fullWidth className="landing-page__r31">
        <Column sm={4} md={8} lg={16} className="portal-top-grid-column">
          <Breadcrumb>
            <BreadcrumbItem to="/">
              <div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </div>
            </BreadcrumbItem>{" "}
            &nbsp;Get Backend response
          </Breadcrumb>
        </Column>
        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div style={{ fontWeight: "bold" }}>Get Backend response</div>
        </Column>

        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>
        

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>
          
          <TextInput data-model-primary-focus
            id="test23"
            invalidText="Invalid error message."
            labelText="Message to backend"
            placeholder="Message to backend"
            //defaultValue={newJoinee.current.lastName}
            //onInput={changeLastNameTextInput}
            onChange={idChanged}
            //renderIcon={IbmWatsonxAssistant}
            
            
          />
          
          
          
        </Column> 

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>

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
          <br></br>
          <Button
            kind="primary"
            renderIcon={ContentView}
            onClick={submitQAFromAI}
            disabled={bdisable}
          >
            Receive response from backend
          </Button>
        </Column>

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>

       

        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">
          <br></br>
          

          
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
                {content}
              </StructuredListCell>

              
            </StructuredListRow>

          </StructuredListBody>
        </StructuredListWrapper>
        </Column>

        <Column
          sm={4}
          md={8}
          lg={16}
          className="portal-top-list-grid-column"
        ></Column>
        
        <span style={{ display: loadingShowHide1 }}>{processing1()}</span>
      </Grid>
    </div>
  );
};

export default Backendresponse;
