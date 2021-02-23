import React from "react";
import Header from "./partial/post/header";



const NavSidebar = (props) => {
    const { list_tags, page, theme, url_for } = props;
    return (
        <aside className="nav-sidebar">
          <div className="nav-links">
               <a href="../../">Home</a> | <a href="../../about">About</a> | <a href="../../projects">Projects</a>
          </div>
        </aside>
    );
};



const Categories = (props) => {
    const { list_tags, page, theme, url_for } = props;
    return (
        <aside className="toc-sidebar">
           <div className="toc-nav">
               
                <div className="toc-button tooltip">
                    {page.next != null && [
                        <a key={1} href={"/" + page.next.path}><span style={{fontSize: 40}}>&#8249;</span></a>,
                        <div key={2} className="tooltiptext">Last Post</div>
                    ]}
                    {page.next == null && (
                        <span/>     
                    )}    
                </div>
                <div className="toc-button tooltip">
                    {page.prev != null && [
                        <a key={1} href={"/" + page.prev.path}><span style={{fontSize: 40}}>&#8250;</span></a>,
                        <div key={2} className="tooltiptext">Next Post</div>
                    ]}
                    {page.prev == null && (
                        <span/>
                    )}
                </div>
                <hr/>
            </div>
            <ol>
                <li>
                    <a href="#top" className="toc-text">
                        {props.page.title}
                    </a>
                </li>
                <div
                    className="toc-child"
                    dangerouslySetInnerHTML={{
                        __html: props.toc(page.content),
                    }}
                />
            </ol>
        </aside>
    );
};

const Index = (props) => {
    const { list_tags, page, theme, url_for } = props;
    return [
        <div className="container content font-base ">
            <NavSidebar {...props} />
            <article
                className="post"
                itemScope
                itemType="http://schema.org/BlogPosting"
            >
                <Header {...props} />
                <div itemProp="articleBody">
                <Categories {...props} />
                    <div
                        className="post-content"
                        dangerouslySetInnerHTML={{
                            __html: page.content,
                        }}
                    />
                </div>
                <div className="post-footer">
                    <div style={{ float: "left" }}>
                        {page.next != null && (
                            <a href={"/" + page.next.path}><span style={{fontSize: 23}}>&#8249;</span> {page.next.title}</a>
                        )}
                    </div>
                
                    <div style={{ float: "right" }}>
                        {page.prev != null && (
                            <a href={"/" + page.prev.path}>{page.prev.title} <span style={{fontSize: 23}}>&#8250;</span></a>
                        )}
                    </div>
                </div>
            </article>
            <script src="https://utteranc.es/client.js"
                    repo={props.config.utterances_repo}
                    issue-term="pathname"
                    label="Comment"
                    theme="preferred-color-scheme"
                    crossOrigin="anonymous"
                    async>
            </script>
            
        </div>
    ];
};

export default Index;
