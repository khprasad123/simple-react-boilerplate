import React from 'react';
import BlogList from "./BlogList";
import useFetch from './../customHook/useFetch';
import { BASE_API_URL } from '../config/Config';

const Home = (props) => {
     
    const { data: blogs, isPending, error} = useFetch(`${BASE_API_URL}/blogs`);

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}  title="All Blogs !"/>}
        </div>
    );
}
 
export default Home;



