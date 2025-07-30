import { NavLink } from "react-router-dom";
import Button from "../Ui/Button.tsx";

export default function MainHeader() {
  return (
    <>
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end>
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
