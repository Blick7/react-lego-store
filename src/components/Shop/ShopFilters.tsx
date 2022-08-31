import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import classes from './ShopFilters.module.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import type {} from '@mui/lab/themeAugmentation';
import FiltersAccordion from '../../UI/FiltersAccordion';

const theme = createTheme({
  components: {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          maxWidth: '18rem',
          borderTop: '0.04rem solid rgba(0, 0, 0, 0.1)',
          borderRadius: '0',
          '&:before': {
            display: 'none',
          },
          '&:last-of-type': {
            borderRadius: '0',
          },
          // ? add also first of type ?
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <ExpandMoreIcon />,
      },
      styleOverrides: {
        root: {
          fontSize: '0.9rem',
        },
      },
    },
  },
});

const filterOptions = [
  {
    title: 'PRODUCT TYPE',
    categories: [
      'Home decor',
      'Sets',
      'Adults',
      'All Ocasions',
      'Storage',
      'Kids',
    ],
  },
  {
    title: 'PRICE',
    categories: ['$0 - $25', '$25 - $50', '$50 - $75', '$100+'],
  },
  {
    title: 'THEME',
    categories: [
      'Star Wars',
      'Batman',
      'Harry Potter',
      'Jurassic Park',
      'NINJAGO',
      'Technic',
    ],
  },
  {
    title: 'AGE',
    categories: ['4+', '6+', '9+', '13+', '18+'],
  },
  {
    title: 'AVALIABILITY',
    categories: ['Avaliable Now', 'Out of Stock', 'Back Order', 'Coming Soon'],
  },
  {
    title: 'PIECE COUNT',
    categories: ['1-99', '100-249', '250-499', '500-999', '1000-1999', '2000+'],
  },
  {
    title: 'FEATURED',
    categories: ['Exclusives', 'Hard to find', 'New', 'Pre-order'],
  },
];

const ShopFilters = () => {
  return (
    <div
      style={{
        maxWidth: '18rem',
        margin: '2rem 0',
        border: '0.04rem solid rgba(0, 0, 0, 0.1)',
        borderBottom: '0.1rem solid rgba(0, 0, 0, 0.50)',
      }}
    >
      <Button
        variant="text"
        fullWidth
        disabled
        sx={{ padding: '1rem', borderRadius: '0' }}
      >
        Reset All
      </Button>
      <ThemeProvider theme={theme}>
        <FiltersAccordion options={filterOptions} />
      </ThemeProvider>
    </div>
  );
};

export default ShopFilters;
