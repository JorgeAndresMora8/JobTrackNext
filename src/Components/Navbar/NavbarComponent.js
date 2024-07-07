"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NavbarComponent = () => {

  const [isOpen, setIsOpen] = useState(false); 

  

  function getMenuClass(){ 
    let menuClasses = []

    if(isOpen){ 
      menuClasses = [ 
        "flex", 
        "absolute", 
        "top-[60px]", 
        "bg-[#090921]", 
        "w-full", 
        "flex-col",
        "p-4",
        "left-0", 
        "gap-4",
        "fixed"
      ]
    }else{ 
      menuClasses = [ 
        "hidden", "md:flex"
      ]
    }

    return menuClasses.join(" ")

  }

  return (
    <nav className="bg-[#090921] text-white p-4 sm:p-6 md:flex md:justify-between md:items-center" style={{position: "fixed", width: "100%"}}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="">
          <img style={{ width: "120px" }} src="/whiteLogoJobTrack.png" />
        </a>
        <div className={getMenuClass()}>
          <Link href="/" style={{fontFamily: "poppins"}} className="mx-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/about-us" style={{fontFamily: "poppins"}} className="mx-2 hover:text-gray-300">
            About Us
          </Link>
          <Link href="/jobs" style={{fontFamily: "poppins"}} className="mx-2 hover:text-gray-300">
            Jobs
          </Link>
          <Link href="/contact" style={{fontFamily: "poppins"}} className="mx-2 hover:text-gray-300">
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => { 
              setIsOpen(!isOpen)
          }}>
            { isOpen ? <FontAwesomeIcon style={{color: "#fff"}} icon={faX}/> : <FontAwesomeIcon style={{color: "#fff"}} icon={faBars} /> }


          </button>


        </div>
      </div>
    </nav>
  );
};
