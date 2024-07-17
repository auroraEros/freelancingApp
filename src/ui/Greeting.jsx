import {useUser} from "../hooks/useUser"
function Greeting() {
  const {user}=useUser()
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-secondary-700 font-bold">وقت بخیر، </span>
      <span className="text-primary-900">{user?.name}</span>
    </div>
  );
}

export default Greeting;
