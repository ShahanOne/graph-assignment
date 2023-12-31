import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { HiOutlinePrinter } from 'react-icons/hi';

import Graph from './Graph';
import Header from './Header';
import Footer from './Footer';

const PrintGraph = () => {
  const graphRef = useRef();
  return (
    <div className="items-center">
      <div ref={graphRef}>
        <>
          <Header /> 
          <Graph />
          <Footer />
        </>
      </div>
      <ReactToPrint
        trigger={() => (
          <button className="bg-slate-900 rounded-lg text-white m-4 px-4 py-2">
            <HiOutlinePrinter
              style={{
                display: 'inline-block',
                marginRight: '10px',
                fontSize: 20,
              }}
            />
            Save
          </button>
        )}
        content={() => graphRef.current}
      />
    </div>
  );
};

export default PrintGraph;
