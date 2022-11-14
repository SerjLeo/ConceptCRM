import React from 'react';
import styles from './styles/Calculators.module.scss'
import CalculatorCard from './components/CalculatorCard';
import {CalcList} from './entities/constants'

const Calculators = () => {

  return (
    <div className={styles.calcWrap}>
      <div className="pageTitle">Калькуляторы</div>
      <div className={styles.calcList}>
        {CalcList.map(calc => <CalculatorCard key={calc.id} calc={calc}/>)}
      </div>
    </div>
  );
};

export default Calculators;
