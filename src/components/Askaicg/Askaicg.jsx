import { Grid } from "@carbon/react";
import { Column } from "@carbon/react";
import { Button } from "@carbon/react";
//import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { Link } from "react-router-dom";
//import { OrderedList, ListItem } from "@carbon/react";
import { TextInput } from "@carbon/react";
//import { CodeSnippet } from "@carbon/react";
import { useEffect } from "react";
//import React, { useState, useRef } from "react";
import React, { useState } from "react";
//import { IbmWatsonQuery } from "@carbon/icons-react";
//import { Email } from "@carbon/icons-react";
//import { Report } from "@carbon/icons-react";
//import { IbmWatsonToneAnalyzer } from "@carbon/icons-react";
import { IbmWatsonxAssistant } from "@carbon/icons-react";
import {  getSentiment, getEmail, getSummary,  getCGResponseFromAIBackend } from "../../js/aiCalls";
import { Slug, SlugContent } from "../../../node_modules/@carbon/react/lib/components/Slug";
import { StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
import { Loading } from '@carbon/react';

import "./_askaicg.scss";

const Askaicg = () => {
  // sm={4} md={8} lg={16}
  // sm = {1 to 4},  for small screen device, column span will be from 1 to 4.
  // for sm, 4 is full width and 1 is most small width for small screen device.
  // md = {1 to 8} form medium screen device, clumns span will be from 1 to 8.
  // for md, 8 is full width and 1 is most small width for small screen device.
  // lg = {16}, for small screen device, column span will be from 1 to 16.
  // for lg, 16 is full width and 1 is most small width for small screen device.
  //let tdisplay="inline-block";

  const [query, setQuery] = useState("");
  const [bdisable, setBdisable] = useState(true);
  const [airesponse, setAiresponse] = useState("");
  const [airesponse2, setAiresponse2] = useState("");
  const [loadingShowHide1, setLoadingShowHide1] = useState('none')
   const slug = <Slug>
  <SlugContent>
    <IbmWatsonxAssistant/><br></br>
    Ask your query about Identity.<br></br>
    Example: Who is the second level approver for Telent ID ABCDEF.
  </SlugContent>
</Slug>

const slug1 = <Slug>
  <SlugContent>
    Ask your query about Identity 
  </SlugContent>
</Slug>

 

  useEffect(() => {
    console.log(
      "Sid => inside useeffect : Use effect query **********" + query
    );
  }, [query]);

  useEffect(() => {
    console.log("Sid => inside useeffect loadingShowHide1: Use effect **********"+ loadingShowHide1);    
  }, [loadingShowHide1]);

  useEffect(() => {
    console.log(
      "Sid => inside useeffect bdisable: Use effect **********" + bdisable
    );
  }, [bdisable]);

  useEffect(() => {
    console.log(
      "Sid => inside useeffect airesponse: Use effect **********" + airesponse
    );
  }, [airesponse]);

  useEffect(() => {
    console.log(
      "Sid => inside useeffect airesponse: Use effect **********" + airesponse
    );
  }, [airesponse2]);

  function queryChanged(evt) {
    console.log("Query changed");
    let q = evt.target.value;
    setQuery(q);
    if (q) {
      setBdisable(false);
    } else {
      setBdisable(true);
    }
  }

  async function submitQuery() {
    setBdisable(true);
    setLoadingShowHide1('block')
    //let getServiceResult = await getResponseFromAIBackend(query).catch((e) => {
    let getServiceResult = await getCGResponseFromAIBackend(query).catch((e) => {
      console.log("Sid => Exception in gerResponseFromAIBackend " + e);
      setBdisable(false);
      setAiresponse("Something went wrong pls try again.");
      setLoadingShowHide1('none')
      return;
    });
    if (getServiceResult) {
      setLoadingShowHide1('none')
      console.log("getServiceResult10" + typeof getServiceResult);
      console.log("getServiceResult11" + JSON.stringify(getServiceResult));
      console.log("getServiceResult12" + getServiceResult['apiresponse']);
      setBdisable(false);
      let getServiceResult1 = getServiceResult['apiresponse'].replaceAll('.','.<br>')      
      console.log("getServiceResult12" + getServiceResult1);
      setAiresponse(getServiceResult['apiresponse']);
      document.getElementById("vr_id2").innerHTML = getServiceResult1;
    } else {
      setBdisable(false);
      setAiresponse("Something went wrong pls try again.");
    }
  }

   async function receiveEmail() {
    setBdisable(true);

    let getServiceResult = await getEmail(airesponse).catch((e) => {
      console.log("Sid => Exception in gerResponseFromAIBackend " + e);
      setBdisable(false);
      setAiresponse2("Something went wrong pls try again.");
      return;
    });
    if (getServiceResult) {
      console.log("getServiceResult" + JSON.stringify(getServiceResult));
      console.log("getServiceResult" + getServiceResult.airesponse);
      setBdisable(false);
      setAiresponse2(getServiceResult.airesponse);
    } else {
      setBdisable(false);
      setAiresponse2("Something went wrong pls try again.");
    }
  }



  async function receiveSummary() {
    setBdisable(true);

    let getServiceResult = await getSummary(airesponse).catch((e) => {
      console.log("Sid => Exception in gerResponseFromAIBackend " + e);
      setBdisable(false);
      setAiresponse2("Something went wrong pls try again.");
      return;
    });
    if (getServiceResult) {
      console.log("getServiceResult" + JSON.stringify(getServiceResult));
      console.log("getServiceResult" + getServiceResult.airesponse);
      setBdisable(false);
      setAiresponse2(getServiceResult.airesponse);
    } else {
      setBdisable(false);
      setAiresponse2("Something went wrong pls try again.");
    }
  }


    async function receiveSentiment() {
    setBdisable(true);

    let getServiceResult = await getSentiment(airesponse).catch((e) => {
      console.log("Sid => Exception in gerResponseFromAIBackend " + e);
      setBdisable(false);
      setAiresponse2("Something went wrong pls try again.");
      return;
    });
    if (getServiceResult) {
      console.log("getServiceResult" + JSON.stringify(getServiceResult));
      console.log("getServiceResult" + getServiceResult.airesponse);
      setBdisable(false);
      setAiresponse2(getServiceResult.airesponse);
    } else {
      setBdisable(false);
      setAiresponse2("Something went wrong pls try again.");
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
            &nbsp;Content Generation using LLM
          </Breadcrumb>
        </Column>
        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div style={{ fontWeight: "bold" }}>Content Generation using LLM</div>
        </Column>

        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>
        {/* 
        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">
          The main idea is based on the Generative AI model.<br></br>
          We ask a query and AI Workflow provides the answer.
        </Column>
        */}

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>
          
          <TextInput data-model-primary-focus
            id="test23"
            invalidText="Invalid error message."
            labelText="Generate content for the given input"
            placeholder="imput"
            //defaultValue={newJoinee.current.lastName}
            //onInput={changeLastNameTextInput}
            onChange={queryChanged}
            renderIcon={IbmWatsonxAssistant}
            slug = {slug}
            
          />
          {/* 
          <IbmWatsonxAssistant size={'20'} />
          */}
          
          
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
            renderIcon={IbmWatsonxAssistant}
            onClick={submitQuery}
            disabled={bdisable}
          >
            Generate Content
          </Button>
        </Column>

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>

        {/* 
        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>
          <CodeSnippet type="multi">{airesponse}</CodeSnippet>
        </Column>
        */}

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
                <div id="vr_id2"> 

                </div>
                {/* 
                {airesponse}
                */}
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

export default Askaicg;
