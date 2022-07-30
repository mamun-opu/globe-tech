import './App.css';
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/services' element = {<Services />} />
        <Route path='/login' element = {<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
