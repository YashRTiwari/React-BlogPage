import React, {useState, useEffect} from 'react'
import BlogList from './BlogList.js';
import './Home.css';

export default function Home() {

    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id )
        setBlogs(newBlogs)
    }

    // Called -> Everytime component is rendered
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json()
        }) // returns a promise
        .then( (data) => {
            setBlogs(data)
        })
    }, []) // [] -> avoids re-render, i.e. will only runs once

    return (
        <div>
            {
                blogs && <BlogList blogs ={blogs} title="Hello World" handleDelete={handleDelete}/> // && conditional template
            }
               
        </div>
    )
}
