import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navigation">
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/Home" className="home">Home</Link>
        <Link to="/Calculator" className="calc">Calculator</Link>
        <Link to="/Quotes" className="quotes">Quotes</Link>
      </nav>
    </div>
  );
}
