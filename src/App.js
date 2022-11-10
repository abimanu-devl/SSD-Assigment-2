import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './app/pages/components/Login';
import Home from './app/pages/components/Home';
import Manager from './app/pages/components/Manager';
import Worker from './app/pages/components/Worker';
import WorkerUpload from './app/pages/components/WorkerUpload';
import ManagerUpload from './app/pages/components/ManagerUpload';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/manager' element={<Manager/>}/>
          <Route path='/worker' element={<Worker/>}/>
          <Route path='/worker-upload' element={<WorkerUpload/>}/>
          <Route path='/manager-upload' element={<ManagerUpload/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
