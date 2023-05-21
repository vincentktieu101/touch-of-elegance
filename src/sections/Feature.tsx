import React from "react";
import { Container } from "@mui/material";

export const Feature = () => {
  return (
    <div id="feature">
      <div className="feature-overlay" />
      <Container>
        <div className="feature-content">
          <h2 className="flex flex-col lg:flex-row" style={{ justifyContent: "center" }}>
            <div style={{ margin: "0 8px" }}>CELEBRATING</div>
            <div style={{ margin: "0 8px" }}>12 YEARS</div>
            <div style={{ margin: "0 8px" }}>OF BUSINESS</div>
          </h2>
        </div>
      </Container>
    </div>
  );
}
