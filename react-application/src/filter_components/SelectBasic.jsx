import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export default function SelectBasic(props) {


  const handleChange = (event) => {
    props.handleChanged(event.target.value)

  };

  return (
    <Box >
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">{props.tag}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.element}
          label={props.tag}
          onChange={handleChange}
        >

          {props.elementList?.map((i, index) => (
            <MenuItem key={index} value={i}>
              {titleCase(i)}
            </MenuItem>
          ))}

        </Select>

        

      </FormControl>
    </Box>
  );
}
