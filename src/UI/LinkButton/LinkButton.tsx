import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';

import classes from './LinkButton.module.scss';

const LinkButton = (props: { text: string }) => {
  return (
    <Button
      className={classes.button}
      variant="contained"
      style={{ backgroundColor: '#000' }}
    >
      {props.text} <ArrowForwardIosIcon />
    </Button>
  );
};

export default LinkButton;
