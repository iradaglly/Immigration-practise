import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", position: "fixed", zIndex: 999 }}
      >
        <Toolbar>
          <div
            style={{ display: "flex", alignItems: "center", margin: "0 auto" }}
          >
            <div>
              <Typography
                style={{
                  margin: "15px  130px",
                  color: "black",
                  fontWeight: "700",
                }}
              >
                We believe we helps people <br /> for happier lives
              </Typography>
            </div>
            <div>
              <img
                style={{ margin: "15px 130px" }}
                src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp"
                alt="logo"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  marginLeft: "15px ",
                  color: "black",
                  fontWeight: "700",
                }}
              >
                +880 123 12 658 439{" "}
              </p>{" "}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  border: "1px solid red",
                  marginLeft: "15px",
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocalPhoneIcon style={{ color: "white" }} />
              </div>
            </div>
          </div>
          <div>
            <Button>
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                to="/"
              >
                Home
              </Link>
            </Button>
            <Button>
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                to="/add"
              >
                Add{" "}
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
