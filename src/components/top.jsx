import React, {Component} from 'react';
import TotalBudget from './common/totalBudget';
import ExpenseIncomeCard from './common/expenseIncomeCard.jsx';
import BarChart from './barChart';

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
    const total = income - expense;
    //
    return (
      <div>
        <section className="jumbotron">
          <div className="container">
            {/* <TotalBudget total={total} /> */}

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
            {/* <BarChart data={this.props.data} /> */}
          </div>
        </section>
      </div>
    );
  }
}

export default TOP;
<p>this is the top section</p>;
