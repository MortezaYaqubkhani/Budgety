import React, {Component} from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class Middle extends Form {
  state = {
    data: {explanation: '', value: '', isIncome: ''},
    errors: {},
  };
  //
  //schema for validation purposes
  schema = {
    explanation: Joi.string().required().label('Description').min(8),
    value: Joi.number().min(0).required().label('Value'),
    isIncome: Joi.boolean()
  };
  //

  doSubmit = () => {
    //call the server
    console.log(this.state.data);
    this.props.onAction(this.state.data)
  };
  //
  render() {
    //
    return (
      <div className="add">
        <div className="container">
          {/* {errors} */}
          {/* <form onSubmit={() => this.props.onAction(this.state.data)} className="row"> */}
          <form onSubmit={this.handleSubmit} className="row">
            {this.renderSelect('isIncome', '', ['+', '-'])}
            {this.renderInput('value', '', 'number')}
            {this.renderInput('explanation')}
            {this.renderButton('Save')}
          </form>
        </div>
      </div>
    );
  }
}

export default Middle;
