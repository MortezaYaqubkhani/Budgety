import React from 'react';
import { Col, Alert, Row } from 'react-bootstrap';

const ExpenseIncomeCard = (props) => {
  // interface
  // type: type of card
  // total Expense: Expense
  // total income: income
  // thing to calculate: expense percentage

  const {type, income, expense} = props;
  // const number = type === 'income' ? income : expense;
  return (
    <Col className="mb-1">
      <Alert
        className={type === 'Expense' ? 'budget__expense' : 'budget__income'}
      >
        <Row>

        <Col>{type}</Col>
        <Col></Col>
        <Col>{type === 'Expense' ? expense : income}
        {type === 'Expense' ? '  45%' : '  ---'}
        </Col>
        </Row>
      </Alert>
    </Col>
  );
};

export default ExpenseIncomeCard;
