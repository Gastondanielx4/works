import React from "react";
import CardMedia from "@mui/material/CardMedia";

const Photo = ({ urlImg }) => {
  return (
    <div>
      <CardMedia
        component="img"
        height="140"
        image={urlImg}
        alt="green iguana"
      />
    </div>
  );
};

export default Photo;
