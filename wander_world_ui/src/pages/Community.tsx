import React, {useState, useEffect} from 'react';
import axios, {Axios} from 'axios';
import {Container, Grid, Button, TextField, Alert} from '@mui/material';
import ThreadCard from "../components/ThreadCard";
import './styles/Community.css';

axios.create({
    headers: {
        'content-encoding': 'gzip, deflate, br'
    }
});

interface Comment {
    content: string;
}

interface Thread {
    _id: string;
    title: string;
    content: string;
    likes: number;
    dislikes: number;
    comments: Comment[];
}

const Community: React.FC = () => {
    const [threads, setThreads] = useState<Thread[]>([]);
    const [newThread, setNewThread] = useState<Thread>({
        _id: '',
        title: '',
        content: '',
        likes: 0,
        dislikes: 0,
        comments: []
    });
    const [error, setError] = useState<string>('');

    const hostname =
      "https://wander-world-bfzkz0w9z-eddie-cazares-projects.vercel.app";

    useEffect(() => {
        axios.get(`${hostname}/threads`)
            .then(response => {
                console.log(response.data)
                setThreads(response.data)
            })
            .catch(error => {
                console.error('Error fetching threads:', error);
            });
    }, [])

    const submitThread = () => {
        if (!newThread.title.trim() || !newThread.content.trim()) {
            setError('Title and Content cannot be empty.');
            return;
        }
        axios.post(`${hostname}/threads`, newThread)
            .then(response => {
                console.log(response.data);
                setThreads([...threads, response.data]);
            })
            .catch(error => {
                console.error('Error creating thread:', error);
            });

        setNewThread({_id: '', title: '', content: '', likes: 0, dislikes: 0, comments: []});
        setError('');
    };

    return (
        <Container className="community-container" maxWidth="md" style={{backgroundColor: 'rgba(209,224,250,0.28)'}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        className="thread-textfield"
                        label="Have something interesting to share with the community? "
                        name="title"
                        value={newThread.title}
                        onChange={e => setNewThread({...newThread, [e.target.name]: e.target.value})}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        className="thread-textfield"
                        label="Publish a thread to start chatting! "
                        name="content"
                        value={newThread.content}
                        onChange={e => setNewThread({...newThread, [e.target.name]: e.target.value})}
                        fullWidth
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                    <Button className="submit-button" variant="contained" color="secondary" onClick={submitThread}
                            style={{marginRight: '10px'}}>
                        Publish
                    </Button>
                </Grid>
                {error && (
                    <Grid item xs={12}>
                        <Alert severity="error">{error}</Alert>
                    </Grid>
                )}
                {threads.map((thread, index) => (
                    <Grid item xs={12} key={index}>
                        <ThreadCard id={thread._id} title={thread.title} content={thread.content}
                                    initLikes={thread.likes} initDislikes={thread.dislikes}
                                    initComments={thread.comments}/>
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
};

export default Community;
