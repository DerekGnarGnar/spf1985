import Link from "next/link";
import React, { useEffect, useState } from "react";


import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setPageScroll(true);
    } else {
      setPageScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>window.removeEventListener("scroll", handleScroll);
  }, []);

  /*const links = [
    {
    
    
      id: 1,
      link: "shows",
    },
    {
      id: 2,
      link: "merch",
    },
   
    {
      id: 3,
      link: "contact",
    },
  ];*/

  const Links = [

    {
    name:"Shows",
    path:'/shows/'
    }
    , 
    {
      name:"Merch",
      path:"https://spf1985.bandcamp.com/merch"
    },
    {
      name:"Contact",
      path:"/contact"
    }
    ];

  return (
    <div
      className={`w-full h-20 z-10 fixed duration-300 ease-in ${
        pageScroll ? "bg-white text-[#252525]" :  " bg-transparent text-white" }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider cursor-pointer">
            SPF 1985
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {Links.map(({ name, path }) => (
              <Link key={name} href={`${path}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {name}
                </li>
              </Link>
            ))}
          </ul>

          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer"
                >
                  SPF 1985
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {Links.map(({ name, path }) => (
                <Link key={name} href={`${path}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {name}
                  </li>
                </Link>
              ))}
            </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaInstagram size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
                
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaSpotify size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;