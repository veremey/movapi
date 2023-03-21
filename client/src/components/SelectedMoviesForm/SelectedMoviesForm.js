import { Divider, InputBase, Paper } from '@mui/material';
import { Field, Form } from 'react-final-form';

import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';

const SelectedMoviesForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={(values) => {
      const errors = {};

      if (!values.listName) {
        errors.listName = 'Required';
      }

      return errors;
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
        >
          <Field
            name="listName"
            render={({ input, meta }) => (
              <>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Put the list name"
                  inputProps={{ 'aria-label': 'put list name' }}
                  {...input}
                />
              </>
            )}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="submit"
            color="primary"
            sx={{ p: '10px' }}
            aria-label="directions"
          >
            <CheckIcon />
          </IconButton>
        </Paper>
      </form>
    )}
  />
);

export default SelectedMoviesForm;
