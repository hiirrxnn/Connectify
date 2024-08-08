import './App.css'
import Register from './RegisterAndLoginForm'
import axios from 'axios';
import { UserContext, UserContextProvider } from './UserContext';
import { useContext } from 'react';
import Routes from './Routes';
function App() {

  axios.defaults.baseURL = 'http://localhost:4001';
  axios.defaults.withCredentials = true;
  const {username} = useContext(UserContext);
  return (
    <UserContextProvider>
     <Routes/>
    </UserContextProvider>
  )
}

export default App
