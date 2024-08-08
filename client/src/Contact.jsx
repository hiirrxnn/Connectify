import Avatar from "./Avatar"
export default function Contact({id,username,onClick,selected,online}){
  return (
    <div
            key={id}
            onClick={() => onClick(id)}
            className={"flex items-center gap-1 border-b border-gray-300 h-12 " + (selected ? 'bg-blue-200' : '')}>
            {selected && (
              <div className="w-1 bg-blue-500 h-12"></div>
            )}
            <Avatar username={username} userId={id} online={online} />
            {username}
    </div>
  )
}