import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

import { LOCALES } from '../../const';

import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useContext, useCallback } from 'react';
import { AppContext } from '../../context/appContext';

function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  }, []);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <Link component={RouterLink} to="/settings">
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
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
          </Hidden>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} to="/" sx={{ color: '#fff' }}>
              Movies recommendation
            </Link>
          </Typography>
          <Box>
            {state.locale}
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              sx={{ my: 2, color: 'white' }}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              ENGLISH
            </Button>

            <Button
              disabled={state.locale === LOCALES.UKRANIAN}
              sx={{ my: 2, color: 'white' }}
              onClick={() => setLanguage(LOCALES.UKRANIAN)}
            >
              Українська
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Link component={RouterLink} to="/settings" sx={{ color: '#fff' }}>
              <Button sx={{ my: 2, color: 'white' }}>Settings</Button>
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
