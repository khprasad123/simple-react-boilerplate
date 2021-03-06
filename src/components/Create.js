import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { BASE_API_URL } from '../config/Config';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('hari');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author };
        
        setIsPending(true);

        setTimeout(() => {
            fetch(`${BASE_API_URL}/blogs`,{
                method: 'POST',
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(blog)
            })
            .then(() => {
                console.log("New Blog added");
                setIsPending(false);
                history.push('/');
            });
        },1000);

        
    
    }

    return ( 
        <div className="create">
            <h2> Add a New Blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="hari">hari</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div> 
    );
}
 
export default Create;