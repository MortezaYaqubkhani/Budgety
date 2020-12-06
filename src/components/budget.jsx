import React, {Component} from 'react';
import Top from './top';
import Middle from './middleForm';
import Bottom from './bottom';
import Table from './common/flushTable';

class Budget extends Component {
  state = {
    expenses: [{expenseId: "", expenseSubject: "", expenditure: 0}],
    incomes: [{incomeId: "", incomeSubject: "", reward: 0}],
  };

  //function to calculate the total expense
  totalExpenses = () => {
    let expenseTotal = 0;
    this.state.expenses.forEach((element) => {
      expenseTotal += element.expenditure;
    });
    return expenseTotal;
  };
  //function to calculate the total income
  totalIncomes = () => {
    let incomeTotal = 0;
    this.state.incomes.forEach((element) => {
      incomeTotal += element.reward;
    });
    return incomeTotal;
  };

  handleSubmit = (ev) => {
    //if expense
    if (ev.isIncome === 'false') {
      const expenses = [...this.state.expenses];
      let newExpense = {};

      newExpense.expenseId = Date.now().toString();
      newExpense.expenseSubject = ev.explanation;
      newExpense.expenditure = parseInt(ev.value);
      expenses.push(newExpense);
      this.setState({expenses});
      console.log(this.state.expenses);
    }
    //income
    if (ev.isIncome === 'true') {
      const incomes = [...this.state.incomes];
      let newIncome = {};

      newIncome.incomeId = Date.now().toString();
      newIncome.incomeSubject = ev.explanation;
      newIncome.reward = parseInt(ev.value);
      incomes.push(newIncome);
      this.setState({incomes});
      console.log(this.state.incomes);
    }
  };
  //function for doing actions on the original list
  onAction = (cla) => {
    console.log();
  };
  render() {
    //object restructuring
    const {expenses, incomes} = this.state;
    return (
      <div>
        <Top
          totalExpense={this.totalExpenses()}
          totalIncome={this.totalIncomes()}
        />
        <Middle onAction={this.handleSubmit} />
       
        <Bottom data={this.state} />
      </div>
    );
  }
}

export default Budget;
//ezafe kardane unique be joi
