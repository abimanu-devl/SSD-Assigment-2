import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './app/pages/components/Login';
import Manager from './app/pages/components/Manager';
import Worker from './app/pages/components/Worker';
import MessageUpload from './app/pages/components/MessageUpload';
import FileUpload from './app/pages/components/FileUpload';


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/manager' element={<Manager/>}/>
          <Route path='/worker' element={<Worker/>}/>
          <Route path='/message-upload' element={<MessageUpload/>}/>
          <Route path='/file-upload' element={<FileUpload/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
