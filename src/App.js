import { useState } from 'react';
import './App.css';
import PrintGraph from './components/PrintGraph';
import { HiOutlinePrinter } from 'react-icons/hi';

function App() {
  const [showGraph, setShowGraph] = useState(false);
  const centerButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Center vertically on the screen
  };
  return (
    <div className="App bg-white h-screen ">
      {!showGraph ? (
        <div style={centerButtonStyle}>
          <button
            className="bg-slate-900 rounded-lg text-white m-4 px-4 py-2"
            onClick={() => setShowGraph(true)}
          >
            <HiOutlinePrinter
              style={{
                display: 'inline-block',
                marginRight: '10px',
                fontSize: 20,
              }}
            />
            Print
          </button>
        </div>
      ) : (
        <PrintGraph />
      )}
    </div>
  );
}

export default App;
