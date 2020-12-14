import React, {Component} from 'react';
import TotalBudget from './common/totalBudget';
import ExpenseIncomeCard from './common/expenseIncomeCard.jsx';
import BarChart from './barChart';
import {Button, Jumbotron, Container, Row, Col} from 'react-bootstrap';

class TOP extends Component {
  //constructor
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    // this.state = {counter: 0};
    // this.handleClick = this.handleClick.bind(this);
  }
  //
  render() {
    //object destructuring
    const {totalExpense: expense, totalIncome: income} = this.props;
    const total = {income, expense};
    //
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <h5>Available Budget in December 2020:</h5>
              <br />
              <h4>0.00</h4>
              <ExpenseIncomeCard
                type="Income"
                income={this.props.totalIncome}
                expense={expense}
              />
              <ExpenseIncomeCard
                type="Expense"
                income={income}
                expense={expense}
              />
            </Col>
            <Col xs={12} md={4}>
              pie chart{' '}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default TOP;
