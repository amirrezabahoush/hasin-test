import React, {useState } from "react";

export const UserContext = React.createContext({});
export const UserDispatcherContext = React.createContext({});

const UserProvider: React.FC<{}> =  props => {
  const [user, setUser] = useState({});
  return (
        <UserContext.Provider value={user}>
          <UserDispatcherContext.Provider value={setUser}>
            {props.children}
          </UserDispatcherContext.Provider>
        </UserContext.Provider>
      );
}

export default UserProvider;