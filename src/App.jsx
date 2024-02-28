import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { getUser, logout } from "./services/userServices";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwtUser = getUser();

      // check if token is invalid
      if (Date.now() >= jwtUser.exp * 1000) {
        logout();
        setUser(null);
        location.reload(); // reload the page once the token is removed
      } else {
        setUser(jwtUser); // sets token to local storage as token is valid
      }
    } catch (error) {
      // do nothing if token is not found
    }
  }, []);
  return (
    <div className="app">
      <Navbar user={user} />

      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
