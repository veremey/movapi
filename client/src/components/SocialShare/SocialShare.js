import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

import { SOCIAL_BUTTON_SIZE } from '../../const';
import Stack from '@mui/material/Stack';

const SocialShare = ({ url, title }) => (
  <Stack direction="row" spacing={1}>
    <FacebookShareButton url={url}>
      <FacebookIcon round size={SOCIAL_BUTTON_SIZE} />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={SOCIAL_BUTTON_SIZE} round />
    </TwitterShareButton>
  </Stack>
);

export default SocialShare;
