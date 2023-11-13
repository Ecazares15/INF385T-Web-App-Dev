import React, {useState} from 'react';
import {Card, CardActions, CardContent, Typography} from '@mui/material';
import Button from "@mui/material/Button";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import "./styles/ThreadCard.css";

interface ThreadProps {
    title: string;
    content: string;
}

const ThreadCard: React.FC<ThreadProps> = ({ title, content }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <Card variant="outlined" className="thread-card">
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{content}</Typography>
            </CardContent>
            <CardActions className="card-actions">
                <Button size="small" startIcon={<ThumbUpIcon />} onClick={e =>
                    setLikes(likes + 1)}>
                    Like {likes}
                </Button>
                <Button size="small" startIcon={<ThumbDownIcon />} onClick={e =>
                    setDislikes(dislikes + 1)}>
                    Dislike {dislikes}
                </Button>
                <Button size="small" startIcon={<CommentIcon />} onClick={() =>
                    alert('Comment functionality to be implemented')}>
                    Comment
                </Button>
            </CardActions>
        </Card>
    );
};

export default ThreadCard;
