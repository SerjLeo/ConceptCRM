import React from 'react';
import styles from '../styles/Results.module.scss'
import {ResultField} from '../../../redux/calculator/types';

type ResultProps = {
    fields: ResultField[]
}

const Results: React.FC<ResultProps> = ({fields}) => {
  return (
    <div className={styles.resultsWrap}>
      <div className={styles.resultsTitle}>Результаты</div>
      <div>
        {
          fields.map((field, id) => <div key={id}>
            {`${field.value} - ${field.name}`}
          </div>)
        }
      </div>
    </div>
  );
};

export default Results;