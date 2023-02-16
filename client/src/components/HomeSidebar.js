import React from "react";
import { Link } from "react-router-dom";
import "./HomeSidebar.css";




function HomeSidebar() {
    return (
        <div className="sidebar">
            <div>
                <span className="top_button">
                <Link to="/About" class="text_decorator">About</Link>
                </span>
                <span className="top_button">
                <Link to="/Chat" class="text_decorator">Chat</Link>
                </span>
            </div>
            <div className="sidebar_bottom">
                <span className="bottom_buttons">
                <Link to="/Post" class="text_decorator">Post</Link>
                

                </span>
            </div>
        </div>
    );
}

export default HomeSidebar;