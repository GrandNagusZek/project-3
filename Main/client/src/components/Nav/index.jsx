import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row right-nav">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row right-nav">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <header className="flex-row px-1">
      <div className="flex-row">
        <h1>
          <Link to="/">
            <span role="img" aria-label="shopping bag">
              
            </span>
            AthleticMia
          </Link>
        </h1>
        <div className="flex-grow">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <nav>{showNavigation()}</nav>
      </div>
    </header>
  );
}

export default Nav;
