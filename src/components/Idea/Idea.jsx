import { Grid } from "@carbon/react";
import { Column } from "@carbon/react";
//import { Button } from "@carbon/react";
//import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { Link } from "react-router-dom";
//import { useEffect } from "react";
import React from "react";
//import { useState } from "react";
//import { getResponseFromAIBackend, getSentiment, getEmail, getSummary } from "../../js/aiCalls";
import { StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';

import "./_idea.scss";

const Idea = () => {
  // sm={4} md={8} lg={16}
  // sm = {1 to 4},  for small screen device, column span will be from 1 to 4.
  // for sm, 4 is full width and 1 is most small width for small screen device.
  // md = {1 to 8} form medium screen device, clumns span will be from 1 to 8.
  // for md, 8 is full width and 1 is most small width for small screen device.
  // lg = {16}, for small screen device, column span will be from 1 to 16.
  // for lg, 16 is full width and 1 is most small width for small screen device.
  //let tdisplay="inline-block";


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
            &nbsp;Idea
          </Breadcrumb>
        </Column>
        <Column sm={4} md={8} lg={16}>
        <br></br>
          <div style={{ fontWeight: "bold" }}>Use Cases</div>
        </Column>
        <Column sm={4} md={8} lg={16}>
          &nbsp;
        </Column>
        <Column sm={4} md={8} lg={16}>
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
                A Go-To-Market application to quickly author FAQs or prospecting guides to help with client conversations
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow tabIndex={0}>
              
              <StructuredListCell>
                A marketing application to support content creation or SEO.
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow tabIndex={0}>
              
              <StructuredListCell>
                A sales enablement assistant to quickly build documents. 
              </StructuredListCell>
            </StructuredListRow>


            <StructuredListRow tabIndex={0}>
              
              <StructuredListCell>
                A sales assistant to support response to RFIs, RFQs, etc.
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow tabIndex={0}>
              
              <StructuredListCell>
                An assistant to improve throughput in the product development lifecycle through quickly creating product requirement docs or user stories.
              </StructuredListCell>
            </StructuredListRow>

            <StructuredListRow tabIndex={0}>
              
              <StructuredListCell>
                Service Now ticket creation and self ticket resolution workflow.&nbsp;[Future Work]
              </StructuredListCell>
            </StructuredListRow>

          </StructuredListBody>
        </StructuredListWrapper>
        </Column>

        
      </Grid>
    </div>
  );
};

export default Idea;
