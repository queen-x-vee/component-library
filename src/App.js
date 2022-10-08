
import { Routes, Route } from 'react-router-dom'
import LoginPage from './components/Login/LoginPage';
import SmoothNavHoverEffect from './components/Navbar/SmoothNavHoverEffect';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/navbar' element={<SmoothNavHoverEffect/>}/>
    </Routes>
    
  );
}

export default App;
