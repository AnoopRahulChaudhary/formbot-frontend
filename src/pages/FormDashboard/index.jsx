import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CURRENT_USER, TOKEN } from "../../constants/localStorageKey";
import { useEffect, useState } from "react";
import Folder from "../../components/Folder";
import FormChip from "../../components/form/FormChip";
import { addExisitngForms, addNewForm } from "../../actions/forms";
import { getForms } from "../../api/form";
import { addFolder, getFolders } from "../../api/folder";

function FormDashboard() {
  const forms = useSelector((state) => state.formsReducer);
  const [folders, setFolders] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [formDataFetchError, setFormDataFetchError] = useState("");
  const [folderDataFetchError, setFolderDataFetchError] = useState("");
  const [newFolderName, setNewFolderName] = useState("");
  const [newFolderCreationError, setNewFolderCreationError] = useState("");

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
    let formsInsideFolder = [];
    for (const key in forms) {
      const form = forms[key];
      if (form.refFolderId === folderId) {
        formsInsideFolder.push({ key, name: form.name, _id: form._id });
      }
    }

    console.debug(
      `forms available inside folderId ${folderId} is ${JSON.stringify(
        formsInsideFolder
      )}`
    );
    return formsInsideFolder;
  }

  function getFormsOutsideAllFolder() {
    let formsOutsideAllFolder = [];
    for (const key in forms) {
      const form = forms[key];
      if (!form.refFolderId) {
        formsOutsideAllFolder.push({ key, name: form.name, _id: form._id });
      }
    }

    console.debug(
      `forms available outside all folder is ${JSON.stringify(
        formsOutsideAllFolder
      )}`
    );
    return formsOutsideAllFolder;
  }

  async function handleCreateNewFolder(event) {
    event.preventDefault();

    const { statusCode, data, errorMessage } = await addFolder(newFolderName);
    if (Number(statusCode) !== 201) {
      setNewFolderCreationError(errorMessage);
      return;
    }

    setFolders((state) => [
      ...state,
      { id: data.folderId, name: newFolderName },
    ]);
  }

  function handleCreateFolderOnClick() {}

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
    console.log("getting forms and folders details");
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
        <form className="folder__create-new">
          <label htmlFor="folder-name">Create New Folder</label>
          <input
            onChange={(e) => setNewFolderName(e.target.value)}
            type="text"
            name="newFolderName"
            placeholder="Enter folder name"
          />
          <input onClick={handleCreateNewFolder} type="submit" value="Done" />
          <input type="submit" value="Cancel" />
        </form>
        <button onClick={handleCreateFolderOnClick}>Create a folder</button>
        {folderDataFetchError && <div>{folderDataFetchError}</div>}
        {folders.map((folder) => (
          <Folder
            folderId={folder._id}
            folderName={folder.name}
            setSelectedFolderId={setSelectedFolderId}
          />
        ))}
      </div>

      <div className="form">
        <button onClick={handleNewFormCreation}>Create a typebot</button>
        {formDataFetchError && <div>{formDataFetchError}</div>}
        {selectedFolderId &&
          getFormsInsideFolder(selectedFolderId).map((form) => (
            <FormChip
              formKeyInSate={form.key}
              formName={form.name}
              formId={form._id}
            />
          ))}
        {!selectedFolderId &&
          getFormsOutsideAllFolder().map((form) => (
            <FormChip
              formKeyInSate={form.key}
              formName={form.name}
              formId={form._id}
            />
          ))}
      </div>
    </div>
  );
}

export default FormDashboard;
