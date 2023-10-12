import React, { useRef} from 'react';
import ReactToPrint from 'react-to-print';
import { HiOutlinePrinter } from 'react-icons/hi';

import Graph from './Graph';

const PrintGraph = () => {
  const graphRef = useRef();
  return (
    <div className="items-center">
        <ReactToPrint
          trigger={() => (
            <button
              className="bg-slate-900 rounded-lg text-white m-4 px-4 py-2"
            >
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

        <div ref={graphRef}>
          <Graph />
        </div>
    </div>
  );
};

export default PrintGraph;
