import React from 'react';
import styles from '../styles/CalculatorCard.module.scss'
import {Link} from 'react-router-dom';
import {Calculator} from '../../../redux/calculator/types';
import {IconMap} from '../entities/constants';

type CalcCardProps = {
    calc: Calculator
}

const CalculatorCard: React.FC<CalcCardProps> = ({calc: {title, icon, link}}) => {

  return (
    <Link to={link}>
      <div className={styles.calcCard}>
        {React.createElement(IconMap[icon])}
        {title}
      </div>
    </Link>
  );
};

export default CalculatorCard;
