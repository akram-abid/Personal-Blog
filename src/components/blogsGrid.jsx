import '../styles/blogsGrid.css'
import VerticalBlog from './verticalBlog'

function BlogsGrid({blogs}) {
    return (
        <div className="blogsGridContainer">
            <div className="blogsGridHeader">
                <h2>Recent Blogs</h2>
                <button>show more</button>
            </div>
            <div className="blogs">
                {blogs.map((blog, index) => (
                    <VerticalBlog key={index} blog={blog} />
                ))}
            </div>
        </div>
    )
}
export default BlogsGrid