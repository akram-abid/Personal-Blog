import '../styles/blogsGrid.css'
import VerticalBlog from './verticalBlog'

function BlogsGrid() {
    return (
        <div className="blogsContainer">
            <div className="header">
                <h2>Recent Blogs</h2>
                <button>show more</button>
            </div>
            <div className="blogs">
                <VerticalBlog />
                <VerticalBlog />
                <VerticalBlog />
                <VerticalBlog />
                <VerticalBlog />
                <VerticalBlog />
            </div>
        </div>
    )
}

export default BlogsGrid