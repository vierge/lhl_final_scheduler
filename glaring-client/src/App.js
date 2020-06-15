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
import { AuthProvider, UseAuth } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <Application />
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
