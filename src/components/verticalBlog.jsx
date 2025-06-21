import "../styles/blog.css";

function VerticalBlog({blog}) {
  return (
    <div className="verticalBlog">
      <div className="vblogImage"></div>
      <div className="vblogContent">
        <div className="date">
          <h5>insight</h5>
          <h5>{blog.date}</h5>
        </div>
        <h1 className="title">{blog.title}</h1>
        <h3 className="intro">{blog.intro}</h3>
      </div>
    </div>
  );
}

export default VerticalBlog;
