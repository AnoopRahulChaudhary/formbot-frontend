import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CURRENT_USER, TOKEN } from "../../constants/localStorageKey";

function FormDashboard() {
  const currentUserName = useSelector(
    (state) => state.currentUserReducer.username
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogOut() {
    localStorage.removeItem(CURRENT_USER);
    localStorage.removeItem(TOKEN);
    navigate("/");
  }

  return (
    <div>
      <nav>
        <ul>
          <li>{currentUserName}'s workspace</li>
          <li>Settings</li>
          <li onClick={handleLogOut}>Logout</li>
        </ul>
      </nav>

      <div className="folder">
        <button>Create a folder</button>
      </div>

      <div className="form">
        <button>Create a typebot</button>
      </div>
    </div>
  );
}

export default FormDashboard;
