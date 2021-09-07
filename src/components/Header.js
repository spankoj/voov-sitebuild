import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default function Footer() {
  return (
    <header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">COMPANY</Link>
              </li>
              <li>
                <Link to="/">Szolgáltatások</Link>
              </li>
              <li>
                <Link to="/">Kapcsolat</Link>
              </li>
              <li>
                <Link to="/">Pályázati információk</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/">COMPANY</Link>
      </Router>
    </header>
  );
}
