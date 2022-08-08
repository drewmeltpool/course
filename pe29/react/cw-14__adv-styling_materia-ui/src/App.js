import React, {useCallback, useEffect, useMemo, useReducer, useState} from "react";

import {Grid, Drawer, Box, makeStyles} from "@material-ui/core";

import classes from "./App.module.scss";
import styled from "styled-components";
import Button from "./components/Button";
import {Title} from "./components/typography";

const useStyles = makeStyles(theme => ({
  gogi: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.error.light
  }
}));

function App() {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  console.log('classes', classes);
  const handleDrawerToggle = () => {
    setOpen(!open)
  };

  return (<>
    <Box>
      <Drawer onClose={handleDrawerToggle} open={open} anchor='right'>
        <Title className={classes.myStylesAreBetter}>Dedicated to Konstantin</Title>
      </Drawer>
    </Box>
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Title className={[classes.myStylesAreBetter, classes.gogi].join(' ')}>Dedicated to Konstantin</Title>
      </Grid>
      <Grid item xs={4}>
        <GogiTitle>gogi</GogiTitle>
        <Button Component='a' color='aqua' onClick={handleDrawerToggle}>Gogi button</Button>
      </Grid>
    </Grid></>);
}

export default App;

const GogiTitle = styled.p`
color: red;
`;
