import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { StringLiteral } from 'typescript';

type Options = {
  title: string;
  categories: string[];
}[];

interface IOptions {
  options: Options;
}

const FiltersAccordion: React.FC<IOptions> = ({ options }) => {
  return (
    <>
      {options.map((item) => {
        return (
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormGroup>
                  {item.categories.map((category) => (
                    <FormControlLabel control={<Checkbox />} label={category} />
                  ))}
                </FormGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default FiltersAccordion;
