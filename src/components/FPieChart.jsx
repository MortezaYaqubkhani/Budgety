import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';
import useResizeObserver from 'use-resize-observer';

export default function Piechart({width, data}) {
  //   const [data, setData] = useState([7,8, 80, 9, 12, 13, 10, 11, 12]);
  //   const [wid, setWid] = React.useState(width);
  //   setWid = () => {
  //     wid = this.props.width;
  //   };
  const svgRef = useRef();
  //
  //a function for identifying the type of dataset
  const incomeExport = (object) => {
    console.log(data[0]);
    for (const key in data[0]) {
      if (key === 'reward') return 'reward';
      else if (key === 'expenditure') return 'expenditure';
      else if (key === 'title') return 'title';
    }
  };

  useEffect(() => {
    //   const {data} = this.props
    const IncomeOrExpense = incomeExport(data[0]);

    // const {width} = this.props;
    const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateCool)
      .domain([5, data.length]);

    //removing svg
    d3.select(svgRef.current).select('*').remove();

    //draw svg
    const svg = d3
      .select(svgRef.current)
      .append('svg')
      .attr('width', `${width}px`)
      .attr('height', `${width}px`)
      .style('border', '0px solid black')
      .append('g')
      .attr('transform', `translate(${width / 2}, ${width / 2})`);

    //arc  generator, one of the generators
    const arcGenerator = d3
      .arc()
      .innerRadius(0)
      .outerRadius(width / 2 - 30);

    //pie generator
    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => (d[IncomeOrExpense] === 0 ? 0 : d[IncomeOrExpense]));

    //add the new svg
    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append sectors
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', 'white')
      .style('stroke-width', 2);

    //append text
    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d, i) => i + 1)
      .style('fill', '#ffffff')
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
    // arc.exit().remove()
    // arc.transition().duration(500)
    //the last piece is actually about the re-rendering conditions
  }, [width, data]);

  return <div id="svg-chart" ref={svgRef}></div>;
}
