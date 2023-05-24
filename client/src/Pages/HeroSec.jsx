import React from "react";
import style from "./style.module.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

const HeroSec = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f6214b",
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={6} md={6} lg={6}>
            <span
              style={{
                fontSize: "16px",
                color: "white",
                fontWeight: "400",
                letterSpacing: "2px",
              }}
            >
              PROCESS VISA WITHOUT WITHIN HOURS
            </span>
            <h1
              style={{
                fontSize: "60px",
                color: "white",
                fontWeight: "700",
                margin: "0",
              }}
            >
              Immigrations & <br />
              Visa Consultation
            </h1>

            <Button
              style={{
                display: "block",
                marginTop: "15px",
                color: "black",
                backgroundColor: "white",
              }}
              variant="contained"
            >
              Book Consultancy
            </Button>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <div
              style={{ width: "850px", height: "800px" }}
              className={style.home}
            ></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSec;
