import React from "react";
import Photo from "./Photo";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

const Cards = ({ name, email, urlImg }) => {
  const CustomizedButton = styled(Button)`
    background-color: #752c45;
    margin-right: 1rem;
  `;
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Photo urlImg={urlImg} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <CustomizedButton size="medium" color="primary">
            <b>Send email</b>
          </CustomizedButton>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
