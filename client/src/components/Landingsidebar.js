import React from 'react'
import { Link } from 'react-router-dom' 
function Landingsidebar() {
    return (
        <div className="sidebar">
            <div>
                <span className="top_button">
                <Link to="/About" class="text_decorator">About</Link>
                </span>
                <span className="top_button">
                <Link to="/Post" class="text_decorator">Post</Link>
                </span>
                <span className="top_button">
                <Link to="/Chat" class="text_decorator">Chat</Link>
                </span>
            </div>
        </div>
    )
}

export default Landingsidebar