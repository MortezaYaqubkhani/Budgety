import React, {Component, createRef} from 'react';
import TotalBudget from './common/totalBudget';
import ExpenseIncomeCard from './common/expenseIncomeCard.jsx';
import BarChart from './barChart';
import {Button, Jumbotron, Container, Row, Col} from 'react-bootstrap';
import Piechart from './FPieChart';

class TOP extends Component {
  //constructor
  constructor(props) {
    super(props);
    //
    this.state = {
      columnWidth: 0,
    };
  }

  resizeObserver = null;
  resizeElement = createRef();

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let e of entries) {
        console.log(e, e.contentBoxSize[0]);
        const columnWidth = e.contentBoxSize[0].inlineSize;
        console.log(columnWidth);
        this.setState({columnWidth});
      }
    });

    this.resizeObserver.observe(this.resizeElement.current);
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  //
  render() {
    //object destructuring
    const {totalExpense: expense, totalIncome: income} = this.props;
    const total = [{title: income}, {title: expense}];
    console.log(total);
    //
    return (
      <Jumbotron>
        <Container >
          <Row>
            <Col xs={12} md={8}>
              <div className="budget__title">
                Available Budget in{' '}
                <span class="budget__title--month">%Month%</span>:
              </div>

              <div className="budget__value">+ 2,345.64</div>
              <Row>
                <ExpenseIncomeCard
                  type="Income"
                  income={this.props.totalIncome}
                  expense={expense}
                />
              </Row>
              <Row>
                <ExpenseIncomeCard
                  type="Expense"
                  income={income}
                  expense={expense}
                />
              </Row>
            </Col>
            <Col xs={12} md={4} ref={this.resizeElement}>
              
              <Piechart width={this.state.columnWidth} data={total} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default TOP;
