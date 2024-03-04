import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./components/CounterApp"
import CCState from "../../04-counter-app-vite-tarea/src/components/CCState";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={100}></CounterApp>
    <CCState value={10000} nombre="Leandro"/>
  </React.StrictMode>,
)
