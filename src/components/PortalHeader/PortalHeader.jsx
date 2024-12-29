import './_portal-header.scss';

import { UserMultiple } from '@carbon/icons-react';
import { Idea } from '@carbon/icons-react';
import { Upload } from '@carbon/icons-react';
//import { EventsAlt } from '@carbon/icons-react';
//import { DirectoryDomain } from '@carbon/icons-react';
import { IbmWatsonxAssistant } from "@carbon/icons-react";
//import { UserAccess } from "@carbon/icons-react";
import { IbmDb2 } from "@carbon/icons-react";
 
 
 
import { Email } from '@carbon/icons-react';
import { Home } from '@carbon/icons-react';
//import { Search } from '@carbon/icons-react';
//import { Clean } from '@carbon/icons-react';
import { Theme } from '@carbon/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Rag } from '@carbon/icons-react';
import { useEffect } from "react";

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  //SideNavLink,
  HeaderPanel,
  SwitcherItem,
  SwitcherDivider,
  Switcher,
  //HeaderMenu,
  HeaderNavigation,
  //HeaderMenuItem
} from '@carbon/react';


const PortalHeader = () => {
  const [status] = useState(false)
  const [status1] = useState(false)
  const [showhidenav, setShowhidenav] = useState(true)
  const [showExitPrompt] = useState(true);

  window.history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
      window.history.pushState(null, null, document.URL);
    });

  const initBeforeUnLoad = (showExitPrompt) => {
    window.onbeforeunload  = (event) => {
      //console.log("showExitPrompt:"+ showExitPrompt)
      if (showExitPrompt) {
        const e = event || window.event;
        //console.log("e:"+ JSON.stringify(e))
        e.preventDefault();
       
        if (e) {
          //console.log("Inside if e")
          e.returnValue = '';
        }
        return '';
      }
    };
  };
  
  window.onload = function() {
    initBeforeUnLoad(showExitPrompt);
  };

  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);

  

   useEffect(() => {
      //console.log("Portal Header => inside useeffect id: Use effect **********" + showhidenav);
    }, [showhidenav]);
  
  function displayBackendresponseLink() {
    // if (window.user.hasSingleCreatePrivilege === "true") {
       return (
         <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
           <div className='cds--side-nav__link'>
             <Link to="/fe1/StarterKit/backendresponse" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
               <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                 < UserMultiple/>
               </div>
               <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Get Backend Response </span>
             </Link>
           </div>
         </li>
       );
     //}
   }
 
  

  function displayMultipleIDCreateLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/fe1/StarterKit/idea" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <Idea />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Our Idea </span>
            </Link>
          </div>
        </li>
      );
    //}
  }

    function displayDocumentLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/document" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <Upload />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Document </span>
            </Link>
          </div>
        </li>
      );
    //}
  }

  
  
      function displayAskaiLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/aa" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <IbmWatsonxAssistant />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Ask AI Using LLM </span>
            </Link>
          </div>
        </li>
      );
    //}
  }

  
      function displayAskailcLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/aalc" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <IbmWatsonxAssistant />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Ask AI Using Langchain </span>
            </Link>
          </div>
        </li>
      );
    //}
  }

    
      function displayAskaicgLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/aacg" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <IbmWatsonxAssistant />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Ask AI Content Genration </span>
            </Link>
          </div>
        </li>
      );
    //}
  }

   
      function displayMilvusLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/milvus" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <IbmDb2   />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Milvus </span>
            </Link>
          </div>
        </li>
      );
    //}
  }

   
  function displayMilvusInsertLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/mi" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <IbmDb2   />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Milvus Insert QA</span>
            </Link>
          </div>
        </li>
      );
    //}
  }  

    
  function displayMilvusUploadLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/mu" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <IbmDb2   />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Milvus Upload Doc </span>
            </Link>
          </div>
        </li>
      );
    //}
  }  


    function displayMilvusIdContentLink() {
    //if (window.user.hasMultipleCreatePrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/mic" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <IbmDb2   />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Milvus ID Content </span>
            </Link>
          </div>
        </li>
      );
    //}
  } 

  


  
  

  function displayBulkUploadLink() {
    //if (window.user.hasBulkUploadPrivilege === "true") {
      return (
        <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
          <div className='cds--side-nav__link'>
            <Link to="/fe1/StarterKit/contactus" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
              <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                <Email />
              </div>
              <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Contact US </span>
            </Link>
          </div>
        </li>
      );
    //}
  }

  

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Theme theme="g10">
            <Header aria-label="IBM Platform Name"
            onClick={()=> {
              //console.log("Clicked: "+ showhidenav)
              setShowhidenav(true)
              if(showhidenav === true){
                //console.log("showhidenav is true: ")
                //onClickSideNavExpand(false)
                setShowhidenav(false)
                //console.log("showhidenav is : "+ showhidenav)
                //onClickSideNavExpand()
              }
              else if(showhidenav === false){
                //console.log("showhidenav is false: ")
                //onClickSideNavExpand(false)
                setShowhidenav(true)
                //console.log("showhidenav is : "+ showhidenav)
                //onClickSideNavExpand()
              }
              //isSideNavExpanded === true ? onClickSideNavExpand : null
            }}            
            >
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName element={Link} to="/" prefix="">
              React Starter Kit &nbsp; <Rag size={'24'} />
              </HeaderName>
              <HeaderNavigation aria-label="React Starter Kit 2025">
              
              </HeaderNavigation>

              <HeaderGlobalBar>


              <HeaderGlobalAction aria-label="Organization" style={{width:'80px'}} >
                   IBM
                </HeaderGlobalAction>
                

              </HeaderGlobalBar>

              <HeaderPanel aria-label="Header Panel" expanded={status}>
                <Switcher aria-label="Help Container">
                  <SwitcherItem aria-label="Link 1" style={{ cursor: 'default' }}>
                    Help and Support
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem aria-label="Link 2" href="https://w3.ibm.com/w3publisher/identity-provisioning/get-help" target='_blank' style={{ color: '#0062FE' }}>
                    Get Help
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem aria-label="Link 2" href="https://w3.ibm.com/w3publisher/identity-provisioning" target='_blank' style={{ color: '#0062FE' }}>
                    About AI
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem aria-label="Link 3" href="https://w3.ibm.com/w3publisher/identity-provisioning/faqs" target='_blank' style={{ color: '#0062FE' }}>
                    FAQs
                  </SwitcherItem>
                  <SwitcherDivider />


                </Switcher>

              </HeaderPanel>



              <HeaderPanel aria-label="Header Panel" expanded={status1} >
                <Switcher aria-label="Help Container">
                  <SwitcherItem aria-label="Link 1" style={{ cursor: 'default' }}>
                    User
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem aria-label="Link 2" style={{ cursor: 'default' }}>
                    Name: 
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem aria-label="Link 3" style={{ cursor: 'default' }}>
                    Email: 
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem aria-label="Link 4" style={{ cursor: 'default' }}>
                    TalentID: 
                  </SwitcherItem>
                  <SwitcherDivider />
                </Switcher>
              </HeaderPanel>
              {/* <SideNav aria-label="Side navigation" isRail expanded={false} isPersistent={falses} onOverlayClick={onClickSideNavExpand} > */}
              <SideNav aria-label="Side navigation" isRail expanded={isSideNavExpanded} isPersistent={true}  >
                <SideNavItems>

                  <li className="cds--side-nav__item cds--side-nav__item--icon " style={{ borderStyle: 'none' }}>
                    <div className='cds--side-nav__link'>
                      <Link to="/" className='cds--side-nav__submenu' style={{ width: '300px', left: '100px', borderStyle: 'dashed solid', textDecoration: 'none' }} >
                        <div className='cds--side-nav__icon cds--side-nav__icon--small' >
                          <Home />
                        </div>
                        <span className='cds--side-nav__link-text' style={{ width: '300px', left: '0px', position: 'relative', textDecoration: 'none' }} >Home </span>
                      </Link>
                    </div>
                  </li>
                  {/* {displaySingleIDCreateLink()} */}
                  {displayMultipleIDCreateLink()}
                  {displayAskaiLink()}
                  {displayAskailcLink()}
                  {displayAskaicgLink()}
                  {displayDocumentLink()}
                  
                  {displayMilvusLink()}
                  {displayMilvusInsertLink()}
                  {displayMilvusUploadLink()}
                  {displayMilvusIdContentLink()}
                  
                  {displayBulkUploadLink()}
                  {displayBackendresponseLink()}
                  
                  
                </SideNavItems>
              </SideNav>
            </Header>
          </Theme>
        </>
      )}
    />
  )
}

export default PortalHeader;