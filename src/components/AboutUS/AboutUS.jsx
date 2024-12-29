//import React from 'react';
import { Grid } from '@carbon/react';
import { Column } from '@carbon/react';
//import React, { useState, useRef } from 'react';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from 'react-router-dom';
//import { InProgress } from '@carbon/icons-react';
import { Rag } from '@carbon/icons-react';
import { FingerprintRecognition } from '@carbon/icons-react';
//import { OrderedList, ListItem, UnorderedList } from '@carbon/react';

import './_aboutus.scss'

const AboutUS = () => {

  // sm={4} md={8} lg={16}
  // sm = {1 to 4},  for small screen device, column span will be from 1 to 4.
  // for sm, 4 is full width and 1 is most small width for small screen device.
  // md = {1 to 8} form medium screen device, clumns span will be from 1 to 8.
  // for md, 8 is full width and 1 is most small width for small screen device.
  // lg = {16}, for small screen device, column span will be from 1 to 16.
  // for lg, 16 is full width and 1 is most small width for small screen device.
  //let tdisplay="inline-block";




  return (

    <div>
      <Grid fullWidth className="portal-top-grid " >

        <Column sm={4} md={8} lg={16} className="portal-top-grid-column">
          <Breadcrumb>
            <BreadcrumbItem to="/">
              <div>
                <Link to="/" style={{ textDecoration: 'none' }} >
                  Home
                </Link>
              </div>
            </BreadcrumbItem> &nbsp;About The Team
          </Breadcrumb>
        </Column>


        <Column sm={4} md={8} lg={16} >
          &nbsp;
        </Column>

        <Column sm={4} md={8} lg={16} >
          <div style={{ fontWeight: 'bold' }}>

          </div>
        </Column>

        <Column sm={4} md={8} lg={16} >
          <div>
          <div style={{textAlign:'left'}}>
            <h1> AI Trenders <Rag size={'20'} /></h1> 

            
            
          </div>
        </div>
        </Column>
        

        <Column sm={4} md={8} lg={16} >
        <br></br>
        <Grid   style={{padding:'0px'}}>
          
            <Column sm={4} md={8} lg={3} >
            <div style={{ width: 'auto',height:'30%', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#a6c8ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Identity India</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                        <FingerprintRecognition size={'94'} />
                      
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Identity And</h5>
                        <h5 >Access Management</h5>
                        
                        <br></br>
                        India
                        <br>
                        </br>
                        Bangalore
                         
                         <h5 >CIO Identity Services</h5>
                         <br></br>&nbsp;
                         <br></br>&nbsp;
                      </div>
                      <hr></hr>
                      <div style={{width:'auto',textAlign:'center', paddingBottom:'5px'}}>IBM CIO <br></br>CIO Identity Services</div>
                    </div>
                  </div>
                </div>
            </Column>

            <Column sm={4} md={8} lg={3} >
            <div style={{ width: 'auto',height:'30%', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#78a9ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Lead</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/VinodS.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Vinod Sreerama</h5>
                        
                      </div>
                      <hr></hr>
                      <div style={{width:'auto',textAlign:'center', paddingBottom:'5px'}}>Sr. Manager & Global Operations Leader for CIO Identity Services</div>
                    </div>
                  </div>
                </div>
            </Column>
            
            <Column sm={4} md={8} lg={2} >
            
            </Column>

            <Column sm={4} md={8} lg={2} >
            
            </Column>
          
          
        </Grid>
<br></br>
<br></br>
        <Grid   style={{padding:'0px'}}>
          
            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Aishwarya <br></br>(Designer)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Aishwarya.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >aparthik<br></br>@in.ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>

            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Rashmi <br></br>(Developer)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Rashmi.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >rashminaik11<br></br>@in.ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>
            
            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >VinothKumar <br></br>(Developer)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vinoth.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Vinothkumar<br></br>.Arumugam<br></br>@ibm.com</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>

            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Kanchan <br></br>(Developer)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Kanchan.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Kanchan-Badhe@<br></br>@ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>


<Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Vaibhav <br></br>(Developer)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='../../img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >vrangare<br></br>@in.ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>

            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Lavanya <br></br>(Tester)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Lavanya.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >lavanyama<br></br>@in.ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>
            
            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Ramesh <br></br>(Tester)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Ramesh.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >s.ramesh<br></br>@ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>

            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Sowmya <br></br>(Tester)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Sowmya.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >sowmya.b3<br></br>@ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>   

            <Column sm={4} md={8} lg={2} >
            <br></br>
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'#b8d3ff'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Suneel Kumar<br></br>(Developer)</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Sunil.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >skalwako<br></br>@in.ibm.com<br></br>&nbsp;</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>         
          
          
        </Grid>
<br></br>

{/*
        <Grid  style={{padding:'0px'}}>
          
            
            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Member</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Developer</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>

            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Member</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Developer</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>
            
            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Member</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Developer</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>

            <Column sm={4} md={8} lg={2} >
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Member</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Developer</h5>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
            </Column>
          
          
        </Grid>

<br></br>

        
 */}

        </Column>
{/*
        <Column sm={4} md={8} lg={16} >
        <Grid  className="portal-sub-sub-grid" style={{padding:'0px'}}>
          <Column sm={4} md={8} lg={16} >
          <Column sm={4} md={4} lg={4} style={{left:'0px', padding:'10px', width:'50%', backgroundColor:'pink', position: 'relative'}}>
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Member</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Developer</h5>
                        
                      </div>
                      <hr></hr>
                      <div style={{width:'auto',textAlign:'center', paddingBottom:'5px'}}>CIO Identity Provisioning</div>
                    </div>
                  </div>
                </div>
                
                
        </Column>
        <Column sm={4} md={4} lg={4} style={{padding:'10px', width:'50%', backgroundColor:'pink'}}>
            <div style={{ width: 'auto',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Member</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Developer</h5>
                        
                      </div>
                      <hr></hr>
                      <div style={{width:'auto',textAlign:'center', paddingBottom:'5px'}}>CIO Identity Provisioning</div>
                    </div>
                  </div>
                </div>
                
                
        </Column>

        <Column sm={4} md={4} lg={4} style={{padding:'0px'}}>
            <div style={{ width: '50%',height:'30%', backgroundColor:'blue', position: 'relative'}}>
                  <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                    <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                      <div style={{textAlign:'center', paddingTop:'0px'}}>
                      <h5 >Team Member</h5>
                      </div>
                      <hr></hr>
                      <div align='center'>
                      <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'5%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                      </div>
                      <div style={{textAlign:'center', paddingBottom:'0px'}}>
                        <h5 >Developer</h5>
                        
                      </div>
                      <hr></hr>
                      <div style={{width:'auto',textAlign:'center', paddingBottom:'5px'}}>CIO Identity Provisioning</div>
                    </div>
                  </div>
                </div>
        </Column>

</Column>
        </Grid>
        
        </Column>
        
        <Column sm={4} md={4} lg={4} >
          &nbsp;
        </Column>
        <Column sm={4} md={4} lg={4} style={{padding:'50px'}}>
          <div style={{ width: '70%',height:'100%', backgroundColor:'blue'}}>
                <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                  <div style={{padding:'0px', width: 'auto', position: 'relative', backgroundColor:'green'}} >
                    <div style={{textAlign:'center', paddingTop:'0px'}}>
                    <h5 >Team Member</h5>
                    </div>
                    <hr></hr>
                    <div align='center'>
                    <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'100%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                    </div>
                    <div style={{textAlign:'center'}}>
                      <h5 >Developer</h5>
                      <p ></p>
                    </div>
                    <hr></hr>
                    <div style={{width:'auto',textAlign:'center', paddingBottom:'5px'}}>CIO Identity Provisioning</div>
                  </div>
                </div>
              </div>
        </Column>
        <Column sm={4} md={4} lg={4} >
          &nbsp;
        </Column>
        <Column sm={4} md={4} lg={4} >
          &nbsp;
        </Column>
        <Column sm={4} md={4} lg={4} >
          &nbsp;
        </Column>
        
        
        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">
          <Grid className="portal-sub-grid" style={{padding:'50px'}}>


            <Column sm={4} md={8} lg={4} className="portal-top-grid-column" >
            <div >                
            </div>
            </Column>
            
            <Column sm={4} md={8} lg={4}  >
            <div >
                <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                  <div  >
                    <div style={{textAlign:'center', paddingTop:'15px'}}>
                    <h5 >Team Member</h5>
                    </div>
                    <hr></hr>
                    <div align='center'>
                    <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'100%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                    </div>
                    <div style={{textAlign:'center'}}>
                      <h5 >Developer</h5>
                      <p ></p>
                    </div>
                    <hr></hr>
                    <div style={{width:'auto',textAlign:'center', paddingBottom:'15px'}}>CIO Identity Provisioning</div>
                  </div>
                </div>
              </div>
            </Column>
            <Column sm={4} md={8} lg={4}  >
            <div >                
            </div>
            </Column>
            <Column sm={4} md={8} lg={4}  >
            <div >                
            </div>
            </Column>
            <Column sm={4} md={8} lg={4}  >
            <div >                
            </div>
            </Column>

            <Column sm={4} md={4} lg={4} className="portal-top-grid-column" >
            <div >
                <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                  <div  >
                    <div style={{textAlign:'center', paddingTop:'15px'}}>
                    <h5 >Team Member</h5>
                    </div>
                    <hr></hr>
                    <div align='center'>
                    <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'100%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                    </div>
                    <div style={{textAlign:'center'}}>
                      <h5 >Developer</h5>
                      <p ></p>
                    </div>
                    <hr></hr>
                    <div style={{width:'auto',textAlign:'center', paddingBottom:'15px'}}>CIO Identity Provisioning</div>
                  </div>
                </div>
              </div>
            </Column>

            <Column sm={4} md={4} lg={4} className="portal-top-grid-column">
              <div >
                <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                  <div  >
                    <div style={{textAlign:'center', paddingTop:'15px'}}>
                    <h5 >Team Member</h5>
                    </div>
                    <hr></hr>
                    <div align='center'>
                    <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'100%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                    </div>
                    <div style={{textAlign:'center'}}>
                      <h5 >Developer</h5>
                      <p ></p>
                    </div>
                    <hr></hr>
                    <div style={{width:'auto',textAlign:'center', paddingBottom:'15px'}}>CIO Identity Provisioning</div>
                  </div>
                </div>
              </div>
            </Column>

            <Column sm={4} md={4} lg={4} className="portal-top-grid-column">
            <div >
                <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                  <div  >
                    <div style={{textAlign:'center', paddingTop:'15px'}}>
                    <h5 >Team Member</h5>
                    </div>
                    <hr></hr>
                    <div align='center'>
                    <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'100%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                    </div>
                    <div style={{textAlign:'center'}}>
                      <h5 >Developer</h5>
                      <p ></p>
                    </div>
                    <hr></hr>
                    <div style={{width:'auto',textAlign:'center', paddingBottom:'15px'}}>CIO Identity Provisioning</div>
                  </div>
                </div>
              </div>
            </Column>

            <Column sm={4} md={4} lg={4} className="portal-top-grid-column">
            <div >
                <div style={{ width: 'auto', boxShadow:'5px 5px 5px 5px #888888' }}>
                  <div  >
                    <div style={{textAlign:'center', paddingTop:'15px'}}>
                    <h5 >Team Member</h5>
                    </div>
                    <hr></hr>
                    <div align='center'>
                    <img alt="template" style={{textAlign:'center', alignContent:'center', width: '50%', height:'100%', position: 'relative' }} src='/img/Vaibhav.jpg' />
                    </div>
                    <div style={{textAlign:'center'}}>
                      <h5 >Developer</h5>
                      <p ></p>
                    </div>
                    <hr></hr>
                    <div style={{width:'auto',textAlign:'center', paddingBottom:'15px'}}>CIO Identity Provisioning</div>
                  </div>
                </div>
              </div>
            </Column>
            

          </Grid>
        </Column>
         */}


        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">
        </Column>

      </Grid>
    </div>
  )
}

export default AboutUS;