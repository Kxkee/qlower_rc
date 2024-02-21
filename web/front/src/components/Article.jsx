import PropTypes from 'prop-types'; // Import de PropTypes
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function Article({ author, topic, body, id, updateArticleById }) {

    const [authorState, setAuthor] = useState(author);
    const [topicState, setTopic] = useState(topic);
    const [bodyState, setBody] = useState(body);
    const handleUpdate = () =>{
        updateArticleById(id, authorState, topicState, bodyState);
    }
    return (
        <div className="article">
            <div className="texts">
                <h3>Article {id}</h3>
                <TextField id="outlined-basic" label="author" variant="outlined"
                value={authorState}
                onChange={(e)=>setAuthor(e.target.value)} />
                <TextField id="outlined-basic" label="topic" variant="outlined"
                value={topicState}
                onChange={(e)=>setTopic(e.target.value)}  />
            </div>
            <TextField
                id="outlined-multiline-static"
                label="body"
                multiline
                rows={4}
                value={bodyState}
                onChange={(e)=>setBody(e.target.value)}
                
            />
        <Button variant="contained" onClick={handleUpdate}>Update</Button>

        </div>
    );
}

Article.propTypes = {
    author: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    updateArticleById: PropTypes.func.isRequired,
};
