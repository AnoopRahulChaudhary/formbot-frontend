import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CURRENT_USER, TOKEN } from "../../constants/localStorageKey";
import { useEffect, useState } from "react";
import Folder from "../../components/Folder";
import FormChip from "../../components/form/FormChip";
import { addExisitngForms, addNewForm } from "../../actions/forms";
import { getForms } from "../../api/form";
import { getFolders } from "../../api/folder";

function FormDashboard() {
  const forms = useSelector((state) => state.formsReducer);
  const [folders, setFolders] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [formDataFetchError, setFormDataFetchError] = useState("");
  const [folderDataFetchError, setFolderDataFetchError] = useState("");

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

  async function fetchForms() {
    const { statusCode, data, errorMessage } = await getForms();
    if (Number(statusCode) !== 200) {
      setFormDataFetchError(errorMessage);
      return;
    }

    dispatch(addExisitngForms(data.forms));
  }

  async function fetchFolders() {
    const { statusCode, data, errorMessage } = await getFolders();
    if (Number(statusCode) !== 200) {
      setFolderDataFetchError(errorMessage);
      return;
    }

    setFolders(data.folders);
  }

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
        {folderDataFetchError && <div>{folderDataFetchError}</div>}
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
        {formDataFetchError && <div>{formDataFetchError}</div>}
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
