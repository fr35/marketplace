import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LogInPage from './pages/LogIn/LogInPage';
import Home from './pages/Home/Home';
import SignUpPage from './pages/SignUp/SignUpPage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/products' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
