import React from "react";
import Container from "@mui/material/Container";

import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export function About() {
  return (
    <div id="about">
      <Container>
        <div className="flex flex-col gap-[40px] justify-between md:flex-row">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Touch+of+Elegance+nails+%26+Spa/@34.048895,-118.4363709,18.32z/data=!4m5!3m4!1s0x80c2bb9cebfea351:0x60ab60d5b27c00de!8m2!3d34.0489753!4d-118.4356852"
          >
            <img
              className="max-h-[450px]"
              alt="Search on Google Maps"
              src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en-US&region=US&markers=color:0x88b06a|34.0489753,-118.4356852&zoom=16&client=google-presto&signature=GxFlN3353Tp7i-y1PaqrYMod_xk"
            />
          </a>
          <div className="flex flex-col items-center">
            <h2>ABOUT</h2>
            <hr className="mb-[20px]" />
            <div>
              <div className="about-text">
                <h4>
                  <HomeIcon style={{ fontSize: "16px" }} /> Address
                </h4>
                <div>1846 Westwood Boulevard</div>
                <div>Los Angeles, California 90025</div>
                <div>United States</div>
              </div>
              <br />
              <div className="about-text">
                <h4>
                  <PhoneIcon style={{ fontSize: "16px" }} /> Phone
                </h4>
                <div>(310) 481-3917</div>
              </div>
              <br />
              <div className="about-text">
                <h4>
                  <QueryBuilderIcon style={{ fontSize: "16px" }} /> Business
                  Hours
                </h4>
                <div>Mon: 9:30 AM – 7:00 PM</div>
                <div>Tue: 9:30 AM – 7:00 PM</div>
                <div>Wed: 9:30 AM – 7:00 PM</div>
                <div>Thu: 9:30 AM – 7:00 PM</div>
                <div>Fri: 9:30 AM – 7:00 PM</div>
                <div>Sat: 9:30 AM – 7:00 PM</div>
                <div>Sun: 9:30 AM – 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
