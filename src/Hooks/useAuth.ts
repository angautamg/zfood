import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useAuth = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [getLocalStorage] = useLocalStorage("user");

  const [isLoggedin, setIsLoggedin] = useState(
    getLocalStorage?.token?.length === 100 ? true : false
  );

  // keep in sync with localStorage
  useEffect(() => {
    if (getLocalStorage?.token?.length === 100) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);

  return [isLoggedin, setIsLoggedin];
};

export default useAuth;
