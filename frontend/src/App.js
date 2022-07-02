import "./App.css";
import Quora from "./components/Quora";

// for new path setting
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

    import Login from "./components/Login"

function App() {
  return (
    // <div className="App">
    //   {/* <h1>This is for testing</h1> */}
    //   <Quora />
    // </div>

    <Router>
    
    <Routes>
        <Route exact path='/'  element={<Quora />} />
        {/* <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} /> */}
        <Route path='/login' element={<Login />} />
    </Routes>
    </Router>
  );
}

export default App;
