
/**
 * Footer Layout
 * 
 * @author Brendan Fuller (ImportProgram)
 */
import React from "react"

export default (props) => {
    return (<footer className="container content">
            <div>
                   {props.config.site_copyright}
            </div>

            <div >
                <a href="../../">Home</a> | <a href="../../about">About</a> | <a href="../../projects">Projects</a>
            </div>
    </footer>); 
}