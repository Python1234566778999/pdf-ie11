import React, { Component } from "react";

export type Props = {};

class App extends Component<Props> {
  state: {
    currentWindow: any;
  } = { currentWindow: null };

  openWindow = () => {
    if (this.state.currentWindow == null || this.state.currentWindow.closed) {
      var randomId = new Date().getTime().toString();
      this.state.currentWindow = window.open(
        // `/docviewer?${randomId}`, => RandomID does not help
        "/docviewer",
        "_blank",
        "left=0,top=0,height=200,width=400,directories=no,location=no,maximize=false,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no"
      );
    }
  };

  closeWindow = () => {
    if (this.state.currentWindow != null) {
      this.state.currentWindow.close();
      this.state.currentWindow = null;
    }
  };

  loopX = () => {
    for (var i = 0; i < 50; i++) {
      this.openWindow();
      var start = new Date().getTime();
      while (new Date().getTime() < start + 1000);
      this.closeWindow();
    }
  };

  render() {
    return (
      <div>
        <p>Test PDF App</p>
        <button onClick={this.openWindow}>open window with pdf</button>
        <button onClick={this.closeWindow}>close window with pdf</button>
        <button onClick={this.loopX}>loop</button>
      </div>
    );
  }
}

export default App;
