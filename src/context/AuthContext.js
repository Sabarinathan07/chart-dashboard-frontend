import React, { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(apiUrl, 'aspis');
  const getLoggedIn = useCallback(async () => {
    const loggedInRes = await axios.get(`${apiUrl}/auth/loggedIn`);
    setLoggedIn(loggedInRes.data);
  }, [apiUrl]); // Add `apiUrl` as a dependency since it's used inside the function

  useEffect(() => {
    getLoggedIn();
  }, [getLoggedIn]); // Add `getLoggedIn` to the dependency array

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };