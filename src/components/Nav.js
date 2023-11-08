import { NavLink } from "react-router-dom";

const Nav = ({ topics }) => {
  return (
    <nav className="main-nav">
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <NavLink to={`/${topic}`}>{topic}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
