import * as React from 'react';
import { 
  Unstable_NumberInput as BaseNumberInput, 
  numberInputClasses 
} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';

const NumberSelector = React.forwardRef(function NumberSelector(props, ref) {
  const handleChange = (event) => {
    if (props.handleChanged) {
      props.handleChanged(event.target.value); // Değişikliği üst bileşene aktar
    }

   //  console.log(`The input value is: ${event.target.value}`);
  };

  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
      }}
      slotProps={{
        input: {
          onChange: handleChange,
          placeholder: props.placeholderText, // Placeholder değerini buraya aktardık
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default NumberSelector;

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'};
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 4px;
  width: 90px;

  &.${numberInputClasses.focused} {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  &:hover {
    border-color: ${blue[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`,
);
