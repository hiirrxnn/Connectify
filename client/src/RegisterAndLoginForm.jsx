import { useContext, useState } from "react"
import axios from 'axios'
import { UserContext } from "./UserContext";
import Logo from "./Logo";
export default function RegisterOrLogin(){

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [isLoginOrRegister,setIsLoginOrRegister] = useState('register');
  const {setUsername:setLoggedInUsername,setId} = useContext(UserContext);
  async function handleSubmit(ev){
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login'
    const {data} = await axios.post(url,{username,password});
    setLoggedInUsername(username);
    setId(data.id);
  }

  return (
    <div className="bg-blue-50 h-screen flex flex-col justify-center items-center">
      <Logo/>
      {isLoginOrRegister==='login' && (
        <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      )}
      {isLoginOrRegister==='register' && (
        <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new account</h2>
      )}
      <form className="w-64 mx-auto" onSubmit={handleSubmit}>
        <input type="text" value={username} 
        onChange={ev=>setUsername(ev.target.value)} 
        placeholder="username" 
        className="my-2 lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <input type="password" 
        value={password} 
        onChange={ev=>setPassword(ev.target.value)} 
        placeholder="password"
        className="mb-2 lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoginOrRegister==='register'? 'Register':'Login'}</button>
        <div className="text-center mt-2 ">
          {isLoginOrRegister==='register' && (
            <div>
              Already a member? <button className="ont-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={()=>{setIsLoginOrRegister('login')}}> Login Here</button>
            </div>
          )}
          {isLoginOrRegister==='login' && (

            <div className="whitespace-nowrap">
              Don't have an account ? <button className="ont-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={()=>{setIsLoginOrRegister('register')}}> Register Here</button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}