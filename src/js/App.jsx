// App.jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon="check-square" />
        Favorite beverage: <FontAwesomeIcon icon="coffee" />
      </div>
    );
  }
}
