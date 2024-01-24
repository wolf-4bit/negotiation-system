import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

const AdditionalBar = () => {
  // Create a MUI theme with responsive font sizes
  const theme = responsiveFontSizes(createTheme());

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ width: '100vw', height: "30px", margin: 0, padding: 0, backgroundColor: "#4B0082" }}>
        <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: '5%', paddingRight: '5%' }}>
          <Typography noWrap sx={{ mt: -4, fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' }, marginRight: '4px' }}>
            Bestsellers
          </Typography>
          <Typography noWrap sx={{ mt: -4, fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' }, marginRight: '4px' }}>
            Today's Deals
          </Typography>
          <Typography noWrap sx={{ mt: -4, fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' }, marginRight: '4px' }}>
            Electronics
          </Typography>
          <Typography noWrap sx={{ mt: -4, fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' }, marginRight: '4px' }}>
            Fashion
          </Typography>
          <Typography noWrap sx={{ mt: -4, fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' }, marginRight: '4px' }}>
            New Releases
          </Typography>
          <Typography noWrap sx={{ mt: -4, fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' } }}>
            Books
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AdditionalBar;
