import React, {useState, useEffect} from 'react'
import BlogList from './BlogList.js';
import './Home.css';

export default function Home() {

    const [blogs, setBlogs] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( blog => blog.id !== id )
    //     setBlogs(newBlogs)
    // }

    // Called -> Everytime component is rendered
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok) {
                    setLoading(false)
                    throw Error("Unable to fetch data")
                }
                return response.json()
            }) // returns a promise
            .then( (data) => {
                setBlogs(data)
                setLoading(false)
                setError(null)
            })
            .catch( e => { 
                setError(e.message)
            })
    }, []) // [] -> avoids re-render, i.e. will only runs once

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
