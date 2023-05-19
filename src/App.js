import Navbar from './components/Layout/Navbar';
import './App.css';
import LoginFrom from './components/Login/LoginFrom';
import Inbox from './components/Inbox/Inbox'
import Draft from './components/Draft/Draft'
import Sent from './components/sendMail/Sent'
import Trash from './components/Trash/Trash'
import Compose from './components/sendMail/Compose';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />  
      
<Routes>
  <Route path='/' element={<LoginFrom />} /> 
  <Route path='/inbox' element={<Inbox />} />
  <Route path='/draft' element={<Draft />} />
  <Route to='/sent' element={<Sent />} /> 
  <Route to='/trash' element={<Trash />} />
  <Route path='/compose' element={<Compose />} />
</Routes>

    </div>
  );
}

export default App;
