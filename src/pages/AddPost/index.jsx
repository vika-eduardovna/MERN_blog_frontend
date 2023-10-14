import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';
import s from './AddPost.module.scss';

export const AddPost = () => {
  const imageUrl = '';
  const [value, setValue] = React.useState('');

  const handleChangeFile = () => { };

  const onClickRemoveImage = () => { };

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Enter the text...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30 }}>
      <Button variant="outlined" size="large">
        Upload preview
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Remove
        </Button>
      )}
      {imageUrl && (
        <img className={s.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
      <br />
      <br />
      <TextField
        classes={{ root: s.title }}
        variant="standard"
        placeholder="Title of an article..."
        fullWidth
      />
      <TextField classes={{ root: s.tags }} variant="standard" placeholder="Tags" fullWidth />
      <SimpleMDE className={s.editor} value={value} onChange={onChange} options={options} />
      <div className={s.buttons}>
        <Button size="large" variant="contained">
          Publish
        </Button>
        <Link to="/">
          <Button size="large">Cancel</Button>
        </Link>
      </div>
    </Paper>
  );
};
