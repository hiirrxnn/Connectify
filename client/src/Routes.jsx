import { useContext } from "react";
import RegisterOrLogin from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext";
import Chat from "./Chat";

export default function Routes(){
  const {username,id} = useContext(UserContext);

  if(username){
    return (
      <Chat/>
      // <div>logged in {username}</div>
    );
  }
  return(
    <RegisterOrLogin/>
  )
}