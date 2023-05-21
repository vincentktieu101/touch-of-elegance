import React from "react";
import { Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const Reviews = () => {
  return (
    <div id="reviews">
      <Container>
        <div className="reviews-content">
          <h2>REVIEWS</h2>
          <hr />
          <div>
            <br />
          </div>
          <div className="flex-row">
            <div className="flex-col review-box">
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <br />
                <div className="text-secondary">one year ago</div>
                <br />
              </div>
              <br />
              <div className="review-text">
                "This place is awesome for manicures and pedicures...what are
                you waiting for?!! Excellent service and highly recommended!"
              </div>
              <br />
              <h4>David C</h4>
              <br />
              <hr />
              <br />
            </div>
            <div className="flex-col review-box">
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <br />
                <div className="text-secondary">one year ago</div>
                <br />
              </div>
              <br />
              <div className="review-text">
                "Always a great job on my toes and fingers!!! ❤"
              </div>
              <br />
              <h4>Darlene G</h4>
              <br />
              <hr />
              <br />
            </div>
            <div className="flex-col review-box">
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <br />
                <div className="text-secondary">4 years ago</div>
                <br />
              </div>
              <br />
              <div className="review-text">
                "I've been going here since the beginning of 2017. Ava is the
                woman who does my acrylic nails and I can't recommend her
                enough. When I brought my mother here, she got her acrylic nails
                done with Ava's husband Tony. We are regular customers due to
                their kindness, service, speed, and the quality results. The
                inside is nice and there are plenty of seats for gel, regular,
                acrylic, pedicure, and they have nice massage chairs too.
                Definitely worth stopping by and checking them out. Also, cash
                is the way to tip here because they don't do tips on cards."
              </div>
              <br />
              <h4>Brigette</h4>
              <br />
              <hr />
              <br />
            </div>
          </div>
          <div>
            <br />
          </div>
          <a href="https://www.google.com/search?hl=en-US&gl=us&q=Touch+of+Elegance+nails+%26+Spa,+1846+Westwood+Blvd,+Los+Angeles,+CA+90025&ludocid=6965767719597375710&lsig=AB86z5VILFIZw9r4QFSgNVZuwSwb#lrd=0x80c2bb9cebfea351:0x60ab60d5b27c00de,1">
            <div>Write a Review / Read More</div>
          </a>
          <br />
        </div>
      </Container>
    </div>
  );
}
