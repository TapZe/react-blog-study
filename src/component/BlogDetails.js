import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted');
            navigate('/');
        })
    }

    return (
            <div className="blog-details">
                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleDelete}>Delete Blog</button>
                    </article>
                )}
            </div>
        );
    }

    export default BlogDetails;