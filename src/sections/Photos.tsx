import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";

import StoreView1 from 'public/store-view-1.png';
import StoreView2 from 'public/store-view-2.png';
import StoreView3 from 'public/store-view-3.png';
import StoreView4 from 'public/store-view-4.png';
import StoreView5 from 'public/store-view-5.png';
import StoreView6 from 'public/store-view-6.png';

import Menu1 from 'public/menu-1.jpg';
import Menu2 from 'public/menu-2.jpg';
import Menu3 from 'public/menu-3.jpg';
import Menu4 from 'public/menu-4.jpg';

export const Photos = () => {
  return (
    <div id="photos">
      <Container>
        <div className="photos-content">
          <h2>PHOTOS</h2>
          <hr />
          <div>
            <br />
          </div>
          <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Image
              alt="Awesome photo of the store"
              src={StoreView1}
            />
            <Image
              alt="Awesome photo of the store"
              src={StoreView2}
            />
            <Image
              alt="Awesome photo of the store"
              src={StoreView3}
            />
            <Image
              alt="Awesome photo of the store"
              src={StoreView4}
            />
            <Image
              alt="Awesome photo of the store"
              src={StoreView5}
            />
            <Image
              alt="Awesome photo of the store"
              src={StoreView6}
            />
            <Image
              alt="Awesome photo of the store"
              src={Menu1}
            />
            <Image
              alt="Awesome photo of the store"
              src={Menu2}
            />
            <Image
              alt="Awesome photo of the store"
              src={Menu3}
            />
            <Image
              alt="Awesome photo of the store"
              src={Menu4}
            />
          </div>
          <br />
        </div>
      </Container>
    </div>
  );
}
