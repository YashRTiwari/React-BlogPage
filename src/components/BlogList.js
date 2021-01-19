import React from 'react'
import './BlogItem.css';
import {Link} from 'react-router-dom';

export default function BlogList({blogs, title, }) {

    return (
        <div className="blog-lists">
            <h2>{title}</h2>
            {blogs.map( (item, index) => {
                return (
                    <Link to={`/blogs/${item.id}`}>
                        <div className="blog-preview" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.author}</p>
                        </div>
                    </Link>
                );
             })}
        </div>
    );
}
