import React from 'react';

const TotalBudget = (props) => {
  const {total} = props;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  return (
    <div className="row text-center">
      <h1>WebHosting</h1>
      <p>Host your WebSite now!!</p>

      <hr />
      <p className="h5">{monthNames[d.getMonth()]}</p>
      <p>{total}</p>
    </div>
  );
};

export default TotalBudget;
