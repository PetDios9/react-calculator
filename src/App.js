import React from 'react';
import './App.css';
import CalcContainer from './CalcContainer';
import {Grid, ThemeProvider, createMuiTheme } from '@material-ui/core'
import {grey, orange } from '@material-ui/core/colors';


function App() {

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: orange[900]
        }
    }
  })

  return (
    <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          alignContent="center"
          style={{ minHeight: '100vh' }}>
          
          <Grid item>
            <CalcContainer />
          </Grid>
          
        </Grid>
    </ThemeProvider>
  );
}

export default App;
