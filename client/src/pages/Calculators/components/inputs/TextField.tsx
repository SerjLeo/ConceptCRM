import React from 'react';
import {NumberCalcField, TextCalcField} from '../../../../redux/calculator/types';
import {TextField as MUITextField} from '@mui/material';
import CustomTooltip from '../../../../components/CustomTooltip/CustomTooltip';

type TextFieldProps = {
  field: TextCalcField | NumberCalcField
}

const TextField: React.FC<TextFieldProps> = ({field}) => {
  return (
    <div className="calcField">
      <MUITextField variant="outlined" size="small"/>
      <div>{field.description}</div>
      {!!field.tooltip && <CustomTooltip text={field.tooltip}/>}
    </div>
  );
};

export default TextField;