import { useParams } from "react-router-dom";
import {useFetch} from '../hooks/useFetch'
import './BlogDetails.css'

const BlogDetails = () => {

    const { id } = useParams();

    const {data, isLoading, error} = useFetch('http://localhost:8000/blogs/'+id)


    return (
        <div className="blog-details">
            <h2>
                {isLoading && <p>Blog is loading..</p>}
                {error && <p>Unable to fetch data</p>}
                {data && (
                    <article>
                        <h2 className="title">{data.title}</h2>
                        <p className="author">- {data.author}</p>
                        <p className="blog-body">{data.body}</p>
                    </article>
                )}
            </h2>
        </div>
        )
}

export default BlogDetails;