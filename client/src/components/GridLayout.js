import { Grid, Stack } from "@mui/material";
import React from "react";

const GridLayout = (props) => {
  const { left, right, isHome } = props;

  return (<>
    {isHome ? (
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          {left}
        </Grid>
        <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
          {right}
        </Grid>
      </Grid>
    ) : (
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {left}
        </Grid>
        <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
          {right}
        </Grid>
      </Grid>

    )}
    {/* <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {left}
      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
        {right}
      </Grid>
    </Grid> */}

  </>

  );
};

export default GridLayout;
