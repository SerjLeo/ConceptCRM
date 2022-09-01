import React from 'react';
import style from './Calculators.module.scss'
import CalculatorCard from './components/CalculatorCard';

const Calculators = () => {
  const calcs = [{
    title: 'Hey',
    icon: 'Audio'
  }]
  return (
    <div className={style.calcWrap}>
      <div className="pageTitle">Калькуляторы</div>
      <div className="calcList">
        {calcs.map(calc => <CalculatorCard title={calc.title} icon={calc.icon}/>)}
      </div>
    </div>
  );
};

export default Calculators;
