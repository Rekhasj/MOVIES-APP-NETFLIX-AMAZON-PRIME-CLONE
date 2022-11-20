import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

const Heading = () => (
  <nav className="navbar">
    <div className="nav-card">
      <Link to="/">
        <img
          alt="website logo"
          className="movie-logo-image"
          src="https://res.cloudinary.com/dr4h73xhp/image/upload/v1668663235/Group_7399_kernfa.png"
        />
      </Link>

      <ul className="heading-list-container">
        <li>
          <Link to="/" className="heading-list">
            Home
          </Link>
        </li>
        <li>
          <Link to="/popular" className="heading-list">
            Popular
          </Link>
        </li>
      </ul>
    </div>
    <div className="nav-card">
      <Link to="/search">
        <button
          type="button"
          className="search-icon-button"
          testid="searchButton"
        >
          <HiOutlineSearch className="search-icon" />
        </button>
      </Link>
      <Link to="/account">
        <img
          alt="profile"
          className="avatar-image"
          src="https://res.cloudinary.com/dr4h73xhp/image/upload/v1668782921/Avatar_vxwtis.svg"
        />
      </Link>
    </div>
  </nav>
)

export default Heading
