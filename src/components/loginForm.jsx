import '../styles/loginForm.css';

const LoginForm = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h3>Subscribe to our newsletter for daily industry insights</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Start Free Trial</button>
          </form>
        </div>

        <div className="footer-divider-vertical" />

        <div className="follow-us">
          <p className="follow-title">Follow us</p>
          <p className="follow-text">Get the latest news and travel inspiration.</p>
          <div className="social-icons">
            <span>🐦</span>
            <span>📘</span>
            <span>▶️</span>
          </div>
        </div>
      </div>

      <div className="footer-divider-horizontal" />
    </div>
  );
};

export default LoginForm;
