import "../styles/blog.css";

function VerticalBlog() {
  return (
    <div className="verticalBlog">
      <div className="vblogImage"></div>
      <div className="vblogContent">
        <div className="date">
          <h5>insight</h5>
          <h5>17 March 2025</h5>
        </div>
        <h1 className="title">Behind Modern Web Development</h1>
        <h3 className="intro">
          Our team explores the latest frameworks, tools, and methodologies that
          are shaping how we build applications today.
        </h3>
      </div>
    </div>
  );
}

export default VerticalBlog;
