import { useState } from "react";

const useLocalStorage = (key, initial) => {
  let local;
  try {
    local = JSON.parse(localStorage.getItem(key));
  } catch (err) {
    //
  }
  if (!local) {
    localStorage.setItem(key, JSON.stringify(initial));
    local = initial;
  }
  const [state, _setState] = useState(local);
  const setState = updater => {
    _setState(old => {
      let res;
      if (typeof updater === "function") {
        res = updater(old);
      } else {
        res = updater;
      }
      localStorage.setItem(key, JSON.stringify(res));
      return res;
    });
  };
  return [state, setState];
};

export default useLocalStorage;
