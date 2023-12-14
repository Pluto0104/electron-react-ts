import React from "react";
// const { remote } = window.require("@electron/remote");

const App = () => {
  const openDevTool = () => {
    // remote.getCurrentWindow().webContents.openDevTools();
  };

  return (
    <>
      <h1>Hello Electron with React</h1>
      <button onClick={openDevTool}>Open Dev Tool</button>
    </>
  );
};

export default App;
