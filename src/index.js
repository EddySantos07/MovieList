import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
];

ReactDOM.render(<App />, document.getElementById("app"));
