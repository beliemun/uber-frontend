import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

export function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User {userId}</h1>
      <hr />
      <Link to={`followers`}>See followers</Link>
      <Outlet
        context={{
          name: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}
