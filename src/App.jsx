import "./App.css";
import BlogsGrid from "./components/blogsGrid";
import HorizontalBlog from "./components/horizontalBlogView";
import LoginForm from "./components/loginForm";
import blogs from './fake/data'

function App() {
  return (
    <div className="container">
      <div className="background-image">
        <div className="gradient">
          <h1>Experience Room</h1>
          <p>
            Welcome to my web development journey. Sharing experiences and
            insights from years of coding.
          </p>
        </div>
      </div>
      <HorizontalBlog />
      <LoginForm />
      <BlogsGrid blogs={blogs}/>
    </div>
  );
}

export default App;
