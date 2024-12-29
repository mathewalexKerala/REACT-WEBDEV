import React from "react";
import UserContext from "./UserContext";

export default function UserContextProvider(props) {
  const name = "MATHEW";
  const [user, setUser] = React.useState({});
  return (
    <UserContext.Provider value={{ user, setUser, name }}>
      {props.children}
    </UserContext.Provider>
  );
}
