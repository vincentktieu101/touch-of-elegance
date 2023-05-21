import React from "react";
import { Container } from '@mui/material';
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <div id="footer">
        <Container>
          <div className="footer-content">
            <h4>© TOUCH OF ELEGANCE {new Date().getFullYear()}</h4>
            <div>
              <br />
            </div>
            <div>1846 Westwood Boulevard</div>
            <div>Los Angeles, California 90025</div>
            <div>United States</div>
          </div>
        </Container>
      </div>
    </>
  );
};
