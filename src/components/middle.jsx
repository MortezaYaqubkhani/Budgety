import React, {Component} from 'react';

class Middle extends Component {
  state = {
    isIncome: true,
    subject: 'salary',
    amount: 0,
  };
  render() {
    return (
      // <div className="section bg-secondary">
      <form className="container">
        <div className="row">
          <div class="form-group col-2">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>+</option>
              <option>-</option>
            </select>
          </div>
          <div className="form-group col-5">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add description"
            />
          </div>
          <div className="form-group col-3">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="value"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default Middle;
