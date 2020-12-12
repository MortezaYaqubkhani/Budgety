import * as React from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import {Component} from 'react';
import * as d3 from 'd3';
import GsvCopmonent from './resize';
////////////////////////////////
const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};
///////////////////////////////
///////////////////////////////
///////////////////////////////
//main component
const ComponentSize = ({data}) => {
  //
  const target = React.useRef(null);
  const size = useSize(target);

  React.useEffect(() => {
    if (data && target.current) console.log(size);
  }, [data, target.current]);

  return (
    <div ref={target} className="App">
      <h1>useResizeObserver() </h1>
        
      {size?.width}
      <GsvCopmonent width={size?.width} height={size?.width -30} />
    </div>
  );
};

export default ComponentSize;
