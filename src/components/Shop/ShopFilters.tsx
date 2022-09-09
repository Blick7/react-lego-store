import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

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

const filters = [
  {
    title: 'PRODUCT TYPE',
    category: 'PRODUCT_TYPE',
    options: [
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
    category: 'PRICE',
    options: ['$0 - $25', '$25 - $50', '$50 - $75', '$75 - $100', '$100+'],
  },
  {
    title: 'THEME',
    category: 'THEME',
    options: [
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
    category: 'AGE',
    options: ['4+', '6+', '9+', '13+', '18+'],
  },
  {
    title: 'AVALIABILITY',
    category: 'AVALIABILITY',
    options: ['Avaliable Now', 'Out of Stock', 'Back Order', 'Coming Soon'],
  },
  {
    title: 'PIECE COUNT',
    category: 'PIECE_COUNT',
    options: ['1-99', '100-249', '250-499', '500-999', '1000-1999', '2000+'],
  },
  {
    title: 'FEATURED',
    category: 'FEATURED',
    options: ['Exclusives', 'Hard to find', 'New', 'Pre-order'],
  },
];

const ShopFilters = () => {
  return (
    <aside
      style={{
        marginRight: '1rem',
      }}
    >
      <div
        style={{
          border: '0.04rem solid rgba(0, 0, 0, 0.1)',
          borderBottom: '0.2rem solid rgba(0, 0, 0, 0.50)',
          width: '16rem',
        }}
      >
        <Button
          variant="text"
          fullWidth
          sx={{ padding: '1rem', borderRadius: '0' }}
        >
          Reset All
        </Button>
        <ThemeProvider theme={theme}>
          <FiltersAccordion filters={filters} />
        </ThemeProvider>
      </div>
    </aside>
  );
};

export default ShopFilters;
