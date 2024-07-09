import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Create from './component/Create';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
