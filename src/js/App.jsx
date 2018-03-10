// App.jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

export default class App extends React.Component {
  render() {
    return (
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        size="2x"
        spin
        sytlestyle={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
      />
    );
  }
}
