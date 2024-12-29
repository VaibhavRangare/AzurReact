import { Grid } from "@carbon/react";
import { Column } from "@carbon/react";
import { Button } from "@carbon/react";
//import React from 'react';
import { Breadcrumb, BreadcrumbItem, Dropdown } from "@carbon/react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import React, { useState, useRef } from "react";

 
import { Upload } from '@carbon/icons-react';


import { getSentiment, getEmail, getSummary, getDocumentsFromAIServer, uploadDoctoMilusDB } from "../../js/aiCalls";
import { Slug, SlugContent } from "../../../node_modules/@carbon/react/lib/components/Slug";
import { StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
import { Loading } from '@carbon/react';

import "./_milvusupload.scss";

const Milvusupload = () => {
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
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [documentSelected, isDocumentSelected] = useState(false);
  const [documentName, setDocumentName] = useState("Select A Document to upload to Milvus DB");
  const [items, setItems] = useState([])

  /*
  const items = [
    {
    'text': 'Select A Document to upload to Milvus DB'
    }, {
      'text': 'Option 1'
    }, {
      'text': 'Option 2'
    },  {
      'text': 'Option 4'
    }, {
      'text': 'Option 5'
    }
  ];
  */


   const slug = <Slug>
  <SlugContent>
    Ask your query about Identity 
  </SlugContent>
</Slug>


useEffect(() => {
    console.log("Sid => inside useeffect : Use effect **********");
    getDocs()

      async function getDocs() {
    setBdisable(true);
    setLoadingShowHide1('block')
    let getServiceResult = await getDocumentsFromAIServer(question, answer).catch((e) => {
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
      console.log("getServiceResult12" + getServiceResult['apiresponse'][0]['text']);
      setItems(JSON.stringify(getServiceResult))
      let d = []
      
      for (let i = 0; i < getServiceResult['apiresponse'].length; i++){
        d.push(getServiceResult['apiresponse'][i])
      }
      setItems(d)
      //setItems([getServiceResult['apiresponse'][0]])
      //setBdisable(false);
      //setAiresponse(getServiceResult['apiresponse']);
    } else {
      //setBdisable(false);
      setAiresponse("Something went wrong pls try again.");
    }
  }
  }, []);


  useEffect(() => {
    console.log("Sid => inside useeffect documentSelected: Use effect **********");
  }, [documentSelected]);

    useEffect(() => {
    console.log("Sid => inside useeffect documentName: Use effect **********");
  }, [documentName]);

      useEffect(() => {
    console.log("Sid => inside useeffect items: Use effect **********");
  }, [items]);

  

  useEffect(() => {
    console.log(
      "Sid => inside useeffect : Use effect query **********" + query
    );
  }, [query]);

  useEffect(() => {
    console.log(
      "Sid => inside useeffect : Use effect question **********" + query
    );
  }, [question]);

    useEffect(() => {
    console.log(
      "Sid => inside useeffect : Use effect answer **********" + query
    );
  }, [answer]);
  

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


  
  function questionChanged(evt) {
    console.log("Query changed");
    let q = evt.target.value;
    setQuestion(q);
    if (q) {
      setBdisable(false);
    } else {
      setBdisable(true);
    }
  }

  
  function selectionChanged(evt) {
    console.log("Query changed");
    //let q = evt.target.value;

    var e = document.getElementById("default");
    //let selectElement = document.querySelector('default');
    let output = e.textContent;
    if(output){
      output = output.replace('Open menu','')
      console.log("value: "+ output)
      setDocumentName(output)
      setBdisable(false);
    }
    else{
      setBdisable(true);
    }
    //var value = e.se;
    //var text = e.options[e.selectedIndex].text;
    
    //console.log("text: "+ text)
    //setAnswer(q);
    /*
    if (q) {
      setBdisable(false);
    } else {
      setBdisable(true);
    }
    */
  }


  function selectionChanged1(evt) {
    console.log("Query changed");
    let q = evt.target.value;
    //setQuery(q);
    if (q) {
      setBdisable(false);
    } else {
      setBdisable(true);
    }
  }

  async function uploadDocToMilusDBFromAI() {
    setBdisable(true);
    setLoadingShowHide1('block')
    let getServiceResult = await uploadDoctoMilusDB(documentName).catch((e) => {
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
      setAiresponse(getServiceResult['apiresponse']);
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
            &nbsp;Upload Document to Milvus
          </Breadcrumb>
        </Column>
        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div style={{ fontWeight: "bold" }}>Upload Document to Milvus</div>
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
          
          


      <Dropdown 
        id="default" 
        titleText="Upload Document to Milvus DB" 
        helperText="Select from the given choices" 
        initialSelectedItem={items[0]} 
        //label="Select A Document to upload to Milvus DB" 
        label={documentName}        
        items={items} 
        itemToString={item => item ? item.text : ''}  
        onChange={selectionChanged}
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
            renderIcon={Upload}
            onClick={uploadDocToMilusDBFromAI}
            disabled={bdisable}
          >
            Upload Document to Milvus DB
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
                {airesponse}
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
        {/* 
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
        */}
        <span style={{ display: loadingShowHide1 }}>{processing1()}</span>
      </Grid>
    </div>
  );
};

export default Milvusupload;
