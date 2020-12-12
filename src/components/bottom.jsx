import React, {Component, useState, useEffect, useRef} from 'react';
import FlushTable from './common/flushTable';
import BarChart from './barChart';
import ComponentSize from './componentSize';
import Piechart from './FPieChart';
import Resize from './resize';
import useResizeObserver from 'use-resize-observer';

const Bottom = ({data}) => {
  const svgRef = useRef();
  const {width, height} = useResizeObserver({
    ref: svgRef,
  });
  return (
    <div className="container">
      {width}
      <div className="row">
        <div className="col-6 " ref={svgRef}>
          <Piechart width={width} data={data.expenses} />
        </div>
        <div className="col-6 ">
          <Piechart width={width} data={data.incomes} />
        </div>
      </div>
      <div className="row">
        <FlushTable type="expense" data={data.expenses} />
        <FlushTable type="income" data={data.incomes} />
      </div>
    </div>
  );
};

export default Bottom;
