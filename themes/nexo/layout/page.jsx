import React from "react";
import Header from "./partial/post/header";




const NavMain = (props) => {
    return (
        <div className="nav-main">
            <div className="nav-links">
                <a href="../../">Home</a> | <a href="../../about">About</a> | <a href="../../projects">Projects</a>
            </div>
        </div>
    );
};


const Index = (props) => {
    const { list_tags, page, theme, url_for } = props;
    return [
        <div className="container content font-base ">
            <div className="nav">
                <div><h1>{props.config.title}</h1></div>
                <NavMain />  
            </div>
            <article
                className="post"
                itemScope
                itemType="http://schema.org/BlogPosting"
            >

                <div itemProp="articleBody">

                    <div
                        className="post-content"
                        dangerouslySetInnerHTML={{
                            __html: page.content,
                        }}
                    />
                </div>
            </article>
        </div>
    ];
};

export default Index;
