import React from "react";

const NavMain = (props) => {
    return (
        <div className="nav-main">
            <div className="nav-links">
                <a href="../../">Home</a> | <a href="../../about">About</a> | <a href="../../projects">Projects</a>
            </div>
        </div>
    );
};



//https://github.com/vanwagonet/vanwagonet.github.io/tree/source/themes/eden
const Index = (props) => {
    const { page } = props;
    console.log(props)
    return (
        <div className="container content font-base">
            

            <div className="nav">
                <div><h1>{props.config.title}</h1></div>
                <NavMain />  
            </div>
            {(page.tag == null) &&  <h6>Socials</h6>}  
           
            {(page.tag == null) &&   <div className="social">
                {props.config.social_names.map((link, idx) =>{
                    return <div><a href={props.config.social_links[idx]}>{link}</a></div>
                })}
            </div>}
            <div style={{marginTop: 30}}>
                {(page.tag == null) &&  <h6>Posts</h6>}
                {(page.tag != null) &&  <h3>Tag: {page.tag}</h3>}
                {page.posts.map((post) => {
                    console.log(post)
                    return (
                        <article
                            key={post.title}
                            itemScope
                            itemType="http://schema.org/BlogPosting"
                        >
                            <div className="post-list">
                                <div style={{marginRight: 20}} className="post-date">{post.date.format("YYYY-MM-DD") }</div>
                                <div> 
                                    <a href={`/${post.path}`}>
                                        <strong>{post.title || "(no title)"}</strong>
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;
