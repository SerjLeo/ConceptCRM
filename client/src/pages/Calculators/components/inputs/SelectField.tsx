import React from 'react';
import {SelectCalcField} from '../../../../redux/calculator/types';
import {MenuItem, Select} from '@mui/material';
import CustomTooltip from '../../../../components/CustomTooltip/CustomTooltip';

type SelectFieldProps = {
  field: SelectCalcField
}

const SelectField: React.FC<SelectFieldProps> = ({field}) => {
  return (
    <div className="calcField">
      <Select>
        {field.variants.map(variant => <MenuItem key={variant.value} value={variant.value}>
          {variant.text}
        </MenuItem>)}
      </Select>
      <div>{field.description}</div>
      {!!field.tooltip && <CustomTooltip text={field.tooltip}/>}
    </div>
  );
};

export default SelectField;