import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import {
  faWrench,
  faGraduationCap,
  faFile,
  faBriefcase,
  faLanguage
} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(
  brands,
  faGraduationCap,
  faWrench,
  faFile,
  faBriefcase,
  faLanguage
);
//automatic svg replacement
fontawesome.dom.i2svg();

//ReactDOM.render(<App />, document.getElementById("content"));
