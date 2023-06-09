"use client";
import React, { useEffect } from "react";

import "../index.css";
import { Layout } from "../components/Layout";
import { Cover } from "../sections/Cover";
import { About } from "../sections/About";
import { Photos } from "../sections/Photos";
// import { Services } from "../sections/Services";
import { Feature } from "../sections/Feature";
import { Reviews } from "../sections/Reviews";

const Page = () => {
  return (
    <>
      <Layout>
        <Cover />
        <About />
        <Photos />
        {/* <Services /> */}
        <Feature />
        <Reviews />
      </Layout>
    </>
  );
}

export default Page;