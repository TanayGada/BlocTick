import React from 'react'
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { useState } from 'react';
const MiniNav = () => {

  const [activeLink, setActiveLink] = useState(null);

  
  const handleLinkClick = (page) => {
    setActiveLink(page);
    handleCloseNavMenu();
  };
 
   const pages = [
    "Overview",
    "Guests",
    "Registration"
  ];
  return (
    <div style={{marginTop:'20px'}}>
      <div className=" tabs   font-extrabold font-sans">
        <div className=" side-padding ">​</div>
        <div className="flex ">
          {pages.map((page) => (
            <Link
              key={page}
              to={`/manageevent/${page.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                key={page}
                variant="body1"
                onClick={() => handleLinkClick(page)}
                sx={{
                  mx: 2,
                  cursor: "pointer",
                  color: activeLink === page ? "black" : "rgb(0, 128, 96)",
                  ":hover": {
                    color: "purple",
                  },
                }}
                style={{ fontWeight: "bolder" }}
              >
                {page}
              </Typography>
            </Link>
          ))}
        </div>

        <div className=" side-padding"></div>
      </div>
    </div>
  );
}

export default MiniNav