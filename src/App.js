import React from 'react';
import './App.css';
import CalcContainer from './CalcContainer';
import {Grid, ThemeProvider, createMuiTheme, MuiThemeProvider, CssBaseline, Typography,} from '@material-ui/core'
import {grey, indigo, orange } from '@material-ui/core/colors';


function App() {

  const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "#333"
      },
      text: {
        primary: "#ffffff"
      }
    }
  })

  const theme = createMuiTheme({
    palette: {
      background: {
        default: indigo
      },
      primary: {
          main: grey[800],
      },
      secondary: {
          main: orange[900]
      }
    }
  })

  return (
    <div style={{padding: 30}}>
      <MuiThemeProvider theme={themeDark}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Grid
              container
              spacing={8}
              direction="column"
              justify="center"
              alignContent="center"
              alignItems="center"
              style={{ minHeight: '100vh'}}
              >

              <Grid item xs={12} >
                <Typography variant="h2">React Calculator!</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant={"h6"} align="center">
                  This is my first time using both React and Material UI to create
                  an application. Although it took me longer than I expected and I plan on further
                  improving this app, I am looking forward to further improving my skills with both
                  frameworks on my journey to becoming a Web Developer.
                </Typography>
              </Grid>
          
              <Grid item xs={12}>
                <CalcContainer />
              </Grid>

              <Grid item xs={12}>
                <Typography variant={"h6"}>
                  Created By: Peter Diosdado
                </Typography>
              </Grid>
          
            </Grid>
          </ ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
