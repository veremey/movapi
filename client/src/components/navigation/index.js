import { AppBar, Box, Button, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom'
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import {useState} from 'react';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
          <ListItem disablePadding>
            <Link to='settings'>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItemButton>
            </Link>
          </ListItem>
      </List>
    </Box>
  );
  
  return (
      <Box>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          </Hidden >
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>
              Movies recommendation
            </Link>
          </Typography>
          <Box sx={{  display: { xs: 'none', lg: 'flex' } }}>
              <Link to='settings'>
                <Button
                  sx={{ my: 2, color: 'white'}}
                >
                  Settings
                </Button>
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      {list()}
    </Drawer>
    </Box>
  );
}

export default Navigation;
