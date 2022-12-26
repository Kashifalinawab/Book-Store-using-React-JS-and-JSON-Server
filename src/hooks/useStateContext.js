import { useContext } from "react";
import { Context } from "../context/StateContext";
function useStateContext(props) {
  return useContext(Context);
}

export default useStateContext;
