import React from 'react';

type CalcCardProps = {
    title: string
    icon: string
}

const CalculatorCard: React.FC<CalcCardProps> = ({title, icon}) => {
  console.log(icon)
  return (
    <div>
      {title}
    </div>
  );
};

export default CalculatorCard;
