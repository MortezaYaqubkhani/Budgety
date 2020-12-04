import React from 'react';

const Table = ({data}) => {
  //
  return (
    <table className="table">
      <thead>
        {data.map((item) => (

          <tr>{item.expenseSubject}</tr>
          )
          )}
      </thead>
      <tbody>
        {/* {data.map((item) => (
          <tr key={item._id || item.key} style={{cursor: 'pointer'}}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};

export default Table;
