import { useState, useEffect } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './App.css'
import Article from './components/Article';

function App() {

  const [author, setAuthor] = useState('');
  const [topic, setTopic] = useState('');
  const [body, setBody] = useState('');
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_DJANGO_URL}articles/`);
      setArticles(res.data);
    }catch(err)
    {
      console.error(err);
    }
  }

  const updateArticlebyId = async (id, author, topic, body) =>{
    try {
        await axios.put(`${import.meta.env.VITE_DJANGO_URL}article/${id}`, {
          author,
          topic,
          body
        })
        getArticles();
    }catch(err)
    {
        console.error(err);
    }
}

  useEffect(() => {
    getArticles();
  }, []);

  const submitArticle = async () => {
    try {
        await axios.post(`${import.meta.env.VITE_DJANGO_URL}articlep/`, {
        author: author,
        topic: topic,
        body: body
      });
      getArticles();
      setAuthor('');
      setTopic('');
      setBody('');
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };
  

  return (
    <>
      <h1>Articles</h1>
        <div className="app">
          <div className="list">
          {articles && articles.map((article) => (
            <Article 
              key={article.id}
              author={article.author}
              topic={article.topic}
              body={article.body}
              id={article.id}
              updateArticleById={updateArticlebyId}
               />
          ))}
          </div>
          <div className="card">
          <h2>New Article</h2>
            <div className="article">
              <div className="texts">
                <TextField id="outlined-basic" label="author" variant="outlined" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <TextField id="outlined-basic" label="topic" variant="outlined" value={topic} onChange={(e) => setTopic(e.target.value)} />
              </div>
              <TextField
                id="outlined-multiline-static"
                label="body"
                multiline
                rows={4}
                value={body} onChange={(e) => setBody(e.target.value)}
              />
              <Button variant="contained" onClick={submitArticle}>Submit</Button>
            </div>
          </div>
        </div>
      <p className="read-the-docs">
        Qlower rc test
      </p>
    </>
  )
}

export default App
