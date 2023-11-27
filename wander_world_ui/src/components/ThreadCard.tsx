import React, {useEffect, useState} from 'react';
import {
    Card,
    CardActions,
    CardContent, Container,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Grid, TextField,
    Typography
} from '@mui/material';
import Button from "@mui/material/Button";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import "./styles/ThreadCard.css";
import axios from "axios";

interface Comment {
    content: string;
}

interface ThreadProps {
    id: string;
    title: string;
    content: string;
    initLikes: number;
    initDislikes: number;
    initComments: Comment[];
}

const ThreadCard: React.FC<ThreadProps> = ({id, title, content, initLikes, initDislikes, initComments}) => {
    const [likes, setLikes] = useState(initLikes);
    const [dislikes, setDislikes] = useState(initDislikes);
    const [openComment, setOpenComment] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(initComments);

    const hostname = "http://127.0.0.1:5000";

    const handleLike = async () => {
        console.log(id)
        axios.post(`${hostname}/threads/${id}/like`)
            .then(response => {
                console.log(response.data)
                setLikes(response.data.likes)
            })
            .catch(error => {
                console.error("Error fetching likes", error);
            })
    }

    const handleDislike = async () => {
        console.log(id)
        axios.post(`${hostname}/threads/${id}/dislike`)
            .then(response => {
                setDislikes(response.data.dislikes)
            })
            .catch(error => {
                console.error("Error fetching dislikes", error);
            })
    }

    const handleSubmitComment = async () => {
        if (!comment.trim()) {
            return;
        }
        console.log(comment)
        axios.post(`${hostname}/threads/${id}/comment`, {content: comment})
            .then(response => {
                setComments([...comments, response.data.comment]);
                console.log(comments)
            })
            .catch(error => {
                console.error("Error fetching comments", error);
            })
    }

    return (
        <Card variant="outlined" className="thread-card">
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{content}</Typography>
            </CardContent>
            <CardActions className="card-actions">
                <Button size="small" startIcon={<ThumbUpIcon/>} onClick={e =>
                    handleLike()}>
                    Like {likes}
                </Button>
                <Button size="small" startIcon={<ThumbDownIcon/>} onClick={e =>
                    handleDislike()}>
                    Dislike {dislikes}
                </Button>
                <Button size="small" startIcon={<CommentIcon/>} onClick={e => setOpenComment(true)}>
                    Comment
                </Button>
            </CardActions>
            {openComment && <Card>
              <CardContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="comment"
                  label="Comment"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </CardContent>
              <CardActions className="comment-action">
                <Button onClick={e => setOpenComment(false)}>Cancel</Button>
                <Button onClick={handleSubmitComment}>Post</Button>
              </CardActions>
            </Card>}

            <Grid item xs={12}>
                <Card>
                    <Grid container spacing={2}>
                        {comments && comments.map((comment, index) => (
                            <Grid item xs={12} key={index}>
                                <Card>
                                    <CardContent>
                                        <Typography>
                                            {comment.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Grid>

        </Card>


    );
};

export default ThreadCard;
