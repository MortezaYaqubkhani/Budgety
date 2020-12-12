import React, {Component} from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  async componentDidMount() {
    const data = [
      {lable: 'number1', value: 10},
      {lable: 'number2', value: 20},
      {lable: 'number3', value: 30},
      {lable: 'number4', value: 400},
    ];
  }

  drawBarChart(data) {
    console.log(this.myRef);
    const {width, height} = this.props;

    const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateCool)
      .domain([5, data.length]);
    // Remove the old svg
    d3.select(this.refs.canvas).select('svg').remove();
    //
    const svg = d3
      .select(this.refs.canvas)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('border', '1px solid black')
      .append('g')
      .attr('transform', `translate(${100}, ${0})`);
    //arc  generator, one of the generators
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(100);
    //pie generator
    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.expenditure);
    //arc
    const arc = svg.selectAll().data(pieGenerator(data)).enter();
    // Append sectors
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', 'white')
      .style('stroke-width', 2);
    // Append text labels
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
  }
  render() {
    return (
      <svg  id='container' className="col border first-pie" ref="canvas">
        {this.drawBarChart(this.props.data)}
      </svg>
    );
  }
}
export default BarChart;
