// src/Sidebar.js
import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#212121',
        color: '#fff',
        padding: 2,
        height: '100vh',
        position: 'fixed', // Fixed position for the sidebar
        right: 0, // Position on the right
        top: 0,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Menu
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
      <Button variant="contained" color="success" fullWidth>
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
