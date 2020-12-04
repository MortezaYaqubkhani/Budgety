import React, {Component} from 'react';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';
import Table from './common/table';

class Budget extends Component {
  state = {
    expenses: [
      {expenseId: null, expenseSubject: '424', expenditure: 200},
      {expenseId: null, expenseSubject: '424', expenditure: 10},
    ],
    incomes: [{incomeId: null, incomeSubject: '', reward: 45}, {incomeId: null, incomeSubject: '', reward: 410}],
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

  //function for doing actions on the original list
  onAction = (cla) => {
    console.log();
  };
  render() {
      //object restructuring
      const { expenses, incomes } = this.state
    return (
      <div>
<p></p>
        <Top totalExpense={this.totalExpenses()} totalIncome={this.totalIncomes()} />
        <Middle onAction={this.action} />
        <Bottom />
        <Table data={expenses} />
      </div>
    );
  }
}

export default Budget;
