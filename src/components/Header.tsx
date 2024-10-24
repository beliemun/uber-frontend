import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/about");
  };
  return (
    <h1>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <button onClick={onClick}>About</button>
        </li>
      </ul>
    </h1>
  );
}
