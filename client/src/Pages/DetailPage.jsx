import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { getCountryByID } from "../api/requests";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

const DetailPage = () => {
  const [countries, setCountries] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getCountryByID(id).then((res) => {
      setCountries(res);
    });
  }, [id]);

  return (
    <div style={{ padding: "100px 0" }}>
      <Container>
        <Grid item xs={12} md={6} lg={3}>
          <Card key={countries.title} sx={{ maxWidth: 300, margin: "0 auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={countries.image}
                alt="employer"
              />
              <CardContent>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black" }}
                >
                  <Link
                    to={`/countries/${countries._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {countries.countryName}
                  </Link>
                </Button>
                <Typography gutterBottom variant="h5" component="div">
                  {countries.title}
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
                  {countries.desc}
                </Typography>
              </CardContent>
           
            </CardActionArea>   <Button
                variant="contained"
                style={{ margin: "5px auto", display: "flex",backgroundColor:"red" }}
              >
                Edit
              </Button>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default DetailPage;
