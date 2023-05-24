import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "120px 0",
        bottom: 0,

      }}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} md={3} lg={3}>
              <h3>About US</h3>
              <p style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <h3>Contact Us</h3>
              <span style={{ color: "gray", fontWeight: "300" }}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipisicing elit, sed do eiusmod tempor incididunt <br />
                ut labore dolore magna aliqua.
              </span>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "25px",
                  margin: "0",
                }}
              >
                012-6532-568-9746
              </p>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "25px",
                  margin: "0",
                }}
              >
                012-6532-569-9748
              </p>
            </Grid>

            <Grid item xs={3} md={3} lg={3}>
              <h3>Newsletter</h3>

              <input
                type="text"
                placeholder="Enter Email"
                style={{
                  width: "300px",
                  height: "30px",
                  borderRadius: "30px",
                  margin: "3% 0",
                  fontSize: "15px",
                }}
              />
              
            </Grid>
            <Grid item xs={8} md={8} lg={8}>
              <span style={{ color: "gray" }}>
                Copyright ©2023 All rights reserved This template is made with
                by Colorlib
              </span>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
