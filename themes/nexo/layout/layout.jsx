import React from "react";

import Head from "./partial/head.jsx";

import Header from "./partial/layout/header";
import Footer from "./partial/layout/footer";

const Layout = (props) => {
    return (
        <html>
            <Head {...props} />
            <body>
                <Header />
                <main dangerouslySetInnerHTML={{ __html: props.body }} />
                <Footer {...props}/>
            </body>
        </html>
    );
};

export default Layout;
