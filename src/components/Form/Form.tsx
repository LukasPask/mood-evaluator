import React, { useState } from 'react';

import moodData from '../../data/moodButtonsData.json';
import MoodButton from './MoodButton';
import './Form.scss';
import { Button, TextField } from '@mui/material';

const Form = () => {
  const [formData, setFormData] = useState({ moodValue: 0, comment: '' });
  console.log(formData);
  return (
    <div className='form'>
      <div className='form-mood-buttons'>
        {moodData.map(({ moodValue }) => (
          <MoodButton {...{ moodValue, setFormData }} />
        ))}
      </div>
      <div className='form-comment'>
        <TextField
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              comment: e.target.value,
            }))
          }
          fullWidth
          label='Comment'
        />
        <Button sx={{ marginTop: '0.5rem' }} variant='contained'>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
