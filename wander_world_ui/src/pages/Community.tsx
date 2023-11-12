import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Community() {
    return (
        <div>
            <h1>Community</h1>
            <Link to="/create-post">
                <Button variant="contained" color="primary">
                    Create New Post
                </Button>
            </Link>
        </div>
    );
}

export default Community;