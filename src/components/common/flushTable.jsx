import React from 'react';

const FlushTable = ({type, data}) => {
  //

  //
  if (type === "expense")
  return (
    <div className="col" >
      <ul className="list-group list-group-flush m-3">
        {data.map((item) => (
          <li className="list-group-item">{item.expenseSubject}</li>
        ))}
      </ul>
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
