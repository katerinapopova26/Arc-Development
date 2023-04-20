import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useScrollTrigger,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },

  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": { backgroundColor: "transparent" },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    color: "white",
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              LinkComponent={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.logoContainer}
              disableRipple={true}
            >
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
              sx={{ "& .MuiTab-root.Mui-selected": { color: "white" } }}
            >
              <Tab
                label="Home"
                className={classes.tab}
                LinkComponent={Link}
                to="/"
              />
              <Tab
                label="Services"
                className={classes.tab}
                LinkComponent={Link}
                to="/services"
              />
              <Tab
                label="The Revolution"
                className={classes.tab}
                LinkComponent={Link}
                to="/revolution"
              />
              <Tab
                label="About Us"
                className={classes.tab}
                LinkComponent={Link}
                to="/about"
              />
              <Tab
                label="Contact Us"
                className={classes.tab}
                LinkComponent={Link}
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
