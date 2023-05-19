import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import servicesList from "./servicesList";

export const Services = () => {
  return (
    <div id="services">
      <Container>
        <div className="services-content fade-in">
          <h2>SERVICES</h2>
          <hr />
          <div>
            <br />
          </div>
          <div className="services-accordian-group">
            <GetAccordians />
          </div>
          <br />
        </div>
      </Container>
    </div>
  );
}

function titalize(str) {
  return str
    .replace(/-/g, " ")
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

export function GetAccordians() {
  let list = [];
  for (let i = 0; i < servicesList.length; i++) {
    list.push(
      <Accordion
        key={i}
        elevation={3}
        style={{ border: "1px solid rgba(0, 0, 0, .125)" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${i}a-content`}
          id={`panel${i}a-header`}
        >
          <h4>{servicesList[i].title.toUpperCase()}</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className="services-accordian-text">
            {servicesList[i].content.map((contentItem, j) => {
              return (
                <div key={`content-item-${i}-${j}`}>
                  <div>
                    {titalize(contentItem.name)} - ${contentItem.price}
                  </div>
                  {contentItem.description && (
                    <React.Fragment>
                      <div>{contentItem.description}</div>
                      {servicesList[i].content.length !== j + 1 && <br />}
                    </React.Fragment>
                  )}
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    );
  }

  return <div>{list}</div>;
}
