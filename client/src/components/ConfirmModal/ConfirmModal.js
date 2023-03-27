import {
  Alert,
  Box,
  Divider,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { CONFRIM_TIMEOUT } from '../../const';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocialShare } from '../../components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FormattedMessage } from 'react-intl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = ({ open, url, title, onClose }) => {
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    let timer;
    if (openAlert) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, CONFRIM_TIMEOUT);
    }

    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          <FormattedMessage id="share_with_friends" />
        </Typography>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            mb: 2,
            mt: 3,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ 'aria-label': 'list URL' }}
            value={url}
          />

          <IconButton
            href={url}
            target="_blank"
            sx={{ p: '10px' }}
            aria-label="preivew"
          >
            <VisibilityIcon />
          </IconButton>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
            <IconButton
              color="primary"
              sx={{ p: '10px' }}
              aria-label="copy to clipboard"
            >
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>

        <Typography id="modal-modal-title" variant="h6" component="h3">
          <FormattedMessage id="share_with_friends" />
        </Typography>

        <SocialShare url={url} title={title} />

        {openAlert ? (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setOpenAlert(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mt: 2 }}
          >
            <FormattedMessage id="copied" />
          </Alert>
        ) : null}
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
