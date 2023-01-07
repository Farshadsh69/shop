import React from "react";
import useStyles from "./indexStyles";
import Link from "@mui/material/Link";
import { Grid, Typography } from "@mui/material";
import Filter from "./filter";
import ContentMain from '../../../ContentMain/index'


function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.TitleMain}>
        <Typography
          style={{ textDecoration: "none" }}
          variant="body"
          component={Link}
          href="/"
          className={classes.Typography}
          color='secondary.light'
        >
          خانه
        </Typography>
        {"|"}
        <Typography
          style={{ textDecoration: "none" }}
          variant="body"
          component={Link}
          href="/"
          className={classes.Typography}
          color='secondary.light'

        >
          محصولات
        </Typography>
      </div>
      <Grid container lg={12} className={classes.GridContainer}>
          <Grid item lg={3}>
              <Filter />
          </Grid>
          <Grid item lg={9}>
            <ContentMain />
          </Grid>

      </Grid>
    </div>
  );
}

export default Index;
