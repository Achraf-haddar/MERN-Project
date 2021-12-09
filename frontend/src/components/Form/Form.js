import React, {useState} from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
    // Initialize post data
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectionFile: ''
    });
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e) => {
        // Dispatch action
        // not to get refresh in the browser
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
            {/* Update the data using ...postData */}
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
            <div className={classes.fileInput}>
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                />
            </div>
            <Button className={classes.buttonSubmit} variant="container" color="primary" siaze="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" siaze="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}
export default Form;