import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const RightSidebar = () => {
  const [amount, setAmount] = useState(0); // State to manage the amount
  const [expiration, setExpiration] = useState(0); // State to manage the expiration

  // Function to handle amount increment
  const incrementAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  // Function to handle amount decrement
  const decrementAmount = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 1, 0)); // Prevent negative amounts
  };

  // Function to handle expiration increment
  const incrementExpiration = () => {
    setExpiration((prevExpiration) => prevExpiration + 1);
  };

  // Function to handle expiration decrement
  const decrementExpiration = () => {
    setExpiration((prevExpiration) => Math.max(prevExpiration - 1, 0)); // Prevent negative expiration
  };

  return (
    <Box
      sx={{
        width: 200, // Adjusted width
        backgroundColor: '#212121',
        color: '#fff',
        padding: 2,
        height: '100vh',
        position: 'fixed', // Fixed position for the sidebar
        right: 0, // Position on the right
        top: 50,
      }}
    >

      {/* Amount Selection Card */}
      <Card sx={{ backgroundColor: '#323232', marginBottom: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" align="center" sx={{ marginBottom: 2 }}>
            Amount: {amount}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={incrementAmount}
                sx={{ height: '60px', fontSize: '1.2rem' }}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={decrementAmount}
                sx={{ height: '60px', fontSize: '1.2rem' }}
              >
                -
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Expiration Selection Card */}
      <Card sx={{ backgroundColor: '#323232', marginBottom: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" align="center" sx={{ marginBottom: 2 }}>
            Expiration: {expiration}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={incrementExpiration}
                sx={{ height: '60px', fontSize: '1.2rem' }}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={decrementExpiration}
                sx={{ height: '60px', fontSize: '1.2rem' }}
              >
                -
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Benefits Section Card */}
      <Card sx={{ backgroundColor: '#323232', marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
            Benefits
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ color: '#76ff03' }}>
            +21%
          </Typography>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            startIcon={<ArrowDownwardIcon />}
          >
            LOWER
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            startIcon={<ArrowUpwardIcon />}
          >
            HIGHER
          </Button>
        </Grid>
      </Grid>

    </Box>
  );
};

export default RightSidebar;
