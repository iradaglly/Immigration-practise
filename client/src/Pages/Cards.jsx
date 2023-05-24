import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { deleteCountryByID, getAllCountry } from "../api/requests";
import { Link } from "react-router-dom";

const Cards = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    getAllCountry().then((res) => {
      setCountries(res);
    });
  }, []);
  return (
    <div style={{ width: "100%", padding: "5% 0 " }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "38px" }}>Latest From Our Gallery</h1>
        <p style={{ color: "#777777" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua.
        </p>
      </div>

      <Box sx={{ flexGrow: 1, padding: "4% 0" }}>
        <Container>
          <Grid container spacing={2}>
            {countries &&
              countries.map((elem) => (
                <Grid item xs={12} md={6} lg={3}>
                  <Card key={elem.title} sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={elem.image}
                        alt="employer"
                      />
                      <CardContent>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "black" }}
                        >
                          <Link
                            to={`/countries/${elem._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {elem.countryName}
                          </Link>
                        </Button>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            margin: "20px 0",
                            color: "#777777",
                            fontSize: "15px",
                            fontWeight: "300",
                            lineHeight: "1.625em",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {elem.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>{" "}
                    <Button
                      variant="outlined"
                      color="error"
                      style={{ display: "block", margin: "10px auto" }}
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteCountryByID(elem._id).then((res) => {
                              Swal.fire(
                                `${elem.title} Deleted!`,
                                "Your artist has been deleted.",
                                "success"
                              );
                            });
                            setCountries(
                              countries.filter((x) => x._id !== elem._id)
                            );
                          }
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Cards;
