import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Application";
import Application from "./components/Application";
import {
  DatabaseProvider,
  useDataState,
  useDataDispatch,
} from "./hooks/useDatabase";
import { AuthContext, UseAuth } from "./hooks/useAuth";

function App() {
  return (
    <UseAuth>
      <DatabaseProvider>
        <Application />
      </DatabaseProvider>
    </UseAuth>
  );
}

export default App;
