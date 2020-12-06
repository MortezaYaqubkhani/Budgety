import React, {Component} from 'react';
import FlushTable from './common/flushTable';


const Bottom = ({ data}) => {
  return ( 
    <div className="container">
    <div className="row">
      <FlushTable  type="expense" data={data.expenses} />
      <FlushTable  type="income" data={data.incomes} />

    </div>
  </div>
   );
}
 


export default Bottom;
