/* eslint-disable no-mixed-operators */
import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "../components/copyright";
import axios from 'axios';
import { useSelector } from 'react-redux';

const defaultTheme = createTheme();

export default function SignIn() {
    let navigate = useNavigate();
    const token = useSelector(state => state.token);

    const [inputData, setInputData] = useState(
        { post: '', description: '', }
    );

    

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setInputData({ ...inputData, [name]: value });
    }

    let params = new URL(document.location).searchParams;
    let postId = params.get("post"); 

    useEffect(() => {
        fetch(`http://localhost:8000/${postId}`, {
          method: "get",
          headers: { "Authorization": `Bearer ${token}` },
        }).then(res => res.json())
          .then((data) => {
            setInputData({ post : data && data.post || '', description :  data &&  data.description || ''});
          });
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let res = await axios({
            method: 'put',
            url: 'http://localhost:8000/updatepost',
            headers: { "Authorization": `Bearer ${token}` },
            data: {
                postId: postId,
                post:  data.get('post'),
                description:  data.get('description'),
            }
          });

        if (!res.status) {
            console.log("Invalid");
            return
        }
        return navigate('/post');
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Update Post
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="post"
                            label="Post"
                            name="post"
                            autoComplete="post"
                            autoFocus
                            value={inputData.post}
                            onChange={handleInputs}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            type="textarea"
                            id="description"
                            value={inputData.description}
                            onChange={handleInputs}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
                <br />
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
