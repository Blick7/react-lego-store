import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, removeFilter } from '../store/filter/filterSlice';
import { RootState } from '../store/store';

type Options = {
  title: string;
  category: string;
  options: string[];
}[];

interface IProps {
  filters: Options;
}

const FiltersAccordion: React.FC<IProps> = ({ filters }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const filterStore = useSelector((state: RootState) => state.filter);

  const isChecked = (option: string, category: string): boolean => {
    if (filterStore.categories[category].includes(option)) return true;

    return false;
  };

  return (
    <>
      {filters.map((item) => {
        return (
          <Accordion key={item.title}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormGroup>
                  {item.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox checked={isChecked(option, item.category)} />
                      }
                      label={option}
                      id={option}
                      onChange={(event) => {
                        setIsActive((prevValue) => !prevValue);
                        let target = event.target as HTMLInputElement;
                        const category = item.category;
                        if (target.checked) {
                          dispatch(setFilter({ option, category }));
                        } else {
                          dispatch(removeFilter({ option, category }));
                        }
                      }}
                    />
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
