import { useOutletContext } from "react-router-dom";

interface FollowContext {
  name: string;
}

export function Followers() {
  const context = useOutletContext<FollowContext>();
  return <h1>Followers {context.name}</h1>;
}
