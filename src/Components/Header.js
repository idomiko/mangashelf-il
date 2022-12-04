import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        style={{ alignSelf: "center" }}
        src="https://res.cloudinary.com/dj0lobeyp/image/upload/c_scale,h_150/v1670143731/Branding/Logo_cfqrbr.webp"
        alt="Mangashelf-IL Logo"
      />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        מדף המנגה הדיגיטלי שלך
      </h2>
    </div>
  );
};

export default Header;
