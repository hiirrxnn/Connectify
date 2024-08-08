export default function Avatar({userId,username,online}){
  const colors = [
    'bg-teal-200', 'bg-blue-200', 'bg-red-200',
    'bg-green-200', 'bg-yellow-200', 'bg-purple-200',
    'bg-indigo-200', 'bg-pink-200', 'bg-orange-200',
    'bg-teal-300', 'bg-blue-300', 'bg-red-300',
    'bg-green-300', 'bg-yellow-300', 'bg-purple-300',
    'bg-cyan-200', 'bg-lime-200', 'bg-amber-200',
    'bg-gray-200', 'bg-sky-200', 'bg-rose-200',
    'bg-fuchsia-200', 'bg-violet-200', 'bg-stone-200',
    'bg-orange-300', 'bg-pink-300','bg-cyan-300',
    'bg-lime-300', 'bg-amber-300', 'bg-gray-300',
    'bg-sky-300', 'bg-rose-300', 'bg-fuchsia-300',
    'bg-violet-300', 'bg-stone-300', 
  ]
  
  
  const userIdBase10 = parseInt(userId,16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  return (
    <div className={"relative bg-red-300 h-6 w-6 rounded-full "+ color}>
      <div className="text-center w-full">{username[0]}</div>
      {online && (
        <div className="absolute w-1.5 h-1.5 bottom-0 right-0 bg-green-500 rounded-full"></div>
      )}
      {!online && (
        <div className="absolute w-1.5 h-1.5 bottom-0 right-0 bg-gray-500 rounded-full"></div>
      )}
    </div>
  );
}