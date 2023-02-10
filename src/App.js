import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //Let us fetch the data from the backend
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          {/* show the data from the backend */}
          <p>{!data ? "Loading..." : data}</p>
        
      
      </header>
    </div>
  );
}

export default App;
