import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { v4 } from "uuid";

if (localStorage.getItem("boards") === null) {
  const boards = [
    {
      id: v4(),
      name: "First",
      lists: [
        {
          name: "Mondey",
          tasks: [
            { name: "Up", complited: true },
            { name: "Eat", complited: false }
          ]
        },
        {
          name: "Thusday",
          tasks: [{ name: "Not start yet", complited: false }]
        }
      ]
    }
  ];
  const serialBoards = JSON.stringify(boards);

  localStorage.setItem("boards", serialBoards);
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
