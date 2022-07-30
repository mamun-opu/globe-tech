import './App.css';
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {
          <Home />
        } />
        <Route path='/services' element = {<Services />} />
      </Routes>

      {/* <Services /> */}
      
    </div>
  );
}

export default App;
