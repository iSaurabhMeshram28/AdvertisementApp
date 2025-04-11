import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import {  Link, useLocation } from "react-router-dom";



const Navbar = () => {
  const location = useLocation();

  const isActive = (pathname: string) => pathname === location.pathname;

  return (
    <AppBar position="static" style={{ background: "white" }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ color: "black", fontWeight: "bold", fontFamily: 'Adobe Clean, sans-serif' }}>
          APP LOGO
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to="/"
            style={{
              color: isActive("/dashboard") ? "black" : "black",
              fontWeight: "bold",
              fontFamily: 'Adobe Clean, sans-serif',
            }}
            //startIcon={<HomeIcon />}
          >
            DASHBOARD
          </Button>
          <Button
            component={Link}
            to="/create-ads"
            style={{
              color: isActive("/create-ads") ? "black" : "black",
              fontWeight: "bold",
              fontFamily: 'Adobe Clean, sans-serif',
            }}
            //startIcon={<AddIcon />}
          >
            CREATE ADS
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
