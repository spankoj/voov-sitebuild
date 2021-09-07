import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Router>
        <Link to="/home">COMPANY</Link>
      </Router>
      <p>Copyright &copy; COMPANY Kft.</p>
      <p>Design & web site by Voov</p>
    </footer>
  );
}
