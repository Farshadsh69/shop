import React from "react";
import useStyles from "./masterLayoutStyles";
import TopHeather from "../components/topheather/index";
import DesktopMenu from "../components/menu/desktopMenu/index";
import { Container, Hidden } from "@mui/material";
import Footer from "../components/Footer/index";
import Mobile from "../components/menu/mobileMenu/index";
function MasterLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopHeather />
      <Container maxWidth="lg">
        <Hidden lgDown>
          <DesktopMenu />
        </Hidden>
        <Hidden smUp>
          <Mobile />
        </Hidden>
      </Container>
      <Footer />
    </div>
  );
}
export default MasterLayout;
