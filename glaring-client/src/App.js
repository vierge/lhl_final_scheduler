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

function App() {
  return (
    <DatabaseProvider>
      <Application />
    </DatabaseProvider>
  );
}

export default App;
