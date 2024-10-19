import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import TradingCurve from './components/TradingCurve'; 
import TradingRoom from './components/TradingRoom'; 
import LeftSidebar from './components/LeftSidebar'; 
import RightSidebar from './components/RightSidebar'; 
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: 2, overflowY: 'auto' }}>
          {/* Practice Account Balance */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            {/* Optional content for account balance can be added here */}
            
          </Box>

          {/* Main Graph Section */}
          <Paper sx={{ backgroundColor: '#1a1a1a', padding: 2, marginBottom: 2, flexGrow: 1 }}>
            <Typography variant="h6" align="center">
              AUD/USD (OTC)
            </Typography>
            {/* Include your TradingCurve component */}
            <Box sx={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
              <TradingRoom />
            </Box>

            {/* Time indicator and price */}
            <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
              <Grid item>
                <Typography variant="body2" color="gray">03:58</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: '#FFA500' }}>0.675965</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Trading Timer */}
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Typography variant="body2" color="gray">
              28 seconds left
            </Typography>
          </Box>
        </Box>

        {/* Right Sidebar */}
        <RightSidebar />
      </Box>
    </Box>
  );
}

export default App;
