import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext.jsx";
import ColorContext from "../contexts/ColorContext.jsx";

export default class Button extends Component {
  // Using a context provider
  /* static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  } */

  // Using a context Consumer
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
