import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Landing Page</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        {/* Add more links for other pages */}
      </ul>
    </nav>
  );
}

export default LandingPage