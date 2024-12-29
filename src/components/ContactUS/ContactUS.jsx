//import React from 'react';
import { Grid } from '@carbon/react';
import { Column } from '@carbon/react';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from 'react-router-dom';
import { StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';


import './_contactus.scss'

const ContactUS = () => {

  // sm={4} md={8} lg={16}
  // sm = {1 to 4},  for small screen device, column span will be from 1 to 4.
  // for sm, 4 is full width and 1 is most small width for small screen device.
  // md = {1 to 8} form medium screen device, clumns span will be from 1 to 8.
  // for md, 8 is full width and 1 is most small width for small screen device.
  // lg = {16}, for small screen device, column span will be from 1 to 16.
  // for lg, 16 is full width and 1 is most small width for small screen device.
  //let tdisplay="inline-block";


  // Start Soft segmentation for IBM and Kyndryl Use
  //window.user.preferred_username = "xyz@ocean.ibm.com"


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
            </BreadcrumbItem> &nbsp;Contact US
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
          &nbsp;
        </Column>
        {/* 
        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">
          <Grid className="portal-sub-grid">

            <Column sm={4} md={4} lg={8} className="portal-top-grid-column">

              <div >
                <div class="card border-success mb-3" >
                  <div class="card-header bg-transparent border-success">Team Name: WatsonX Idea Generator</div>
                  <div class="card-footer bg-transparent ">Domain: CIO Identity</div>
                  <div class="card-footer bg-transparent border-success">Country: India</div>
                  <div class="card-footer bg-transparent border-success">City: Bangalore</div>
                  <div class="card-footer bg-transparent border-success">State: Karnataka</div>
                  <div class="card-footer bg-transparent border-success">Email: vrangare@in.ibm.com</div>

                </div>
              </div>

            </Column>





          </Grid>
        </Column>
        */}

        <Column sm={4} md={8} lg={16} className="portal-top-list-grid-column">

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
                  AI Trenders
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow tabIndex={0}>
                <StructuredListCell>
                  Domian
                </StructuredListCell>
                <StructuredListCell>
                  CIO Identity India
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow tabIndex={0}>
                <StructuredListCell>
                Country
                </StructuredListCell>
                <StructuredListCell>
                  India
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow tabIndex={0}>
                <StructuredListCell>
                City
                </StructuredListCell>
                <StructuredListCell>
                  Bangalore
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow tabIndex={0}>
                <StructuredListCell>
                State
                </StructuredListCell>
                <StructuredListCell>
                  Karnataka
                </StructuredListCell>
              </StructuredListRow>

              <StructuredListRow tabIndex={0}>
                <StructuredListCell>
                Email
                </StructuredListCell>
                <StructuredListCell>
                vinsreer@in.ibm.com,
                rashminaik11@in.ibm.com, 
                aparthik@in.ibm.com,
                vrangare@in.ibm.com, 
                sowmya.b3@ibm.com, 
                vinothkumar.arumugam@ibm.com,
                s.ramesh@ibm.com,
                lavanyama@in.ibm.com,
                kanchan-badhe@ibm.com,
                skalwako@in.ibm.com

                </StructuredListCell>
              </StructuredListRow>

            </StructuredListBody>

          </StructuredListWrapper>

        </Column>


      </Grid>



    </div>


  )
}

export default ContactUS;