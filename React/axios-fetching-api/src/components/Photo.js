import React from "react";
import CardMedia from "@mui/material/CardMedia";

const Photo = ({ urlImg }) => {
  return (
    <div>
      <CardMedia component="img" height="300" image={urlImg} alt="" />
    </div>
  );
};

export default Photo;
