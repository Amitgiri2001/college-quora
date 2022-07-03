import "./App.css";
import Quora from "./components/Quora";

// for new path setting
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Register from "./components/Register"

function App() {
  return (
    // <div className="App">
    //   {/* <h1>This is for testing</h1> */}
    //   <Quora />
    // </div>

    <Router>

      <Routes>
        <Route exact path='/' element={<Quora />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
