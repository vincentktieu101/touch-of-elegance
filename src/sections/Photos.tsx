import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";

import StoreView1 from 'public/store-view-1.jpg';
import StoreView2 from 'public/store-view-2.jpg';
import StoreView3 from 'public/store-view-3.jpg';
import StoreView4 from 'public/store-view-4.jpg';
import StoreView5 from 'public/store-view-5.jpg';
import StoreView6 from 'public/store-view-6.jpg';

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
              src={StoreView1}
              alt="Awesome photo of the store"
            />
            <Image
              src={StoreView2}
              alt="Awesome photo of the store"
            />
            <Image
              src={StoreView3}
              alt="Awesome photo of the store"
            />
            <Image
              src={StoreView4}
              alt="Awesome photo of the store"
            />
            <Image
              src={StoreView5}
              alt="Awesome photo of the store"
            />
            <Image
              src={StoreView6}
              alt="Awesome photo of the store"
            />
            <Image
              src={Menu1}
              onClick={()=> window.open("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-1.a339c9a5.jpg&w=3840&q=75", "_blank")}
              alt="Menu 1"
            />
            <Image
              src={Menu2}
              onClick={()=> window.open("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-2.b5180653.jpg&w=3840&q=75", "_blank")}
              alt="Menu 2"
            />
            <Image
              src={Menu3}
              onClick={()=> window.open("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-3.c453d8ae.jpg&w=3840&q=75", "_blank")}
              alt="Menu 3"
            />
            <Image
              src={Menu4}
              onClick={()=> window.open("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu-4.2de990c5.jpg&w=3840&q=75", "_blank")}
              alt="Menu 4"
            />
          </div>
          <br />
        </div>
      </Container>
    </div>
  );
}
