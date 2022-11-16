import React, {useState} from 'react';
import {SelectCalcField} from '../../../../redux/calculator/types';
import {createTheme, MenuItem, Select, SelectChangeEvent, ThemeProvider} from '@mui/material';
import CustomTooltip from '../../../../components/CustomTooltip/CustomTooltip';
import {FieldError, UseFormRegisterReturn} from 'react-hook-form';
import styles from '../../styles/CalculatorField.module.scss'

type SelectFieldProps = {
    field: SelectCalcField
    formProps: UseFormRegisterReturn
    error: FieldError
}

const selectTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          padding: '8.5px 14px'
        },
      },
    },
  },
});

const SelectField: React.FC<SelectFieldProps> = ({field, error, formProps: {
  ref, name, onBlur, onChange
}}) => {

  const [value, setValue] = useState(field.variants[0].value)

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value)
    onChange(event)
  }

  return (
    <ThemeProvider theme={selectTheme}>
      <div className="calcField">
        <div className={styles.selectWrap}>
          <Select
            className={styles.selectInput}
            ref={ref}
            name={name}
            value={String(value)}
            onBlur={onBlur}
            error={!!error}
            onChange={handleChange}
            sx={{
              width: '100%'
            }}
          >
            {field.variants.map(variant => <MenuItem
              key={variant.value}
              value={variant.value}
            >
              {variant.text}
            </MenuItem>)}
          </Select>
          {error && error.message && <div className={styles.errorMsg}>{error.message}</div>}
        </div>
        <div>{field.description}</div>
        {!!field.tooltip && <CustomTooltip text={field.tooltip}/>}
      </div>
    </ThemeProvider>
  );
};

export default SelectField;