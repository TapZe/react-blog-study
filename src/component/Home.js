import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
    /*data: blogs rename the data to blogs*/
    return (
        <div className="home">
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading">Loading ....</div>}
            {blogs && <BlogList blogs={blogs} compTitle="All Blogs" />}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Open')} compTitle="Open's Blogs"/> */}
        </div>
    );
}

export default Home;