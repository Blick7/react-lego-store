import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import classes from './FooterGroupAdaptive.module.scss';

const theme = createTheme({
  components: {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          maxWidth: '100%',
          borderRadius: '0',
          '&:before': {
            display: 'none',
          },
          '&:last-of-type': {
            borderRadius: '0',
          },
          backgroundColor: 'rgb(32, 29, 72)',
          h4: {
            color: '#fff',
            paddingBottom: '0',
          },
          svg: {
            color: '#fff',
          },
          '&:last-child': {
            borderBottom: '0.1rem solid #fff',
          },
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
          borderTop: '0.1rem solid #fff',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
  },
});

const FooterGroupAdaptive = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Accordion>
          <AccordionSummary>
            <h4>ABOUT US</h4>
          </AccordionSummary>
          <AccordionDetails>
            <ul className={classes['group-list']}>
              <li>
                <a href="/">About the LEGO Group</a>
              </li>
              <li>
                <a href="/">LEGO® News</a>
              </li>
              <li>
                <a href="/">Sustainabilityp</a>
              </li>
              <li>
                <a href="/">Supply Chain Transparency</a>
              </li>
              <li>
                <a href="/">LEGO Product Certification</a>
              </li>
              <li>
                <a href="/">LEGO Jobs</a>
              </li>
              <li>
                <a href="/">LEGO Compliance Line</a>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <h4>SUPPORT</h4>
          </AccordionSummary>
          <AccordionDetails>
            <ul className={classes['group-list']}>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Find Building Instructions</a>
              </li>
              <li>
                <a href="/">Replacement Parts</a>
              </li>
              <li>
                <a href="/">Shipping and Returns</a>
              </li>
              <li>
                <a href="/">Payment Methods</a>
              </li>
              <li>
                <a href="/">Terms &#38; Conditions</a>
              </li>
              <li>
                <a href="/">Product Recalls</a>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <h4>ATTRACTIONS</h4>
          </AccordionSummary>
          <AccordionDetails>
            <ul className={classes['group-list']}>
              <li>
                <a href="/">LEGO® House</a>
              </li>
              <li>
                <a href="/">LEGOLAND® Parks</a>
              </li>
              <li>
                <a href="/">LEGOLAND Discovery Centers</a>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <h4>MORE FROM US</h4>
          </AccordionSummary>
          <AccordionDetails>
            <ul className={classes['group-list']}>
              <li>
                <a href="/">LEGO® LIFE</a>
              </li>
              <li>
                <a href="/">LEGO Education</a>
              </li>
              <li>
                <a href="/">LEGO Ideas</a>
              </li>
              <li>
                <a href="/">LEGO Foundation</a>
              </li>
              <li>
                <a href="/">Affiliate Program</a>
              </li>
              <li>
                <a href="/">Student Offers</a>
              </li>
              <li>
                <a href="/">LEGO® Braille Bricks</a>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
};

export default FooterGroupAdaptive;
