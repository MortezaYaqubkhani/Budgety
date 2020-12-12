import React from 'react';
import BarChart from '../barChart';
import { ListGroup } from 'react-bootstrap';


const FlushTable = ({type, data}) => {
  //

  //
  if (type === "expense")
  return (
    <div className="col" >
      <ListGroup variant="flush">
        {data.map((item) => (
          <ListGroup.Item>{item.expenseSubject}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
  if (type === "income")
  return (
    <div className="col">
      <ul className="list-group list-group-flush m-3">
        {data.map((item) => (
          <li className="list-group-item">{item.incomeSubject}</li>
        ))}
      </ul>
     
    </div>
  );
};

export default FlushTable;
