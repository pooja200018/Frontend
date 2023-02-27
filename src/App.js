import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import './App.css';
import Login from './Components/login';
import SingUp from './Components/singUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SingUp/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
