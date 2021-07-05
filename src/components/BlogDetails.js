import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './../customHook/useFetch';
import { useHistory } from 'react-router';
import { BASE_API_URL } from '../config/Config';
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`${BASE_API_URL}/blogs/${id}`);
    
    const history = useHistory();
    const handleClick= () => {
        fetch(`http://localhost:8000/blogs/${id}`,{
                method: 'DELETE'
            })
        .then(() => {
            console.log("Blog deleted");
            history.push('/');
        });
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div> 
    );
}
 
export default BlogDetails;