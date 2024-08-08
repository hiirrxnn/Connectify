import logo from './assets/Logo.png'
export default function Logo(){
    return(
      <div className="py-4 p-4 my-4 mx-10 flex justify-center items-center gap-4 text-green-600 font-bold bg-gray-100 shadow-md rounded-lg">
      <img src={logo} className="w-12 h-12 opacity-75 border  rounded-full shadow-sm" alt="Logo" />
      <span className='text-lg'>Connectify</span>
      </div>
    )
}