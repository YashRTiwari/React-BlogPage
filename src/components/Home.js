import React, {useState, useEffect} from 'react'
import BlogList from './BlogList.js';
import './Home.css';
import { useFetch } from '../hooks/useFetch';

export default function Home() {

    // call data as blogs
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div>
            {
                isLoading && <p>Data is Loading...</p>
            }
            {
                blogs && <BlogList blogs ={blogs} title="Hello World" /> // && conditional template
            }
            {
                error && <p>{error}</p>
            }
               
        </div>
    )
}
