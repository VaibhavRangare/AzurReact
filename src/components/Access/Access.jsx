import { Grid } from "@carbon/react";
import { Column } from "@carbon/react";
import { Button } from "@carbon/react";
//import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { Link } from "react-router-dom";
//import { OrderedList, ListItem } from "@carbon/react";
import { TextInput } from "@carbon/react";
import { CodeSnippet } from "@carbon/react";
import { useEffect } from "react";
//import React, { useState, useRef } from "react";
import React, { useState } from "react";
//import { IbmWatsonQuery } from "@carbon/icons-react";
import { Email } from "@carbon/icons-react";
import { Report } from "@carbon/icons-react";
import { IbmWatsonToneAnalyzer } from "@carbon/icons-react";
import { IbmWatsonxAssistant } from "@carbon/icons-react";
import { getResponseFromAIBackend, getSentiment, getEmail, getSummary } from "../../js/aiCalls";

import "./_access.scss";

const Access = () => {
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

  {/* 
  useEffect(() => {
    console.log("Sid => inside useeffect newJoinee: Use effect **********");
  }, []);
  */}

  useEffect(() => {
    console.log(
      "Sid => inside useeffect newJoinee: Use effect **********" + query
    );
  }, [query]);

  useEffect(() => {
    console.log(
      "Sid => inside useeffect newJoinee: Use effect **********" + bdisable
    );
  }, [bdisable]);

  useEffect(() => {
    console.log(
      "Sid => inside useeffect newJoinee: Use effect **********" + airesponse
    );
  }, [airesponse]);

  useEffect(() => {
    console.log(
      "Sid => inside useeffect newJoinee: Use effect **********" + airesponse
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

    let getServiceResult = await getResponseFromAIBackend(query).catch((e) => {
      console.log("Sid => Exception in gerResponseFromAIBackend " + e);
      setBdisable(false);
      setAiresponse("Something went wrong pls try again.");
      return;
    });
    if (getServiceResult) {
      console.log("getServiceResult" + JSON.stringify(getServiceResult));
      console.log("getServiceResult" + getServiceResult.airesponse);
      setBdisable(false);
      setAiresponse(getServiceResult.airesponse);
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
            &nbsp;Access
          </Breadcrumb>
        </Column>
        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div style={{ fontWeight: "bold" }}>Main Idea</div>
        </Column>

        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">
          The main idea is based on the Generative AI model.<br></br>
          We ask a query and AI Workflow provides the answer.
        </Column>

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>
          
          <TextInput data-model-primary-focus
            id="test23"
            invalidText="Invalid error message."
            labelText="Ask AI"
            placeholder="ASK AI"
            //defaultValue={newJoinee.current.lastName}
            //onInput={changeLastNameTextInput}
            onChange={queryChanged}
            renderIcon={IbmWatsonxAssistant}
            
            
          />
          <IbmWatsonxAssistant size={'20'} />
          
          
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
            Ask AI
          </Button>
        </Column>

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>
          <CodeSnippet type="multi">{airesponse}</CodeSnippet>
        </Column>

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>

        <Column sm={4} md={8} lg={2} className="portal-top-list-grid-column">
          <br></br>
          <Button
            kind="primary"
            renderIcon={Email}
            onClick={receiveEmail}
            disabled={bdisable}
          >
            Prepare Email
          </Button>
        </Column>

        <Column sm={4} md={8} lg={3} className="portal-top-list-grid-column">
          <br></br>
          <Button
            kind="primary"
            renderIcon={Report}
            onClick={receiveSummary}
            disabled={bdisable}
          >
            Summarize Response
          </Button>
        </Column>

        <Column sm={4} md={8} lg={3} className="portal-top-list-grid-column">
          <br></br>
          <Button
            kind="primary"
            renderIcon={IbmWatsonToneAnalyzer}
            onClick={receiveSentiment}
            disabled={bdisable}
          >
            Analyze sentiments
          </Button>
        </Column>

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>
          <CodeSnippet type="multi">{airesponse2}</CodeSnippet>
        </Column>
      </Grid>
    </div>
  );
};

export default Access;
