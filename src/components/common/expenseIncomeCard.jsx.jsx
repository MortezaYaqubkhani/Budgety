import React from 'react';

const ExpenseIncomeCard = (props) => {
  // interface
  // type: type of card
  // total Expense: Expense
  // total income: income
  // thing to calculate: expense percentage

  const {type, income, expense} = props;
  // const number = type === 'income' ? income : expense;
  return (
    <div className="card text-white text-left bg-primary mb-1">
      <div className="row card-body">
        <div className="col-6">{type}</div>
        <div className="col-3">
          {type === 'Expense' ? expense : income}
        </div>
        <div className="col-3">{type === 'Expense' ? 1234 : null} </div>
      </div>
    </div>
  );
};

export default ExpenseIncomeCard;
