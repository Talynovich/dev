import React from 'react';
import Header from "../header";
import Footer from "../footer";
import {Outlet} from "react-router";

const Layout = () => {
  return (
    <>
    <Header />
        <main>
          <div className="mx-auto w-full max-w-7xl px-4">
            <Outlet />
          </div>
        </main>
      <Footer />
    </>
  );
};

export default Layout;