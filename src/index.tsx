//Polyfill for IE11
// You have to use the next two Polyfills plus settings in webpack config!
// "babel-polyfill": "6.26.0",
// "es6-promise": "4.2.5",
// import 'es6-promise/auto';
// import 'babel-polyfill';

import "./index.css";

export const decide = async () => {
  if (new RegExp(`^/docviewer`).test(window.location.pathname)) {
    await import("./startDocViewer");
  } else {
    await import("./startApp");
  }
};

decide();
