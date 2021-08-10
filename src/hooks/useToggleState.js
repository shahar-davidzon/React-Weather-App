import { useState } from "react";
function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = (val) => {
    setState(val);
  };
  return [state, toggle];
}
export default useToggle;
