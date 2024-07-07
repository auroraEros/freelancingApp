import { useNavigation } from "react-router-dom";

 export function useMoveBack(){
  const navigate=useNavigation();
  return navigate(-1);
 }