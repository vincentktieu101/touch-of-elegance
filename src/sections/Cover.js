import React from "react";
import Image from "next/image";
import { Container } from "@mui/material";
import Logo from "public/Logo.png";

export const Cover = () => {
  return (
    <div id="cover" className="fade-in">
      <Image src={Logo} className="cover-logo" alt="cover" />
      <Container>
        <div className="cover-content">
          <div className="cover-text">
            <h4 className="cover-brand">
              <div className="cover-brand-one">TOUCH OF ELEGANCE</div>
              <div className="cover-brand-two">NAILS AND SPA</div>
              <div className="cover-brand-three">
                1846 Westwood Boulevard, Los Angeles, CA
              </div>
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
}
