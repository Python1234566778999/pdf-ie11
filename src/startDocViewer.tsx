import React from "react";
import ReactDOM from "react-dom";
import DocViewer from "./DocViewer";

ReactDOM.render(<DocViewer />, document.getElementById("root"));

window.addEventListener('beforeunload', function() {
    // This only works on IE.
    // @ts-ignore
    if (window.CollectGarbage) {
        //alert("CollectGarbage")
        // @ts-ignore
        window.CollectGarbage();
    }
});