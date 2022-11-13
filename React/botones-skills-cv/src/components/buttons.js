import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiMaterialui, SiRedux } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const BootstrapButton = styled(Button)({
  /*  marginTop: "1rem",
  marginBottom: "1rem", */
  margin: "0.5rem",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#5f5f5f",
  borderColor: "#151515",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#5f5f5f",
    borderColor: "#151515",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#5f5f5f",
    borderColor: "#151515",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function CustomizedButtons() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{
        flexWrap: "wrap",
        width: "440px",
      }}
    >
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<FaReact />}
      >
        React.js
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<SiJavascript />}
      >
        Javascript
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<FaHtml5 />}
      >
        HTML5
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<FaCss3Alt />}
      >
        CSS3
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<SiMaterialui />}
      >
        Material UI
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<FaBootstrap />}
      >
        Bootstrap
      </BootstrapButton>
      {/*  <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<FaHtml5 />}
      >
        Ajax
      </BootstrapButton> */}
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<VscJson />}
      >
        JSON
      </BootstrapButton>
      <BootstrapButton
        variant="contained"
        disableRipple
        startIcon={<SiRedux />}
        /*  style={{ marginTop: "1rem", marginBottom: "1rem" }} */
      >
        Redux
      </BootstrapButton>
    </Stack>
  );
}
