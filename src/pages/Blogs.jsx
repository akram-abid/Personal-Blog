import BlogsGrid from "../components/blogsGrid";
import '../styles/blogsPage.css';
import blogs from '../fake/data';

function Blogs() {
  return (
    <div className="blogsPage">
      <header className="blogsHeader">
        <div className="blogsHeader"></div>
        <div className="searchBar">
          <input type="text" placeholder="Search blogs..." />
          <button className="searchButton">Search</button>
        </div>
      </header>
      <div className="blogsContainer">
        <div className="blogsFilters">
            <h2>Blogs</h2>
            <select className="filter">
              <option value="all">All</option>
              <option value="web-development">Web Development</option>
              <option value="design">Design</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
        </div>
        <BlogsGrid blogs={blogs} />
      </div>
    </div>
  );
}

export default Blogs;