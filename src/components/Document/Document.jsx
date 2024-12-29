import { Grid } from "@carbon/react";
import { Column } from "@carbon/react";
import { Button } from "@carbon/react";
//import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import { getResponseFromAIBackend, getSentiment, getEmail, getSummary, uploadFiletoAIServer } from "../../js/aiCalls";
import { FileUploader } from '@carbon/react';
import { ComposedModal, ModalHeader, ModalBody, ModalFooter } from '@carbon/react';
import { Loading } from '@carbon/react';


import "./_document.scss";

const Document = () => {
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

  const [file,setFile] =  useState('')
  const [fileUploadResult,setfileUploadResult] =  useState('')
  const [open1, setOpen1] = useState(false);
  const [loadingShowHide1, setLoadingShowHide1] = useState('none')

  

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


    async function previewUpload(evt) {
    setfileUploadResult('')
    setFile('')
    console.log("Inside previewUpload")
    //init(true)
    const csv = evt.target.files[0]
    //const csv = evt.target.files
    console.log("csv: " + csv)
    console.log("csv file: " + JSON.stringify(csv))
    
    console.log("csv: " + csv.name)
    
    setFile(csv)
    
    setOpen1(true)                
  }

  
  async function uploadFile() {
    //var input = document.querySelector('input[type="file"]')
    //var input = document.getElementById('testinput1');
    //input.files[0]
    //if (enableconsolelog === 'true') console.log("BU => input.files[0] " + input.files[0].name);
    console.log("BU => file " + file.name);
    //if (enableconsolelog === 'true') console.log("BU => file2 " + input.files[0].name);
    
    console.log("BU => file " + JSON.stringify(file));
    console.log("BU => file " + file.localpath);
    console.log("BU => file " + file.directory);
    setLoadingShowHide1('block')
    
    let uploadFiletoAIServerResult = await uploadFiletoAIServer(file).catch(e => {
      console.log("BU => Exception in uploadFiletoAIServerResult " + e);
      console.log("BU => uploadFiletoAIServerResult failure")

      console.log("BU => Stopping uploadFiletoAIServerResult.")
      setLoadingShowHide1('none')
      return;
    })
    //if (enableconsolelog === 'true') console.log("uploadFiletoAIServerResult: " + uploadFiletoAIServerResult)
    console.log("uploadFiletoAIServerResult: " + JSON.stringify(uploadFiletoAIServerResult))
    if(uploadFiletoAIServerResult){
      setLoadingShowHide1('none')
      if(uploadFiletoAIServerResult.apiresponse){
        console.log("uploadFiletoAIServerResult: " + JSON.stringify(uploadFiletoAIServerResult))
        console.log("uploadFiletoAIServerResult1234: " + uploadFiletoAIServerResult.apiresponse)
        setOpen1(false)
        setfileUploadResult(uploadFiletoAIServerResult.apiresponse)
      }
      else{
        console.log("uploadFiletoAIServerResult: " + JSON.stringify(uploadFiletoAIServerResult))
      }

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
            &nbsp;Document
          </Breadcrumb>
        </Column>
        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div style={{ fontWeight: "bold" }}>Upload Document to Back-End Server</div>
        </Column>

        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={8} className="portal-top-list-grid-column">
          <br></br>

           <FileUploader
          accept={[
            '*.*'
          ]}
          buttonKind="primary"
          buttonLabel="Upload the File to Back-End Server"
          filenameStatus="edit"
          iconDescription="Clear file"
          labelDescription="csv, pdf, text, json"
          labelTitle="Upload File"
          name="file"
          type="file"
          id="testinput1"
          //onInput={(event) => { previewUpload(event, validateUpload); }}
          onInput={(event) => { previewUpload(event); }}
        />
          
          
          
          
        </Column> 

        <Column
          sm={4}
          md={8}
          lg={8}
          className="portal-top-list-grid-column"
        ></Column>



        
      <ComposedModal buttontriggertext="Launch modal" open={open1} onClose={() => { setOpen1(false); }}
      preventCloseOnClickOutside={true}
      >
        <ModalHeader label="File Upload">
          <h1>
            Upload File
          </h1>
        </ModalHeader>
        <ModalBody hasForm>
          <br></br>
          <p>
            Please confirm the submission of the File. <br></br>
            {file.name} 
            
          </p>
          <br></br>
          
        </ModalBody>

        <ModalFooter>
          <Button
            kind="secondary"
            onClick={() => { setOpen1(false); }}>
            Cancel
          </Button>
          <Button
            kind="primary"
            //onClick={commitConfirm}
            onClick={() => { uploadFile(); }}
            //disabled={isIdConfirmButtonDisable}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ComposedModal>
      <span style={{ display: loadingShowHide1 }}>{processing1()}</span>
      </Grid>
    </div>
  );
};

export default Document;
