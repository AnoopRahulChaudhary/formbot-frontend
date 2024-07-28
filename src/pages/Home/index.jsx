import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">Login</Link><br />
      <Link to="/login">Create a FormBot</Link>
    </div>
  );
}

export default Home;
