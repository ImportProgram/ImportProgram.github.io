import React from "react";

export default (props) => {
    return [
        <title>{props.page.title}</title>,
        <meta charSet="utf-8"></meta>,
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />,
        <link rel="stylesheet" href={props.url_for("assets/css/app.css")} />,
        <link rel="stylesheet" href={props.url_for("assets/css/prism.css")} />,
        <script src={props.url_for("assets/js/prism.js")} />,
    ];
};
