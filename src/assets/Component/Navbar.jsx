import { Link } from 'react-router-dom';
import logo from '../Pages/Kalvium-Logo-SVG (2).svg'


export default function Navbar() {
  return (
    <div className="navbar">
    <div className="flex">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="menu-container">
        <Link to="/Contact">Contact</Link>
        <span>&nbsp;&nbsp;</span> 
        <Link to="/Registration">Registration</Link>
      </div>
    </div>
  </div>
  );
}