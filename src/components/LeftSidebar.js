import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; // Icon for Total Portfolio
import HistoryIcon from '@mui/icons-material/History'; // Icon for Trading History
import ChatIcon from '@mui/icons-material/Chat'; // Icon for Chat Support
import LeaderboardIcon from '@mui/icons-material/Leaderboard'; // Icon for Leaderboard
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Icon for Promotions
import BarChartIcon from '@mui/icons-material/BarChart'; // Icon for Market Analysis
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // Icon for Plus (...)

const LeftSidebar = () => {
  return (
    <Box
      sx={{
        width: 120, // Sidebar width
        backgroundColor: '#212121',
        color: '#fff',
        padding: 1,
        
        position: 'fixed', // Fixed position for the sidebar
        left: 0, // Position on the left
        top: 50,
      }}
    >
      {/* Total Portfolio Section */}
      <List>
        <ListItem>
          <AccountBalanceWalletIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Smaller icon */}
        </ListItem>
        <ListItemText
          primary={
            <Typography variant="caption" color="#fff" sx={{ fontSize: 9, lineHeight: '1.2' }}> {/* Smaller text */}
              PORTEFEUILLE TOTALE
            </Typography>
          }
        />
      </List>

      {/* Trading History Section */}
      <List>
        <ListItem>
          <HistoryIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Smaller icon */}
        </ListItem>
        <ListItemText
          primary={
            <Typography variant="caption" color="#fff" sx={{ fontSize: 10, lineHeight: '1.2' }}> {/* Smaller text */}
              HISTORIQUE DE TRADING
            </Typography>
          }
        />
      </List>

      {/* Chat Support Section */}
      <List>
        <ListItem>
          <ChatIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Smaller icon */}
        </ListItem>
        <ListItemText
          primary={
            <Typography variant="caption" color="#fff" sx={{ fontSize: 10, lineHeight: '1.2' }}> {/* Smaller text */}
              SUPPORT CHAT
            </Typography>
          }
        />
      </List>

      {/* Leaderboard Section */}
      <List>
        <ListItem>
          <LeaderboardIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Smaller icon */}
        </ListItem>
        <ListItemText
          primary={
            <Typography variant="caption" color="#fff" sx={{ fontSize: 10, lineHeight: '1.2' }}> {/* Smaller text */}
              TABLEAU DES LEADRES
            </Typography>
          }
        />
      </List>

      {/* Promotions Section */}
      <List>
        <ListItem>
          <LocalOfferIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Smaller icon */}
        </ListItem>
        <ListItemText
          primary={
            <Typography variant="caption" color="#fff" sx={{ fontSize: 10, lineHeight: '1.2' }}> {/* Smaller text */}
              PROMOTIONS
            </Typography>
          }
        />
      </List>

      {/* Market Analysis Section */}
      <List>
        <ListItem>
          <BarChartIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Smaller icon */}
        </ListItem>
        <ListItemText
          primary={
            <Typography variant="caption" color="#fff" sx={{ fontSize: 10, lineHeight: '1.2' }}> {/* Smaller text */}
              ANALYSE DE MARCHÉ
            </Typography>
          }
        />
      </List>

      {/* Plus Section */}
      <List>
        <ListItem>
          <MoreHorizIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Icon for Plus (...) */}
        </ListItem>
        <ListItemText
          primary={
            <Typography variant="caption" color="#fff" sx={{ fontSize: 12, lineHeight: '1.2' }}> {/* Smaller text */}
                  PLUS
            </Typography>
          }
        />
      </List>
    </Box>
  );
};

export default LeftSidebar;
