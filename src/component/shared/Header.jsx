import { Link } from "react-router-dom";
import { Usecontext } from "../context/UserContext";
import Logo from "../shared/logo";
import MovieButton from "../Button/Button";


function Header() {
  const {Username} = Usecontext();
  return (
    <header className="header">

      <div className="logo">
        <Logo/>
        CineScope
      </div>

      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">TV Shows</a>
        <a href="#">Discover</a>
        <a href="#">{Username}</a>
        
      </nav>

      <div className="header-actions">
        <button>Search</button>
            <Link to="/register">
              <button>Sign In</button>
              {/* <MovieButton>
                Sign in
              </MovieButton> */}
            </Link>
      </div>

    </header>
  );
}

export default Header;