"use client";
import React, { useEffect } from "react";

import "../index.css";
import { Layout } from "../components/Layout";
import { Cover } from "../sections/Cover";
import { About } from "../sections/About";
import { Photos } from "../sections/Photos";
import { Services } from "../sections/Services";
import { Feature } from "../sections/Feature";
import { Reviews } from "../sections/Reviews";

const Page = () => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.4,
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);
    faders.forEach((faders) => {
      appearOnScroll.observe(faders);
    });
  }, []);

  return (
    <>
      <Layout>
        <Cover />
        <About />
        <Photos />
        <Services />
        <Feature />
        <Reviews />
      </Layout>
    </>
  );
}

export default Page;