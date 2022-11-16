import React, {useEffect, useState} from 'react';
import {CalcField, Calculator} from '../../../redux/calculator/types';
import styles from '../../../assets/styles/Pages/Calculator.module.scss';
import SelectField from './inputs/SelectField'
import TextField from './inputs/TextField'
import { useParams } from 'react-router-dom';
import {CalcList} from '../entities/constants';
import {IconMap} from '../entities/constants';
import useActions from '../../../hooks/useActions';
import {Button} from '@mui/material';
import { useForm } from 'react-hook-form';

const CalculatorPage = () => {
  const { getResult } = useActions()
  const { calc_id } = useParams()
  const [calc, setCalc] = useState<Calculator | null>(CalcList.find(calc => calc.link === calc_id) || null)

  const {register, formState: { errors }, reset, handleSubmit} = useForm()

  useEffect(() => {
    const targetCalc = CalcList.find(calc => calc.link === calc_id)
    setCalc(targetCalc || null)
    reset()
  }, [calc_id])

  const submit = (form: Record<string, unknown>): void => {
    getResult(form, calc ? calc.link : '')
  }

  const getFieldComponent = (field: CalcField) => {
    const fieldsMap = {
      select: SelectField,
      number: TextField,
      text: TextField
    }

    return fieldsMap[field.type]
  }

  if(!calc) return null;

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={styles.calcHeader}>
        <div className="pageTitleWrap">
          {React.createElement(IconMap[calc.icon])}
          <h1 className="pageTitle">{calc.title}</h1>
        </div>
        <Button type="submit">Расчитать</Button>
      </div>
      <div className={styles.calcGroups}>
        {
          calc.groups.map(group => <div key={group.id} className={styles.calcGroup}>
            <div className={styles.calcGroupTitle}>{group.title}</div>
            <div className={styles.calcGroupFields}>
              {
                group.fields.map(field => React.createElement(getFieldComponent(field) as any, {
                  field,
                  key: field.name,
                  formProps: {
                    ...register(field.name, {
                      required: {
                        value: true,
                        message: 'Необходимо заполнить поле'
                      },
                      valueAsNumber: true,
                      setValueAs: (v) => isNaN(Number(v)) ? 0 : Number(v)
                    }),
                  },
                  error: errors[field.name]
                }))
              }
            </div>
          </div>)
        }
      </div>
    </form>
  );
};

export default CalculatorPage;