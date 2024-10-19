import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import GridViewIcon from '@mui/icons-material/GridView'; // For the grid button

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121', color: '#fff' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side - Logo and Options */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            {/* Add your logo here */}
            <img src="/path_to_logo.png" alt="Logo" height="30" />
         
          </Typography>

          {/* Grid View Button */}
          <IconButton sx={{ color: '#fff' }}>
            <GridViewIcon />
          </IconButton>

          {/* Options for assets (like Litecoin and Bitcoin) */}
          <Box sx={{ display: 'flex', ml: 2 }}>
            <Button sx={{ color: '#fff', mr: 1 }} variant="outlined">
              Litecoin (OTC)
            </Button>
            <Button sx={{ color: '#fff', mr: 1 }} variant="outlined">
              Bitcoin
            </Button>

            {/* Add Icon */}
            <IconButton sx={{ color: '#fff' }}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Right Side - User Profile and Balance */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* User Icon */}
          <IconButton sx={{ color: '#fff' }}>
            <AccountCircleIcon />
          </IconButton>

          {/* Balance */}
          <Typography variant="h6" sx={{ ml: 1, mr: 2 }}>
            $10,000.00
          </Typography>

          {/* Deposit Button */}
          <Button variant="contained" sx={{ backgroundColor: '#4CAF50', color: '#fff' }}>
            Dépôt
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
