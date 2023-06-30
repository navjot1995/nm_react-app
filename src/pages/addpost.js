
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Addpost() {
    let navigate = useNavigate();
    const [inputData, setInputData] = useState(
        { post: '', description: '', }
    );
    const token = useSelector(state => state.token);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setInputData({ ...inputData, [name]: value });
    }

    const submit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('post', inputData.post);
        formdata.append('description', inputData.description);
        console.log(token);
        let res = await axios({
            method: 'post',
            url: 'http://localhost:8000/addPost',
            headers: { "Authorization": `Bearer ${token}` },
            data: {
                post: inputData.post,
                description: inputData.description
            }
        });
        if (!res.status) {
            console.log("Invalid");
            return
        }
        console.log(res);
        return navigate('/post');
    }

    return (
        <div className="App">
            <div className="container">
                <div className="todo">
                    <figure>
                        <figcaption>Add Post</figcaption>
                    </figure>
                    <div className="addItems">
                        <form method="POST" encType="multipart/form-data" onSubmit={submit}>
                            <label>Post name:
                                <input type="text" name="post" value={inputData.post} onChange={handleInputs}  required/>
                            </label>
                            <br /><br />
                            <label>Description:
                                <textarea name="description" rows="5" cols="40" value={inputData.description} onChange={handleInputs} required></textarea>
                            </label>
                            <br /><br />
                            <input type="submit" name="submit" value="Submit"></input>
                        </form>
                    </div>
                    <div className="showItems">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addpost;
