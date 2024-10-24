import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";
import { useEffect } from "react";

export function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setTimeout(() => {
      setSearchParams({
        search: "cat",
      });
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
