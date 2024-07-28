import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CURRENT_USER, TOKEN } from "../../constants/localStorageKey";
import { useEffect, useState } from "react";
import Folder from "../../components/Folder";
import FormChip from "../../components/form/FormChip";
import { addNewForm } from "../../actions/forms";

function FormDashboard() {
  const forms = useSelector((state) => state.formsReducer);
  const [folders, setFolders] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState("");

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

  function handleNewFormCreation() {
    const newFormKey = Object.keys(forms).length + 1;
    dispatch(addNewForm(newFormKey, selectedFolderId));
    navigate(`/formWorkspace/${newFormKey}`);
  }

  function getFormsInsideFolder(folderId) {
    return [];
  }

  function getFormsOutsideAllFolder() {
    return [];
  }

  function fetchForms() {}

  function fetchFolders() {}

  useEffect(() => {
    fetchForms();
    fetchFolders();
  }, []);

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
        {folders.map((folder) => (
          <Folder
            folderId={folder.id}
            folderName={folder.name}
            setSelectedFolderId={selectedFolderId}
          />
        ))}
      </div>

      <div className="form">
        <button onClick={handleNewFormCreation}>Create a typebot</button>
        {selectedFolderId &&
          getFormsInsideFolder(selectedFolderId).map((form) => (
            <FormChip formKeyInSate={form.key} formName={form.name} />
          ))}
        {!selectedFolderId &&
          getFormsOutsideAllFolder().map((form) => (
            <FormChip formKeyInSate={form.key} formName={form.name} />
          ))}
      </div>
    </div>
  );
}

export default FormDashboard;
