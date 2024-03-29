import { IconButton, Menu } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const CardMenu = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          right: 5,
          top: 5,
          zIndex: 2,
          background: 'rgba(255, 255, 255, .3)',
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        aria-haspopup="true"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default CardMenu;
