import React from 'react';
import {NumberCalcField, TextCalcField} from '../../../../redux/calculator/types';
import {TextField as MUITextField} from '@mui/material';
import CustomTooltip from '../../../../components/CustomTooltip/CustomTooltip';
import {FieldError,UseFormRegisterReturn} from 'react-hook-form';

type TextFieldProps = {
    field: TextCalcField | NumberCalcField
    error: FieldError
    formProps: UseFormRegisterReturn
}

const TextField: React.FC<TextFieldProps> = ({field, error, formProps}) => {
  return (
    <div className="calcField">
      <MUITextField
        variant="outlined"
        size="small"
        name={formProps.name}
        inputRef={formProps.ref}
        onChange={formProps.onChange}
        onBlur={formProps.onBlur}
        error={!!error}
        helperText={error && error.message}
      />
      <div className="calcFieldDescription">{field.description}</div>
      {!!field.tooltip && <CustomTooltip text={field.tooltip}/>}
    </div>
  );
};

export default TextField;