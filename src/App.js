import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import './App.css'
import { DataContext } from "./components/DataProvider/Dataprovider";
import { Type } from "./Utils/action.type";
import { auth } from "./Utils/firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    })
  }, []);

  return <Routing />


}

export default App;
