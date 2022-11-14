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

const CalculatorPage = () => {
  const {getResult} = useActions()
  const [calc, setCalc] = useState<Calculator | null>(null)
  const { calc_id } = useParams();

  useEffect(() => {
    const targetCalc = CalcList.find(calc => calc.link === calc_id)
    setCalc(targetCalc || null)
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
    <div>
      <div className={styles.calcHeader}>
        <div className="pageTitleWrap">
          {React.createElement(IconMap[calc.icon])}
          <h1 className="pageTitle">{calc.title}</h1>
        </div>
        <Button onClick={() => submit({})}>Расчитать</Button>
      </div>
      <div className={styles.calcGroups}>
        {
          calc.groups.map(group => <div className={styles.calcGroup}>
            <div className={styles.calcGroupTitle}>{group.title}</div>
            <div className={styles.calcGroupFields}>
              {
                group.fields.map(field => React.createElement(getFieldComponent(field) as any, {
                  field
                }))
              }
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default CalculatorPage;