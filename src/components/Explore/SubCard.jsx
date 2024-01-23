import React from "react";
import Avatar from "@mui/material/Avatar";

const CustomAvatar = () => {
  return (
    <Avatar
      src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=48,height=48/calendars/ym/8be51f91-8261-46e7-aeb7-590a735542ed"
      alt="Avatar for J.P. Morgan Healthcare Conference"
      style={{
        backgroundColor: "var(--secondary-bg-color)", // Set background color
        borderRadius: "var(--border-radius)", // Set border radius
        width: "48px", // Set width
        height: "48px", // Set height
      }}
    />
  );
};

export default CustomAvatar;
