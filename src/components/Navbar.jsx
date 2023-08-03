import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const links = ["Home", "New", "Popular", "Trending", "Categories"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex pt-8 sm:pt-16 items-center justify-between">
        <img src={logo} alt="logo" className="w-12 sm:w-20" />
        <ul className="hidden sm:flex gap-10">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-md text-dark-grayish-blue hover:text-soft-red"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <img
          onClick={toggleDrawer}
          src={menu}
          alt="menu"
          width={30}
          height={30}
          className="cursor-pointer block sm:hidden"
        />
      </div>
      <Drawer
        open={open}
        direction="right"
        onClose={toggleDrawer}
        className="p-6"
      >
        <div className="flex justify-end">
          {" "}
          <img
            onClick={toggleDrawer}
            src={menuClose}
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer block sm:hidden"
          />
        </div>
        <ul className="flex flex-col items-start justify-center gap-6 p-4 h-full">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-lg text-dark-grayish-blue hover:text-soft-red"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
