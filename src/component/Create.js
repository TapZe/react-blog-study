import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: 'mario'
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {...formData};
        setIsLoading(true);
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Successfully Added');
            setIsLoading(false);
            navigate('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                />
                <label>Blog Body</label>
                <textarea
                    required
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                ></textarea>
                <label htmlFor="">Blog Author</label>
                <select
                    required
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Add Log</button>}
                {isLoading && <button disabled>Adding Blog ....</button>}
            </form>
        </div>
    );
}

export default Create;