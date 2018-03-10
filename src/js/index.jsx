import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, faCheckSquare, faCoffee);

ReactDOM.render(<App />, document.getElementById("content"));
